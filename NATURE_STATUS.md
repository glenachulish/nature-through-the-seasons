# Nature Through the Seasons — Status & To-Do

*The rolling work log and to-do list. Updated at the END of every session.
For the stable project truth (architecture, paths, the prefix rule), read
`NATURE_PROJECT_NOTES.md` first.*

---

## Where we are right now

**The app is BUILT, POPULATED, and LIVE ON THE PI.** All 12 months are
populated with real data (referenceUrl, folklore, verified page numbers,
conservative plant/fungi safety notes). The "more info" feature is a clean
in-page preview panel (preview + "open full site in new tab"; no iframe). The
site title doubles as a scroll-to-top "home" control. It's deployed and
publicly reachable at **`https://ceol-pi.tail01672f.ts.net/nature/`** via
Tailscale Funnel, served by a `python3 -m http.server` systemd service
(`nature.service`) on internal port 8085.

The home-button change (app.js / index.html / styles.css) is **committed but
check whether it's pulled to the Pi** — see To-Do. From here on it's polish and
optional enhancements; the core project is done.

---

## Session log

### Session 4 — 2026-06-05 (later)
Deployed to the Pi and added a home button.

- **DEPLOYED — the app is live** at `https://ceol-pi.tail01672f.ts.net/nature/`.
  The deploy diverged sharply from the old DEPLOY.md, which has now been
  rewritten. What actually happened:
  - **No Nginx on the Pi** (none installed, no `/etc/nginx`). Apps run as
    per-port processes behind Tailscale Funnel. Nature is static, so it's served
    by a hardened **`nature.service`** systemd unit running
    `python3 -m http.server 8085 --bind 127.0.0.1` from `/home/pi/nature`.
  - **SSH is `pi@ceol-pi.local`** (fallback IP `100.86.212.103`), never
    `glenachulish`.
  - Code delivered by `git clone … nature` on the Pi (repo is public).
  - **Funnel gotchas, now documented:** `--set-path` prints "Removing Funnel…"
    and rebuilds 443 (the other handlers survive in the same run, but watch the
    output); and using `tailscale serve` instead of `tailscale funnel` for 443
    silently turns Funnel OFF (drops to "tailnet only"). Fixed by re-asserting
    the path with `funnel`. 443 now serves `/` (Ceòl), `/orain` (Òrain) and
    `/nature` with Funnel on.
  - `/nature/` returns 200 publicly; Òrain 200. **Ceòl returns 502** — a
    pre-existing problem (nothing bound to 8080), unrelated to this deploy.
  - Heredoc tip learned the hard way: the unit file was first written with
    `<<'EOF'`, the terminator collided with text and truncated the file. Use a
    distinctive terminator (`UNITEOF`) and `tail -5` to verify.
- **Title is now a "home" button** — clicking/tapping the title (or Enter/Space
  when focused) smoothly scrolls to the top while keeping the current month.
  Accessible (role=button, tabindex, aria-label), respects reduced-motion,
  shows hover/active/focus states. Verified with a jsdom test (7/7). Touched
  `app.js`, `index.html`, `styles.css`.
- **DEPLOY.md fully rewritten** to match reality (systemd `http.server`, correct
  SSH, the Funnel quirks, rollback with `funnel`, routine `git pull` updates).

### Session 3 — 2026-06-05
Finished the panel rework and populated the remaining nine months.

- **"More info" panel reworked to preview-only.** The earlier embed-with-fallback
  approach was abandoned after real-browser (Claude-in-Chrome) testing showed the
  fundamental flaw we'd anticipated: a blocked frame (RSPB, Wildlife Trusts,
  Woodland Trust all block embedding) fires a *fake* `load` event that JS can't
  tell apart from a real one, so the timeout never won and the panel sat on a
  blank/broken frame. We also found and fixed a separate cosmetic bug — the
  loading overlay had `display:flex` which beat the default `[hidden]{display:none}`,
  so the spinner painted over the preview even when "hidden".
  - Final behaviour: panel opens straight to the in-panel preview (the detail we
    already hold + page-number pills) with a single **"Open full site in new tab"**
    button. The underlying species modal now closes when the panel opens (no more
    stacking). All iframe/spinner/timeout machinery removed.
  - Verified in a jsdom simulation (20/20 checks) **and** confirmed live in Chrome.
  - Files touched: `app.js`, `index.html`, `styles.css`.
