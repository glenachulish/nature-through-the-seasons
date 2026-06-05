# Nature Through the Seasons — Status & To-Do

*The rolling work log and to-do list. Updated at the END of every session.
For the stable project truth (architecture, paths, the prefix rule), read
`NATURE_PROJECT_NOTES.md` first.*

---

## Where we are right now

**Phase 1–4 (build + local + GitHub) are DONE.** The app is written, fully
working, tested locally on the Mac, and pushed clean to GitHub. January and
February are populated with real data (the pilot); March–December are
scaffolded. **Not yet deployed to the Pi** — that's the next session.

---

## Session log

### Session 1 — 2026-06-02
- Read the project brief, data, and Pi infrastructure docs; agreed the plan
  (Nginx on the Pi; pilot January + February first, rest later).
- Built all four files plus README and a `deploy/` folder (Nginx conf +
  deploy steps). Made the app prefix-aware from the first commit.
- Populated January & February fully (species, actions, Baker/Collins page
  numbers, reference links, folklore, plant uses). Scaffolded the other ten
  months (names + many page numbers; enrichment fields left blank).
- Verified: both JS files lint clean; data is well-formed (12 months, ~230
  species entries, all 23 Jan/Feb entries enriched, schema correct);
  prefix-aware serving confirmed (page + assets 200 under `/nature/`, zero
  absolute paths); rendered desktop, mobile, and modal screenshots — all good.
- On the Mac: downloaded + unzipped, ran locally on **port 8090** (8000 was
  in use), confirmed it works in the browser.
- Set up git and pushed to GitHub. **Hit and fixed a snag:** the first push
  accidentally included the Word docs + indexes and nested the app one folder
  deep (the `mv` landed inside an existing folder; `git init` ran too high up).
  Fixed by moving docs to `~/Nature Project Docs/`, flattening the app to the
  top of `~/Nature Through the Seasons`, deleting `.git`, and force-pushing a
  clean repo. GitHub now shows only the app files. Confirmed by screenshot.

---

## TO-DO

### ☐ Phase 5 — Deploy the pilot to the Pi (NEXT SESSION)
The whole point of doing this next is to prove the `/nature/` path end-to-end
while the app is still small. Touches the live 443 Funnel, so go carefully and
verify the neighbours after. Give the user exact one-command-at-a-time steps.
- [ ] SSH in: `ssh pi@100.86.212.103`
- [ ] `git clone` the repo to `~/nature` on the Pi
- [ ] Install the Nginx server block (`deploy/nature.nginx.conf`), `nginx -t`,
      reload, and confirm it serves locally on port 8085
- [ ] Check port 8085 is actually free on the Pi first; if not, pick another
      and change it in BOTH the conf and the Funnel command
- [ ] Add the Funnel path additively:
      `sudo tailscale funnel --bg --https=443 --set-path=/nature http://127.0.0.1:8085`
- [ ] Immediately verify the OTHER paths still work (curl Ceòl `/` and
      `/orain/`) — this is the safety check, do not skip
- [ ] Load `https://ceol-pi.tail01672f.ts.net/nature/` on desktop AND phone;
      confirm assets load (no 404s), month auto-detects, switching works, modal
      opens
- [ ] Record the final port + serve command in `PI-INFRASTRUCTURE.md`

### ☐ Phase 6 — Data enrichment (March → December)
Ongoing, can happen in parallel with/after deploy. Pilot months are the
template to match.
- [ ] Fill `referenceUrl` (RSPB / Wildlife Trusts / Woodland Trust) for each
      species, month by month
- [ ] Fill `folklore` where sources exist
- [ ] Fill `medicalUses` / `culinaryUses` for plants & fungi (use the forager's
      calendar + foraging pocket guide indexes)
- [ ] Fill remaining `collinsPage` (birds) and `bakerPage` (all) gaps from the
      indexes
- [ ] Suggestion: finish ONE whole month end-to-end first as a worked example,
      then batch the rest

### ☐ Phase 6+ — Polish / nice-to-haves (later, optional)
- [ ] Decide whether to self-host the two fonts (woff2) instead of Google Fonts
      — removes the external dependency; see note in `deploy/DEPLOY.md`
- [ ] Surface the "Did you know?" content from the brief in the UI, if wanted
- [ ] Settle the update workflow once deployed (edit on Mac → push → `git pull`
      on Pi)

---

## Open questions / decisions parked
- None outstanding. (Nginx vs python http.server → **Nginx**, decided.
  Pilot months → **Jan + Feb**, decided. Local port → **8090**, decided.)

---

## Quick facts (so a new session doesn't have to hunt)
- Repo: https://github.com/glenachulish/nature-through-the-seasons (`main`)
- Mac app folder: `/Users/callummaclellan/Nature Through the Seasons`
- Mac docs (not in repo): `~/Nature Project Docs/`
- Local test: `python3 -m http.server 8090`
- Pi: `ssh pi@100.86.212.103` → planned URL `…ts.net/nature/`, Nginx port 8085
- The non-negotiable: **relative URLs only** (prefix-aware). Never absolute.
