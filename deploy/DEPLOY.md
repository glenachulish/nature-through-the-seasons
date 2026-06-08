# Deploying to the Pi

Target URL: **`https://ceol-pi.tail01672f.ts.net/nature/`**
Internal port: **8085** (a plain Python static server, run under systemd).

> **This doc was rewritten on 2026-06-05 after the first real deploy.** The
> earlier version assumed Nginx and a particular Funnel flag behaviour — both
> were wrong for this Pi. What's below is what actually worked. The key facts
> the old doc got wrong are called out in **⚠️ Reality check** boxes so the
> mistakes aren't repeated.

This is the safe, additive path-prefix model from `PI-INFRASTRUCTURE.md`. It
shares the 443 endpoint with Ceòl (`/`) and Òrain (`/orain`) and must not
disturb them.

---

## How the Pi actually serves apps

> **⚠️ Reality check: there is no Nginx on this Pi.** `which nginx` returns
> nothing and `/etc/nginx/` does not exist. Each app is its own process bound to
> a localhost port, and Tailscale Funnel proxies a path on 443 to that port.
> Òrain, for example, is a uvicorn/FastAPI service on 127.0.0.1:8004 managed by
> systemd. Nature is a *static* site, so it doesn't need a framework — a plain
> `python3 -m http.server` under systemd is the right fit, and matches the
> "one process per app, kept alive by systemd" pattern already on the box.

---

## 1. Get the code onto the Pi

```bash
ssh pi@ceol-pi.local          # fallback: ssh pi@100.86.212.103
cd ~
git clone https://github.com/glenachulish/nature-through-the-seasons.git nature
# later updates are just:  cd ~/nature && git pull
```

> **⚠️ Reality check: SSH as `pi`, never as `glenachulish`.** `glenachulish` is
> the Tailscale account owner, not a Linux user on the Pi. Use `pi@ceol-pi.local`
> (mDNS) or the tailnet IP `pi@100.86.212.103` as a fallback. The repo is
> `nature-through-the-seasons`; clone it into a folder named `nature`.

## 2. Serve the static files with a systemd service

Create the unit (mirrors Òrain's hardened unit, adjusted for a static server —
it only ever *reads* files, so no `ReadWritePaths` is needed):

```bash
sudo tee /etc/systemd/system/nature.service >/dev/null <<'UNITEOF'
[Unit]
Description=Nature Through the Seasons (static)
After=network-online.target tailscaled.service
Wants=network-online.target

[Service]
Type=simple
User=pi
Group=pi
WorkingDirectory=/home/pi/nature
ExecStart=/usr/bin/python3 -m http.server 8085 --bind 127.0.0.1 --directory /home/pi/nature
Restart=on-failure
RestartSec=3

# Hardening
NoNewPrivileges=true
PrivateTmp=true
ProtectSystem=strict
ProtectHome=read-only
ProtectKernelTunables=true
ProtectKernelModules=true
ProtectControlGroups=true

[Install]
WantedBy=multi-user.target
UNITEOF
```

> **⚠️ Reality check: use a unique heredoc terminator.** The first time this was
> done with `<<'EOF'`, the closing `EOF` collided with text and silently
> truncated the file (dropping `[Install]`). Use `UNITEOF` (or anything
> distinctive) and verify with `tail -5` afterwards.

