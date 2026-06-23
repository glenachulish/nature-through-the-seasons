/* =============================================================================
   Nature Through the Seasons — references.js

   A single, shared "Learn More" reference list, shown the same on every month.
   Opened via the "Learn More" button beneath Top Places.

   ---------------------------------------------------------------------------
   HOW TO EDIT THIS FILE
   ---------------------------------------------------------------------------
   You do NOT need to hand-edit the punctuation below. Open the helper page
   "reference-helper.html" in any web browser, fill in the form (category,
   link name, web address), click "Add", then "Copy". Paste what it gives you
   over the whole block below (from "const referenceData" to the closing "};"),
   save, and deploy.

   If you ever DO edit by hand: each entry is one line of the form
       { name: "What the link says", url: "https://..." },
   Keep the quotes, the comma at the end, and don't remove the [ ] or { }.
   ---------------------------------------------------------------------------

   Categories mirror the app's own sections, plus two extra cross-cutting ones
   (Seashore & Marine, Where to Watch). Order here is the order shown on screen.
   ========================================================================== */

const referenceData = {
  Mammals: [
    { name: "Mammal Society — Guide to British mammals", url: "https://mammal.org.uk/british-mammals" },
    { name: "A Rocha — UK small mammal ID (PDF)", url: "https://arocha.org.uk/wp-content/uploads/2022/11/T15-groups-Small-mammals.pdf" }
  ],

  Birds: [
    { name: "RSPB — Bird ID made easy", url: "https://www.rspb.org.uk/birds-and-wildlife/identifying-birds/bird-id-made-easy" },
    { name: "RSPB — Top tips for identifying birds", url: "https://www.rspb.org.uk/birds-and-wildlife/identifying-birds/top-tips-on-how-to-identify-birds" },
    { name: "RSPB — Bird song identifier", url: "https://www.rspb.org.uk/birds-and-wildlife/identifying-birds/bird-song-identifier" },
    { name: "RSPB — Small brown garden birds", url: "https://www.rspb.org.uk/birds-and-wildlife/identifying-birds/small-brown-birds-you-might-see-in-your-garden" },
    { name: "RSPB — Pigeons & doves ID guide", url: "https://www.rspb.org.uk/birds-and-wildlife/identifying-birds/pigeons-and-doves-an-id-guide" },
    { name: "RSPB — What's that bird of prey?", url: "https://www.rspb.org.uk/birds-and-wildlife/identifying-birds/whats-that-bird-of-prey" },
    { name: "RSPB — Swift, swallow or martin?", url: "https://www.rspb.org.uk/birds-and-wildlife/identifying-birds/swift-swallow-or-martin-a-handy-id-guide" },
    { name: "RSPB — Corvids: the crow family", url: "https://www.rspb.org.uk/birds-and-wildlife/identifying-birds/corvids-how-to-identify-the-crow-family" },
    { name: "BTO — BirdFacts species directory", url: "https://www.bto.org/learn/about-birds/birdfacts#species" },
    { name: "BTO — Woodpeckers (PDF)", url: "https://www.bto.org/sites/default/files/Woodpeckers%20%28Bird%20Table%20119%29.pdf" },
    { name: "BTO — Fieldcraft: structure in bird ID (PDF)", url: "https://www.bto.org/sites/default/files/field_craft_the_importance_of_structure_in_bird_identification.pdf" },
    { name: "BTO — Fieldcraft: age in bird ID (PDF)", url: "https://www.bto.org/sites/default/files/field_craft_the_importance_of_age_in_bird_identification.pdf" },
    { name: "BTO — Basic bird topography (PDF)", url: "https://www.bto.org/sites/default/files/basic-bird-topography-field-craft-bto-news-spring-2023.pdf" },
    { name: "BTO — Fieldcraft (BTO News, summer 2024) (PDF)", url: "https://www.bto.org/sites/default/files/field_craft_bto_news_summer_2024.pdf" },
    { name: "BTO — Identify drab dabbling ducks (PDF)", url: "https://www.bto.org/sites/default/files/fieldcraft_how_to_identify_drab_dabbling_ducks.pdf" },
    { name: "BTO — Identify ducklings (PDF)", url: "https://www.bto.org/sites/default/files/field_craft_how_to_identify_ducklings.pdf" },
    { name: "BTO — Identify winter waders (PDF)", url: "https://www.bto.org/sites/default/files/field_craft_how_to_identify_winter_waders.pdf" },
    { name: "BTO — Identify winter raptors (PDF)", url: "https://www.bto.org/sites/default/files/field_craft_how_to_identify_winter_raptors.pdf" },
    { name: "BTO — Fieldcraft (BTO News, winter 2023) (PDF)", url: "https://www.bto.org/sites/default/files/field_craft_bto_news_winter_2023.pdf" },
    { name: "BTO — Bird identification video library", url: "https://www.bto.org/learn/skills/bird-identification/videos" }
  ],

  AmphibiansReptilesFish: [
    { name: "RSPB — Frogs & toads ID guide", url: "https://www.rspb.org.uk/birds-and-wildlife/identifying-birds/frogs-and-toads-id-guide" },
    { name: "RSPB — Six reptiles found in the UK", url: "https://www.rspb.org.uk/birds-and-wildlife/identifying-birds/six-reptiles-found-in-the-uk" }
  ],

  Invertebrates: [
    { name: "Butterfly Conservation — Identify a butterfly", url: "https://butterfly-conservation.org/butterflies/identify-a-butterfly" },
    { name: "Butterfly Conservation — Butterfly ID guide (PDF)", url: "https://butterfly-conservation.org/sites/default/files/2020-04/Moths-ID-guide.pdf" },
    { name: "Butterfly Conservation — Caterpillars: a brief guide (PDF)", url: "https://butterfly-conservation.org/sites/default/files/caterpillars---a-brief-guide_leaflet.pdf" },
    { name: "Butterfly Conservation — Garden moths leaflet (PDF)", url: "https://butterfly-conservation.org/sites/default/files/leafletgarden-moths-a5-mar-2015.pdf" },
    { name: "Butterfly Conservation — Day-flying moths leaflet (PDF)", url: "https://butterfly-conservation.org/sites/default/files/leafletday-flying-moths-a5.pdf" },
    { name: "Butterfly Conservation — Pocket guide to day-flying moths (PDF)", url: "https://butterfly-conservation.org/sites/default/files/2020-10/A%20pocket%20identification%20guide%20to%20day-flying%20moths.pdf" },
    { name: "Butterfly Conservation — Moths: an introduction (PDF)", url: "https://butterfly-conservation.org/sites/default/files/leafletmoths-an-introduction-a5.pdf" },
    { name: "Butterfly Conservation — How to start mothing (PDF)", url: "https://butterfly-conservation.org/sites/default/files/moths-count-factsheet-1-how-to-start-mothing.pdf" },
    { name: "Butterfly Conservation — Identifying moths (PDF)", url: "https://butterfly-conservation.org/sites/default/files/identifying_moths-factsheet.pdf" },
    { name: "Butterfly Conservation — The lives of moths (PDF)", url: "https://butterfly-conservation.org/sites/default/files/lives_of_moths-factsheet.pdf" },
    { name: "Butterfly Conservation — Farmland habitat ID guide (PDF)", url: "https://butterfly-conservation.org/sites/default/files/habitat-farm-id-guide-web.pdf" },
    { name: "BTO — Common dragonflies (PDF)", url: "https://www.bto.org/sites/default/files/Common%20Dragonflies%20%28Bird%20Table%20121%29.pdf" },
    { name: "BTO — Common damselflies (PDF)", url: "https://www.bto.org/sites/default/files/Common%20Damselflies%20%28Bird%20Table%20117%29.pdf" }
  ],

  Plants: [
    { name: "Plantlife — Plants & fungi ID hub", url: "https://www.plantlife.org.uk/plants-and-fungi/" },
    { name: "Plantlife — UK Waxcap ID guide 2024 (PDF)", url: "https://www.plantlife.org.uk/wp-content/uploads/2024/11/UK-Waxcap-ID-guide-2024-WEB.pdf" },
    { name: "Plantlife — Scotland Waxcap ID guide 2024 (PDF)", url: "https://www.plantlife.org.uk/wp-content/uploads/2024/11/Scotland-Waxcap-ID-guide-2024-WEB-1.pdf" },
    { name: "Plantlife — Fungi ID sheet (image)", url: "https://www.plantlife.org.uk/wp-content/uploads/2024/09/Fungi-identification-sheet-Plantlife.png" },
    { name: "Plantlife — Fungi spotter sheet (image)", url: "https://www.plantlife.org.uk/wp-content/uploads/2024/09/Fungi-spotter-sheet-Plantlife.png" }
  ],

  SeashoreMarine: [
    { name: "Marine Conservation Society — Wildlife A–Z", url: "https://www.mcsuk.org/ocean-learning/wildlife-a-z/" },
    { name: "Marine Conservation Society — Seashore Safari guide", url: "https://www.mcsuk.org/sign-up-for-seashore-safari-guide/" }
  ],

  WhereToWatch: [
    { name: "The Wildlife Trusts — Where to see seasonal wildlife", url: "https://www.wildlifetrusts.org/visit/where-see-seasonal-wildlife" },
    { name: "The Wildlife Trusts — Find a nature reserve", url: "https://www.wildlifetrusts.org/nature-reserves" }
  ],

  ReferenceBooks: [
    { title: "British Wildlife: A Month-by-Month Guide", author: "Nick Baker", note: "The seasonal companion this app is built around — what to look for, month by month." },
    { title: "Collins Bird Guide", author: "Svensson, Mullarney & Zetterström", note: "The standard field guide for birds of Britain and Europe; superb plates and ID detail." }
  ],

  MediaToConsider: [
    { title: "BBC Springwatch & Winterwatch", type: "TV series", note: "Live seasonal natural-history broadcasts following British wildlife. (Replace the URL with the current iPlayer page via the helper.)", url: "https://www.bbc.co.uk/iplayer" },
    { title: "BBC Sounds — nature & environment", type: "Radio / podcast", note: "British wildlife and environment audio. (Replace with a specific programme URL via the helper.)", url: "https://www.bbc.co.uk/sounds" }
  ]
};
