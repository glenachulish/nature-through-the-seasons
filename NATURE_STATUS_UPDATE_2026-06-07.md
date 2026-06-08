# Nature Through the Seasons — Status Update

**Date:** 2026-06-07 (Session 4)
**Scope this session:** Text enrichment for all remaining months; image pass for March (remaining), May, June, January and February.

---

## Summary of work done

1. **Text enrichment completed for every month.** All twelve months now carry the
   full natural-history schema (`residency`, `migration`, `diet`, `breeding`,
   `status`, `statusShort`) alongside the original `folklore` /
   `medicalUses` / `culinaryUses` content.
   - May–December were filled from scaffold.
   - January and February were back-filled by **extending** the existing prose —
     every original `folklore`/`medicalUses`/`culinaryUses` string was preserved
     byte-for-byte (verified); only new fields were added.
   - March and April (enriched in a prior session) were left untouched and
     confirmed unchanged.

2. **A blank `notes` field was added to every species entry**, ready for the
   planned notes feature. Populated only where there was something worth saying
   (e.g. safety/toxicity caveats, photo-source notes, accuracy flags).

3. **Image pass completed for January, February, March, May and June.**
   Sources: Wikimedia Commons (permissive licences only); converted on the Mac
   via the shell-agnostic find/keyword loop to `images/*.webp` at 800px wide,
   quality 72, metadata stripped. Credits stored in `photoCredit` in the
   established format: `Photo: <author> / Wikimedia Commons, <licence>`.

4. **`data.js` validated** with `node --check` after every change. Current totals:
   **99 photos present**, all twelve months text-enriched.

---

## Photo coverage by month

| Month     | Enriched species | Photos present | Missing |
|-----------|-----------------:|---------------:|--------:|
| January   | 10               | 10             | 0       |
| February  | 13               | 13             | 0       |
| March     | 18               | 17             | 1       |
| April     | 16               | 16             | 0       |
| May       | 18               | 15             | 3       |
| June      | 32               | 28             | 4       |
| July      | 23               | 0              | 23      |
| August    | 22               | 0              | 22      |
| September | 22               | 0              | 22      |
| October   | 18               | 0              | 18      |
| November  | 18               | 0              | 18      |
| December  | 20               | 0              | 20      |

(Counts exclude `TopPlaces`, which carry no photos by design.)

---

## Organisms missing photos — precise list

The missing photos fall into **two distinct categories**. This matters: the first
group is "to do" (source images for July–December), the second is "deliberately
left blank" and should *not* be treated as outstanding work unless the underlying
issue is resolved.

### A. Deliberately left blank (resolved decisions — do NOT auto-fill)

These were skipped on purpose, either because no suitable Wikimedia image was
available or because the only candidate was the wrong species / life-stage.
Several tie to open accuracy flags (see below).

- **March — Marsh Fritillary Caterpillars** — only candidate image was an *adult*
  regal fritillary (a North American species); wrong life-stage and wrong species.
- **May — Stone Curlew** — only candidate was the *Indian* stone-curlew, a
  different species from the British *Burhinus oedicnemus*.
- **May — Spring Spider Crab** — only candidate was a "flower crab spider" (an
  arachnid, not a crab). Also an open ID flag (see below).
- **May — Wool Crab** — species itself unidentified; candidate image was an old
  Indian Ocean survey plate. Open ID flag.
- **June — Auks** — generic "auks" group entry; no dedicated image (the family is
  covered by the Puffin, Razorbill and Guillemot entries, which DO have photos).
- **June — Common Frog (froglets emerging)** — only candidate was *Crinia
  signifera*, an Australian frog.
- **June — Parasitic Barnacle (Sacculina carcini)** — only candidate was a
  parasitised deep-sea Pacific king crab, not *Sacculina* on a shore crab.
- **June — Guelder Rose** — no matching image in the source folder.

### B. Not yet sourced (genuine to-do — July to December)

No photos have been sourced for these months yet. All entries are text-enriched
and have a blank `photo` field ready to receive an image.

**July (23):** Pipistrelle Bat, Cetaceans, Tawny Owls, Buzzard, Kestrel,
Sparrowhawk, Dartford Warbler, Stonechat, Whinchat, Yellowhammer, Adder,
Common Lizard, Grass Snakes, Honey Bee, Bumblebee, Solitary Bees & Wasps,
Purple Emperor, Purple Hairstreak, White Admiral, Bog Asphodel, Sphagnum Moss,
Cotton Grass, Gorse.

**August (22):** Cetaceans, Basking Shark, Dolphins, Porpoises, Sandwich Terns,
Oystercatchers, Ringed Plover, Sanderling, Adders, Slow Worms, Sand Lizard,
Common Lizard, Smooth Snake, Lugworms, Ragworms, Thin Tellin (Angulus tenuis),
Common Cockle, Razorshell, Common Shrimp, Ghost Shrimp, Sea Holly, Thrift.

**September (22):** Grey Squirrel, Shrew, House Martins, Bluethroat, Chaffinch,
Newts, Grasshoppers, Crickets, Oak Bush Cricket, Harvestmen, Craneflies,
Pale Tussock Moth Caterpillar, Minotaur Beetle, Common Dor Beetle,
Brown Hairstreak Butterfly, Convolvulus Hawk Moth, White Bryony,
Woody Nightshade, Rosehip, Rowan, Blackberries, Hops.