- **All remaining months populated (April–December).** Every species now has a
  `referenceUrl` (RSPB / Wildlife Trusts / Woodland Trust / Butterfly Conservation /
  Froglife / Bumblebee Conservation Trust), `folklore`, verified page numbers where
  the index supports them, and conservative plant/fungi notes.
  - Source of truth for species lists + Top Places: the project's
    "Nature through the seasons app description and data" doc. Bird pages
    cross-checked against the Collins index; several scaffold pages corrected
    (e.g. House Martin 260, Sand Martin 258, Ringed Plover 138, Stone-curlew 136,
    Blue Tit 342, Long-tailed Tit 346, Atlantic Puffin 218).
  - **Foraging discipline held throughout:** 19 explicit ⚠️ warnings across toxic
    plants/fungi (foxglove, bluebell, woody nightshade, white bryony, lords-and-
    ladies, buttercup family, acorns, and all the wild-fungi entries). Every
    mushroom entry says never to eat without expert in-person ID. Edible wild
    foods (blackberry, elderflower, rosehip, cockle, etc.) are noted with cooking/
    safety/lawfulness caveats. Nothing invented; uncertain claims hedged or left blank.
  - Validated: 12 months / 228 species, **0** entries missing any schema field,
    **0** missing referenceUrl or folklore, all URLs on approved conservation
    domains, data.js lints clean. January/February/March left byte-for-byte
    unchanged.
- **Outstanding:** real-browser click-through of a couple of the newly-enriched
  months after install (quick sanity check); commit + push; then the Pi deploy.

### Session 2 — 2026-06-03
Two pieces of work: March data (the worked sample) + the new "more info" panel.

- **March populated fully** to the Jan/Feb pilot depth — 18 species across the
  five categories, each with `bakerPage`, `collinsPage`, `referenceUrl`,
  `folklore`, and (plants) `medicalUses`/`culinaryUses`. Page numbers
  cross-referenced against the British Wildlife and Collins indexes.
  - **Fixed two wrong Collins page numbers that were in the scaffold:** Robin
    276 (was 278 — 278 is bluethroats), Buzzard 106 (was 116 — 116 is
    falcons/kestrels). Wheatear 282 and Great Spotted Woodpecker 244 confirmed
    correct.
  - **Foraging safety:** every plant verified against authoritative sources
    (Woodland Trust, Wildlife Trusts, Poison Control) before writing. Daffodil,
    Lords-and-Ladies, Lesser Celandine and Wood Anemone all carry explicit ⚠️
    toxicity warnings; Primrose's edibility is hedged with the contact-dermatitis
    caveat. Nothing invented; uncertain items flagged, not asserted.
  - Data validated: 12 months / 230 species intact, March fully enriched
    (0 entries missing url or folklore), both JS files lint clean.
- **"More info" rebuilt as an in-page slide-over panel** (replaces the old
  new-tab link). It injects a sandboxed iframe and races an `onload` event
  against a timeout (`IFRAME_LOAD_TIMEOUT_MS`, currently 3.5s); if the site
  refuses framing (RSPB, Wildlife Trusts, Woodland Trust all block via
  X-Frame-Options/CSP), it falls back to an in-panel preview — species detail
  we already hold + a clear "Open full site in new tab" button. Closes cleanly
  via × button, backdrop, and Escape; tears down the iframe on close; locks
  background scroll while open. Vanilla JS, no new libraries, all URLs still
  relative (prefix-aware preserved).
  - Touched `index.html` (panel markup), `app.js` (panel logic + button), and
    `styles.css` (slide-over styling, field-journal theme).
  - Fixed a reopen edge case found in testing: a pending close-teardown timer
    could re-hide a quickly-reopened panel; now cancelled on open and guarded
    so it no-ops if the panel is open again.
  - Verified the full flow (open → timeout → fallback → close → reopen via
    button/backdrop/Escape) in a jsdom simulation: all 15 checks pass.
  - ⚠️ **Still needs a real-browser check on the Mac.** As flagged going in,
    iframe-refusal detection is a best-effort heuristic — a blocked frame fails
    silently and we can't read it cross-origin, so the timeout is the primary
    signal. Confirm locally that an RSPB/Woodland Trust link falls through to
    the preview within ~3.5s rather than showing a blank frame. If it proves
    flaky, the honest fallback is to show the preview by default with an "open
    live site" button (reliable, still in-page). The timeout is easy to tune in
    `app.js` if 3.5s feels too long/short.

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

Effort key: **XS** ≈ a few minutes · **S** ≈ 15–30 min · **M** ≈ 1–2 hrs ·
**L** ≈ half a day+. Estimates assume the usual one-command-at-a-time working
style.

### Immediate / housekeeping
- [ ] **Ship the home-button change to the Pi.** Commit app.js/index.html/
      styles.css on the Mac, push, then `ssh pi@ceol-pi.local 'cd ~/nature &&
      git pull'`. Hard-refresh to confirm. **XS.**
