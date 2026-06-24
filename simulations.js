/* =============================================================================
   Nature Through the Seasons — simulations.js

   Data only. Holds the flat list of interactive simulations shown in the
   Simulations tab. Each entry is a self-contained HTML bundle living in the
   simulations/ folder, embedded in an iframe by app.js.

   To add a new simulation:
     1. Drop its self-contained .html into the simulations/ folder.
     2. Add an object to the array below.
   Fields:
     file    (required) — path to the bundle, RELATIVE (prefix-safe under /nature/).
     title   (required) — display name on the card and overlay header.
     blurb   (optional) — one-line description on the card.
     theme   (optional) — grouping label for later (timing, astronomy, tides…).
                           Unused by the current flat-list render; safe to add now.
   ========================================================================== */

var simulationData = [
  {
    file: "simulations/european-spring.html",
    title: "The Changing Start of Spring",
    blurb: "How the arrival of spring across Europe has shifted over time — an interactive film.",
    theme: "Phenology"
  }
];