**October (18):** Red Deer, Tawny Owls, Sea Trout, Salmon, Ground Beetles,
Spiders, Goose Barnacles, Common Whelk, Sea Mouse, Mushrooms & Toadstools,
Galls (effects of gall wasps), Leaves Turning, Field Maple, Oak, Stinkhorn,
Beefsteak Fungus, Penny Bun (Cep), Waxcap.

**November (18):** Squirrels, Brown Hares, Mountain Hares, Long-tailed Tits,
Knot, Dunlin, Rookeries, Woodpecker Nest Holes, Fieldfares, Redwings, Goldfinch,
Starling, Salmon, Hibernating Ladybirds, Moth Pupae, Red Admiral, Rusty-back Fern,
Hart's Tongue Fern.

**December (20):** Yellow-necked Mouse, Fox, Bank Vole, Buntings, Yellowhammer,
Redwing, Fieldfare, Treecreeper, Curlew, Redshank, Grey Plover, Eider, Shelduck,
Lugworm, Tortoiseshell Butterfly, Peacock Butterfly, Queen Wasp, Centipede,
Dragonfly Nymph, Fungi & Lichen.

> Note: several July–December species recur from earlier months (e.g. Gorse,
> Thrift, Common Lizard, Adder, Sparrowhawk, Tawny Owls, Salmon, Yellowhammer,
> Peacock Butterfly, Lugworm). Where a good image already exists for the same
> species in another month, it can be reused (mind the slug-collision convention
> below) rather than re-sourced.

---

## Open accuracy flags (parked — need the physical books / decisions)

1. **Skylark — Collins page.** Data shows 254; the cleaned Collins index reads 248.
   Needs the physical *Collins Bird Guide* to settle. Currently noted in June's
   Skylark `notes`. (Untouched.)
2. **Buzzard — Collins page.** July's Buzzard shows 116, but project notes record a
   correction to **106** for the March Buzzard. Reconcile against the book and align
   both entries. Noted in July's Buzzard `notes`.
3. **Wool Crab (May)** — species not confidently identified; natural-history fields
   left blank and flagged in `notes`.
4. **Ghost Shrimp (August)** — ambiguous common name (burrowing mud shrimp vs
   ghost/mud lobster vs opossum shrimps); fields left blank and flagged in `notes`.

No page numbers were guessed anywhere; gaps were left blank per the accuracy rule.

---

## "Illustrative, not exact" photos (included by decision, worth knowing)

Per the agreed default (use close illustrative images; skip clear errors), these
photos show a closely related but not-exact organism. Each is noted where it
might matter:

- **February — Hazel Catkins:** beaked hazel (*Corylus cornuta*, N. American),
  near-identical catkins to native hazel. Flagged in `notes`.
- **January — Squirrels:** image is the native red squirrel (entry text covers
  both red and grey). Noted in `notes`.
- **March — Tadpoles:** wood-frog tadpole (N. American); visually generic.
- **May — Pearl-bordered Fritillaries:** image is the *small* pearl-bordered
  fritillary (*Boloria selene*), a close relative.
- **May — Umbellifers:** Indian hogweed (*Heracleum candolleanum*); illustrative
  of the umbel form.
- **June — Cranesbills:** a garden *Geranium* cultivar.
- **June — Buttercup:** a non-British *Ranunculus* species.

---

## Image pipeline notes (for future months)

- Source at ≥800px, landscape/centre-framed where possible; Wikimedia Commons,
  permissive licences only (PD / CC0 / CC BY / CC BY-SA).
- Convert on the Mac with the shell-agnostic find/keyword loop (zsh breaks
  glob-based commands). Pattern: `find … -name "*KEYWORD*" ! -name "*(1)*"` to
  skip browser-download duplicates, then
  `magick "$f" -resize 800x -quality 72 -strip images/<slug>.webp`.
- **Slug-collision rule:** when a species recurs across months and needs a
  different image, suffix the slug with the month (e.g. `badger-feb`,
  `woodpecker-feb`, `tadpole-feb`, `newt-june`, `skylark-june`,
  `speckled-wood-june`) so it doesn't overwrite an existing file.
- A handful of converted files are on the larger side (e.g. `common-dodder` ~207K,
  `blossom` ~158K). Acceptable for full-bleed tiles; can be re-compressed if a
  tighter page weight is wanted.

---

## Outstanding work (future sessions)

1. **Source and add photos for July–December** (135 species entries across the six
   months; see category B list above). Pilot one month, then batch.
2. **Resolve the four parked accuracy flags** (Skylark, Buzzard, Wool Crab,
   Ghost Shrimp) — needs the physical books / species decisions.
3. **Build the cross-device persistent notes feature.** Requires the current
   `app.js` and `styles.css`, plus a decision on where note storage lives (a static
   app cannot persist typed notes across devices on its own).
4. **Phase 5/6 Pi deployment validation** (per prior status), once the above content
   work is further along.

---

## Files changed this session

- `data.js` — all twelve months text-enriched; 99 photos wired; `notes` field added
  throughout. Validated with `node --check`. Existing Jan/Feb and March/April content
  preserved byte-for-byte.
- `images/` — 23 new webp files added this session (10 January, 13 February),
  on top of the March/May/June conversions earlier in the session.