- [ ] **Click-through test on the live site, especially mobile.** Walk a few
      months (e.g. June, September, December), open a card, open "Find out
      more", tap the title to scroll up. Watch dev-tools Network for any 404s.
      **XS.**
- [ ] **Commit the rewritten DEPLOY.md and this status file.** **XS.**

### Done (kept for the record)
- [x] **Phase 5 — Deploy to the Pi.** Live at `…/nature/` via Funnel + a
      `nature.service` systemd `http.server` on 8085. (Session 4)
- [x] **Phase 6 — All 12 months populated** with refs, folklore, pages, and
      conservative plant/fungi notes. (Session 3)
- [x] **"More info" panel** reworked to preview + open-in-tab, verified in
      Chrome. (Sessions 2–3)
- [x] **Title → home/scroll-to-top button.** (Session 4)

### Content polish (optional, do anytime)
- [ ] **"Did you know?" line per month.** The source brief has empty
      "Did you know?" headers that were never written. Would add a nice fact to
      each month's view. Needs a small data field + a bit of UI, then 12 short
      facts written. **M** (mostly the writing; the wiring is **S**).
- [ ] **Review the enriched data in the live UI** and tweak any wording,
      especially the foraging/safety notes, now that they're visible in context
      rather than in the file. **S–M**, depending how picky.
- [ ] **Spot-check a sample of page numbers** against the physical books. The
      bird (Collins) pages were cross-checked against the index; Baker pages are
      sparser and some are blank by design. **S** per dip-in.

### Feature ideas (nice-to-have, not needed)
- [ ] **Self-host the two fonts** (Fraunces + Spectral woff2) instead of Google
      Fonts — removes the external dependency, slightly faster, works offline.
      Drop two files in a relative `fonts/` folder and swap the `<link>` for
      `@font-face`. **S.**
- [ ] **A simple search / "what can I see now" filter** across species. Genuinely
      useful as the dataset is now full, but a real feature. **M–L.**
- [ ] **Per-species images.** Big visual upgrade but the heaviest item —
      sourcing licensed/own images, hosting them on the Pi, lazy-loading, and
      keeping the page light. Licensing is the real cost, not the code. **L.**
- [ ] **"Near me" / region notes** or linking Top Places to a map. **M–L.**

### Infra / housekeeping (low priority)
- [ ] **Ceòl's 502 is unresolved** — nothing bound to 8080 at deploy time. Not
      ours, but worth a look while on the Pi: `systemctl status ceol.service`,
      `journalctl -u ceol.service`. **S** to diagnose, unknown to fix.
- [ ] **Decide where the project docs live.** NATURE_PROJECT_NOTES.md and
      NATURE_STATUS.md got committed *into* the repo in Session 3 (they were
      meant to sit in `~/Nature Project Docs/` outside it). Harmless, but pick
      one home and be consistent. **XS.**
- [ ] **Record the final Funnel/port details in `PI-INFRASTRUCTURE.md`** (8085,
      `nature.service`, the `funnel --set-path` command) so the next deploy to
      any app has the corrected playbook in one place. **XS.**

---

## Open questions / decisions parked
- **Serving method:** decided — **`python3 -m http.server` under systemd**, not
  Nginx (there is no Nginx on the Pi). Supersedes the earlier "Nginx" decision.
- **Pilot months → all 12 now populated.** No longer a pilot.
- **Local test port → 8090; Pi internal port → 8085.**
- Open: whether to write the "Did you know?" content, and whether to invest in
  per-species images (licensing).

---

## Quick facts (so a new session doesn't have to hunt)
- **Live URL:** https://ceol-pi.tail01672f.ts.net/nature/
- Repo: https://github.com/glenachulish/nature-through-the-seasons (`main`)
- Mac app folder: `/Users/callummaclellan/Nature Through the Seasons`
- Local test: `cd "$HOME/Nature Through the Seasons" && python3 -m http.server 8090`
- **Pi SSH:** `ssh pi@ceol-pi.local` (fallback `pi@100.86.212.103`). **Never**
  SSH as `glenachulish`.
- **Pi serving:** `nature.service` (systemd) runs `python3 -m http.server 8085`
  from `/home/pi/nature`. Update with `cd ~/nature && git pull` (no restart
  needed for content).
- **443 Funnel** shares: `/` → Ceòl (8080), `/orain` → Òrain (8004),
  `/nature` → Nature (8085). Touch 443 only with `tailscale funnel` (not
  `serve`), and always re-verify all three after.
- The non-negotiable: **relative URLs only** (prefix-aware). Never absolute.
