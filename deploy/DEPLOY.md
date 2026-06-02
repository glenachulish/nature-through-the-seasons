# Deploying to the Pi

Target URL: **`https://ceol-pi.tail01672f.ts.net/nature/`**
Internal port: **8085** (Nginx) — change in one place (`nature.nginx.conf`) if
it clashes with anything already bound.

This is the safe, additive path-prefix model from `PI-INFRASTRUCTURE.md`. It
does **not** touch Ceòl, Òrain, or Shadowing.

---

## 1. Get the code onto the Pi

```bash
ssh pi@100.86.212.103
cd ~
git clone https://github.com/glenachulish/<repo-name>.git nature
# later updates are just:  cd ~/nature && git pull
```

(If the folder isn't named `nature`, update `root` in the Nginx conf to match.)

## 2. Wire up Nginx

```bash
sudo cp ~/nature/deploy/nature.nginx.conf /etc/nginx/sites-available/nature
sudo ln -s /etc/nginx/sites-available/nature /etc/nginx/sites-enabled/nature
sudo nginx -t                 # test the config
sudo systemctl reload nginx
# sanity check it's serving locally:
curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1:8085/   # expect 200
```

If `nginx -t` complains the port is taken, pick another free internal port,
change it in BOTH the conf's `listen` line and the Funnel command below.

## 3. Add the Funnel path — ADDITIVELY

This is the verified-safe command. `--set-path` APPENDS a handler; it leaves
the existing `/` (Ceòl) and `/orain` handlers on 443 intact:

```bash
sudo tailscale funnel --bg --https=443 --set-path=/nature http://127.0.0.1:8085
```

## 4. Verify nothing else broke (do this every time you touch 443)

```bash
tailscale serve status
# the OTHER paths must still answer:
curl -s -o /dev/null -w "ceol /     -> %{http_code}\n" https://ceol-pi.tail01672f.ts.net/
curl -s -o /dev/null -w "orain      -> %{http_code}\n" https://ceol-pi.tail01672f.ts.net/orain/
curl -s -o /dev/null -w "nature     -> %{http_code}\n" https://ceol-pi.tail01672f.ts.net/nature/
```

Then open `https://ceol-pi.tail01672f.ts.net/nature/` on desktop and phone.
Confirm: the page loads, CSS/JS load (no 404s in dev tools), the current month
is highlighted, month switching works, and a card opens the modal.

## 5. Rollback (if needed)

Removing just this path leaves everything else untouched:

```bash
sudo tailscale funnel --https=443 --set-path=/nature off --yes
```

---

## Notes

- **Fonts:** the app links Google Fonts (Fraunces + Spectral) with a Georgia
  fallback. Over the Funnel the browser fetches them directly, so they'll work
  for end users even though the Pi never serves them. If you'd rather not
  depend on Google, self-host the two woff2 files in a `fonts/` folder and
  swap the `<link>` for an `@font-face` block — keep the paths relative.
- **Updates:** `git pull` on the Pi is enough; Nginx serves files straight from
  disk, no restart needed (the 7-day asset cache is per-browser, so a hard
  refresh shows changes immediately during testing).
