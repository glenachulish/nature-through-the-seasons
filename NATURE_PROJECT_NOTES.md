# Nature Through the Seasons — Project Notes (the "truth")

*This is the stable reference for the project: what it is, how it's built, where
it lives, and the conventions it must follow. Read this FIRST in any new
session before touching code or giving instructions. For the live to-do list
and what was done last, read `NATURE_STATUS.md` alongside this.*

*Last reviewed: 2026-06-02*

---

## What this is

A **mobile-first, zero-dependency static web app** — a month-by-month companion
to British wildlife. For any given month it shows what to look for (mammals,
birds, amphibians/reptiles/fish, invertebrates, plants/fungi) and the best
places to see it, with a detail view per species giving page references into
Nick Baker's *British Wildlife: A Month-by-Month Guide* and the *Collins Bird
Guide*, plus folklore and the culinary/medicinal uses of plants.

Inspired by Nick Baker's book. The reference indexes that supply page numbers
live in the Claude project space (and on the Mac at `~/Nature Project Docs/`),
NOT in the app repo.

## Tech stack (deliberately tiny)

- HTML5, CSS3, vanilla JavaScript (ES6+). **No** framework, **no** build step,
  **no** backend, **no** dependencies to install.
- Four core files, flat: `index.html`, `styles.css`, `app.js`, `data.js`.
- Served as plain static files by Nginx on the Pi; `python3 -m http.server`
  locally on the Mac.
- Styling: custom CSS variables, editorial/field-journal look (warm paper,
  forest greens, earthy accents). Display font Fraunces + body Spectral via
  Google Fonts, with a Georgia fallback if fonts are blocked.

## The data model (`data.js`)

A single `const seasonData` keyed by the 12 month names. Each month has six
categories: `Mammals`, `Birds`, `AmphibiansReptilesFish`, `Invertebrates`,
`Plants`, and `TopPlaces`.

Each species entry is an object with this exact schema:
`name`, `action` (e.g. "courting"/"rutting"/null), `bakerPage`, `collinsPage`,
`referenceUrl`, `medicalUses`, `culinaryUses`, `folklore`. Empty string or null
where data isn't gathered yet.

`TopPlaces` is simpler — an array of `{ name }` objects (a place isn't a
species).

`bakerPage` numbers come from the British Wildlife index; `collinsPage` from the
Collins Bird Guide index.

## How the app behaves (`app.js`)

- On load it detects the current month via the JS `Date` object, highlights it
  in the navigator, and renders it.
- `renderMonth(month)` clears the content area, emits a titled section per
  populated category, and lays species out as clickable cards in a responsive
  grid (one column on mobile).
- Month switching is handled by event delegation on the nav bar.
- Clicking a card opens a native `<dialog>` modal with the full species detail;
  it closes on the × button, on a backdrop click, and on Escape.

---

## THE ONE CRITICAL RULE — prefix-awareness

The app is served on the Pi at **`https://ceol-pi.tail01672f.ts.net/nature/`**,
under a path prefix, NOT at the site root. This is dictated by the shared Pi
infrastructure (see `PI-INFRASTRUCTURE.md` in the project space): Tailscale
Funnel allows only three public ports, so all apps share port 443 and are
separated by path prefix.

**Consequence for this app:** every URL it emits must be RELATIVE. The app uses
`<base href="./">` in `index.html` and relative paths everywhere
(`styles.css`, not `/styles.css`). A single leading-slash path would 404 under
the prefix. Tailscale strips the `/nature` prefix before it reaches Nginx, so
Nginx and the static files see plain `/` — but the browser address bar still
carries `/nature/`, which is why relative URLs are what make it work.

Built this way, the app needs no migration — it just slots into a free path.
**Never introduce an absolute path. This is the cheapest thing to keep right and
the most expensive to retrofit.**

---

## Where everything lives

### Mac (development)
- Project folder: `/Users/callummaclellan/Nature Through the Seasons`
  (app files sit at the TOP of this folder — `index.html`, `styles.css`,
  `app.js`, `data.js`, `README.md`, `.gitignore`, `deploy/`).
- Source documents (NOT in the repo): `~/Nature Project Docs/`
  (the `.docx` briefs and the `Nature Guide Indexes/` folder).
- Local test: `python3 -m http.server 8090` → http://localhost:8090
  (port 8090 chosen to avoid clashing with the user's other local apps).

### GitHub
- Repo: **https://github.com/glenachulish/nature-through-the-seasons** (public)
- Username: `glenachulish`. Branch: `main`.

### Pi (production — not yet deployed)
- SSH: `ssh pi@100.86.212.103` (Raspberry Pi 3B, Tailscale node
  `ceol-pi.tail01672f.ts.net`).
- Public URL (planned): `https://ceol-pi.tail01672f.ts.net/nature/`
- Internal Nginx port (planned): **8085** (set in `deploy/nature.nginx.conf`).
- Funnel add command (additive, safe — does NOT disturb the other apps):
  `sudo tailscale funnel --bg --https=443 --set-path=/nature http://127.0.0.1:8085`
- Full deploy steps: `deploy/DEPLOY.md` in the repo.

### Neighbours on the Pi (do not disturb)
Other apps share the same Pi and the same 443 Funnel: **Ceòl** (at `/`),
**Òrain** (at `/orain/`), **Gàidhlig Shadowing**. Any change to the 443 Funnel
must be additive and followed by a curl-check of the other paths. See
`PI-INFRASTRUCTURE.md` for the whole picture.

---

## Working conventions (how the user likes to work)

- **One command at a time, exact and copy-pasteable.** The user runs everything
  in the macOS Terminal and prefers precise terminal commands over described
  steps. Spell out every command; don't leave anything to interpret.
- The user works on the Mac; deployment touches the Pi over SSH.
- Heavy or Funnel-touching work (Pi deployment) is best done with a clear run,
  not last thing at night.
- Update `NATURE_STATUS.md` at the END of each session: tick off what's done,
  add anything newly discovered, and note where to pick up next.