Enable, start, and confirm it serves locally:

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now nature.service
sleep 2                                  # give http.server a moment to bind
systemctl is-active nature.service       # expect: active
tail -5 /etc/systemd/system/nature.service   # sanity: ends cleanly with [Install]/WantedBy
curl -s -o /dev/null -w "root    -> %{http_code}\n" http://127.0.0.1:8085/
curl -s -o /dev/null -w "data.js -> %{http_code}\n" http://127.0.0.1:8085/data.js
curl -s -o /dev/null -w "styles  -> %{http_code}\n" http://127.0.0.1:8085/styles.css
```

All three should be `200`. A `000` immediately after a restart is just a timing
blip — wait a second and re-curl before worrying.

## 3. Publish `/nature` on 443 — with Funnel

> **⚠️ Reality check: this is the step the old doc got most wrong.**
> 1. `--set-path` on this CLI **prints "Removing Funnel for ceol-pi…"** and
>    rebuilds the 443 config. It *does* re-append the other handlers in the same
>    run, so they survive — but watch the output every time.
> 2. Using **`tailscale serve`** (rather than `funnel`) to add the path
>    **turns Funnel OFF for 443** — the port drops to "tailnet only" and the
>    apps vanish from the public internet. Always use **`tailscale funnel`** for
>    443 so public exposure stays on.

First, **capture the current config** so you have an exact rollback:

```bash
tailscale serve status
tailscale serve get-config        # save this output somewhere before changing anything
```

Add the path with `funnel` (keeps Funnel on, appends to `/` and `/orain`):

```bash
sudo tailscale funnel --bg --https=443 --set-path=/nature http://127.0.0.1:8085
```

## 4. Verify nothing else broke (do this EVERY time you touch 443)

```bash
tailscale serve status      # the 443 block MUST say "(Funnel on)" and list / , /orain , /nature
curl -s -o /dev/null -w "ceol  /        -> %{http_code}\n" https://ceol-pi.tail01672f.ts.net/
curl -s -o /dev/null -w "orain /orain/  -> %{http_code}\n" https://ceol-pi.tail01672f.ts.net/orain/
curl -s -o /dev/null -w "nature /nature/-> %{http_code}\n" https://ceol-pi.tail01672f.ts.net/nature/
```

Expect `/nature/` and `/orain/` = `200`. **If the 443 header says
"(tailnet only)"** instead of "(Funnel on)", Funnel got switched off — re-run
the `funnel` command in step 3 to turn it back on.

> **Note on Ceòl's 502:** at the time of the first deploy, `/` (Ceòl, port 8080)
> returned **502** — nothing was listening on 8080 (`ceol.service` was up but not
> bound; only Òrain's 8004 was live). That is a **pre-existing Ceòl issue,
> unrelated to deploying Nature.** A 502 here means "handler present, app behind
> it not answering," not a Funnel problem.

Then open `https://ceol-pi.tail01672f.ts.net/nature/` on desktop and phone.
Confirm: the page loads *with styling* (CSS/JS load — no 404s in dev tools, which
would mean a prefix/relative-path problem), the current month is highlighted,
month switching works, a card opens the modal, and "Find out more" opens the
preview panel.

## 5. Rollback (if a 443 change goes wrong)

Re-assert all three handlers **with `funnel`** (so Funnel stays on). This
rebuilds 443 to the known-good state:

```bash
sudo tailscale funnel --bg --https=443 --set-path=/        http://127.0.0.1:8080
sudo tailscale funnel --bg --https=443 --set-path=/orain   http://127.0.0.1:8004
sudo tailscale funnel --bg --https=443 --set-path=/nature  http://127.0.0.1:8085
```

To remove just Nature and leave the rest:

```bash
sudo tailscale funnel --https=443 --set-path=/nature off --yes
```

---

## Routine updates (the common case)

Once deployed, shipping new code is just:

```bash
# on the Mac: commit + push
cd "$HOME/Nature Through the Seasons" && git add -A && git commit -m "…" && git push
# on the Pi: pull
ssh pi@ceol-pi.local 'cd ~/nature && git pull'
```

No systemd restart and no Funnel change are needed — `http.server` serves files
straight from disk. A browser **hard refresh** (Cmd-Shift-R) shows changes
immediately. (Only restart the service — `sudo systemctl restart nature.service`
— if you change the unit file or suspect the process is wedged.)

---

## Notes

- **Fonts:** the app links Google Fonts (Fraunces + Spectral) with a Georgia
  fallback. Over the Funnel the browser fetches them directly, so they work for
  end users even though the Pi never serves them. To drop the Google dependency,
  self-host the two woff2 files in a relative `fonts/` folder and swap the
  `<link>` for an `@font-face` block.
- **Prefix-awareness:** the app lives under `/nature/`. Tailscale strips the
  prefix before the Python server sees the request, but the browser keeps it.
  `<base href="./">` in `index.html` plus strictly relative asset paths (no
  leading slashes anywhere) is what makes this work. Don't add leading-slash
  paths.
- **Why not Nginx:** there's no Nginx on this Pi and no need to install one for
  a static site. If a future app needs rewrite rules, caching headers, or
  multiple backends, revisit — but for static files, `http.server` under systemd
  is simpler and matches the box.
