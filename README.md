# Nature Through the Seasons

A mobile-first, zero-dependency static web app — a month-by-month companion to
British wildlife. What to look for now, where to find it, page references into
Nick Baker's *British Wildlife* and the *Collins Bird Guide*, plus folklore and
the culinary/medicinal uses of plants.

No build step, no framework, no backend. Just `index.html`, `styles.css`,
`app.js`, and `data.js`.

## Run locally (Mac)

```bash
cd "Nature Through the Seasons"
python3 -m http.server 8000
# open http://localhost:8000
```

To **test it the way the Pi serves it** (under the `/nature/` path prefix),
serve from the parent folder and visit the subpath — this catches any
absolute-path mistakes before they reach the Pi:

```bash
cd ..
python3 -m http.server 8000
# open http://localhost:8000/nature/   (folder must be named "nature")
```

## The one rule: stay prefix-aware

This app is served on the Pi at `…ts.net/nature/`, **not** at the site root.
Every URL in the app is **relative**, anchored by `<base href="./">` in
`index.html`. Never introduce a leading-slash path (`/styles.css`,
`fetch("/api/…")`); it will 404 under the prefix. Relative paths cost nothing
and mean this app never needs migrating. (See `PI-INFRASTRUCTURE.md` in the
project space for the full rationale.)

## Data status

- **January & February:** fully populated (the pilot) — species, actions, page
  references, reference links, folklore, and plant uses.
- **March–December:** scaffolded — species names and many Baker/Collins page
  numbers are in place; folklore, links and plant uses are still to be filled.

Page numbers come from the indexes in the project space: `bakerPage` from the
British Wildlife index, `collinsPage` from the Collins Bird Guide index.

## Deploy to the Pi (Nginx + Tailscale Funnel)

See `deploy/` for the Nginx server block and step-by-step notes. In short:

1. `git clone` (or `git pull`) the repo to the Pi, e.g. `~/nature`.
2. Point Nginx at the folder, listening on a fresh internal port (e.g. 8085).
3. Add the path to the shared 443 Funnel **additively** (does not disturb the
   other apps):
   ```bash
   sudo tailscale funnel --bg --https=443 --set-path=/nature http://127.0.0.1:8085
   ```
4. Verify the OTHER paths still work (`curl` Ceòl and `/orain/`), then load
   `https://ceol-pi.tail01672f.ts.net/nature/`.

## File structure

```
nature/
├── index.html      single-page shell (sticky header, month nav, modal)
├── styles.css       all styling (CSS variables, responsive grid)
├── app.js           init, render, navigation, modal logic
├── data.js          the seasonData object (12 months)
├── README.md
└── deploy/
    ├── nature.nginx.conf
    └── DEPLOY.md
```
