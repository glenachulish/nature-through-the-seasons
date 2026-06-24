/* =============================================================================
   Nature Through the Seasons — app.js
   Vanilla ES6+. No dependencies, no build step.

   Responsibilities:
     1. Build the month navigator.
     2. On load, detect the current month and render it.
     3. Render a month: category sections + species cards.
     4. Handle month switching via event delegation.
     5. Open a native <dialog> with full species detail on card click.
   ========================================================================== */

(function () {
  "use strict";

  /* Ordered month list — drives the navigator and the JS Date lookup. */
  const MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  /* Display labels for the six data categories (object keys -> headings). */
  const CATEGORY_LABELS = {
    Mammals: "Mammals",
    Birds: "Birds",
    AmphibiansReptilesFish: "Amphibians, Reptiles & Fish",
    Invertebrates: "Invertebrates",
    Plants: "Plants & Fungi",
    TopPlaces: "Top Places"
  };

  /* The five "species" categories rendered as cards (TopPlaces is special). */
  const SPECIES_CATEGORIES = [
    "Mammals", "Birds", "AmphibiansReptilesFish", "Invertebrates", "Plants"
  ];

  /* ---- Cached DOM references ---- */
  const navEl        = document.getElementById("month-nav");
  const contentEl    = document.getElementById("app-content");
  const monthLabelEl = document.getElementById("current-month-label");
  const modalEl      = document.getElementById("species-modal");
  const modalBodyEl  = document.getElementById("modal-body");
  const modalCloseEl = document.getElementById("modal-close");

  /* View switcher + simulations. */
  const viewTabsEl     = document.getElementById("view-tabs");
  const monthsViewEl   = document.getElementById("view-months");
  const simsViewEl     = document.getElementById("view-simulations");
  const simContentEl   = document.getElementById("sim-content");
  const simOverlayEl   = document.getElementById("sim-overlay");
  const simOverlayTtl  = document.getElementById("sim-overlay-title");
  const simOverlayFrm  = document.getElementById("sim-overlay-frame");
  const simOverlayCls  = document.getElementById("sim-overlay-close");

  /* Holds the species objects currently on screen, keyed by a render-time id,
     so the modal can look up full detail without stashing data in the DOM. */
  let currentMonth = null;
  let speciesIndex = {};

  /* ----------------------------------------------------- small DOM helpers */
  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  /* Detect whether we're running as an installed / home-screen app (PWA in
     "standalone" display mode, or iOS Safari's navigator.standalone). When we
     are, opening links in the SAME tab means the phone's back gesture returns
     to the app — the natural "cancel" — instead of stranding the user in a new
     tab they can't easily close. On a normal desktop browser we keep new tabs
     so the app stays open in its own tab. */
  function isStandalone() {
    try {
      return (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) ||
             window.navigator.standalone === true;
    } catch (e) {
      return false;
    }
  }
  /* "_self" (same tab) when installed; "_blank" (new tab) otherwise. */
  function linkTarget() {
    return isStandalone() ? "_self" : "_blank";
  }

  /* Escape user-facing strings before injecting as HTML (defensive — the data
     is ours, but this keeps rendering safe if the dataset ever grows). */
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  /* ----------------------------------------------------- build the navbar */
  function buildNav() {
    const frag = document.createDocumentFragment();
    MONTHS.forEach(function (month) {
      const btn = el("button", "month-btn", month);
      btn.type = "button";
      btn.dataset.month = month;
      frag.appendChild(btn);
    });
    navEl.appendChild(frag);
  }

  /* ----------------------------------------------------- render one month */
  function renderMonth(month) {
    currentMonth = month;
    speciesIndex = {};
    monthLabelEl.textContent = month;

    /* Update active state on the nav buttons. */
    Array.prototype.forEach.call(navEl.children, function (btn) {
      const isActive = btn.dataset.month === month;
      btn.classList.toggle("active", isActive);
      if (isActive) {
        btn.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
      }
    });

    /* Clear the stage. */
    contentEl.innerHTML = "";

    const data = (typeof seasonData !== "undefined") ? seasonData[month] : null;
    if (!data) {
      contentEl.appendChild(
        el("p", "empty-month", "No sightings recorded for " + month + " yet.")
      );
      return;
    }

    let cardCounter = 0;
    let renderedAnything = false;

    /* Render each populated species category as a titled section + grid. */
    SPECIES_CATEGORIES.forEach(function (catKey) {
      const list = data[catKey];
      if (!Array.isArray(list) || list.length === 0) return;
      renderedAnything = true;

      const section = el("section", "category");
      const head = el("div", "category-head");
      head.appendChild(el("h2", "category-title", CATEGORY_LABELS[catKey]));
      head.appendChild(el("span", "category-count",
        list.length + (list.length === 1 ? " entry" : " entries")));
      section.appendChild(head);

      const grid = el("div", "card-grid");
      list.forEach(function (species, i) {
        const id = catKey + "-" + i;
        speciesIndex[id] = species;        // stash for the modal
        grid.appendChild(buildCard(species, id, ++cardCounter));
      });
      section.appendChild(grid);
      contentEl.appendChild(section);
    });

    /* Render Top Places (not species cards — a simpler list). */
    const places = data.TopPlaces;
    if (Array.isArray(places) && places.length > 0) {
      renderedAnything = true;
      const section = el("section", "category");
      const head = el("div", "category-head");
      head.appendChild(el("h2", "category-title", CATEGORY_LABELS.TopPlaces));
      head.appendChild(el("span", "category-count", places.length + " spots"));
      section.appendChild(head);

      const pgrid = el("div", "places-grid");
      places.forEach(function (place) {
        const item = el("div", "place-item");
        const pin = el("span", "pin");
        pin.textContent = "◈";
        item.appendChild(pin);
        if (place.url) {
          const link = el("a", "place-link", place.name);
          link.href = place.url;
          link.target = linkTarget();
          link.rel = "noopener noreferrer";
          item.appendChild(link);
        } else {
          item.appendChild(el("span", null, place.name));
        }
        pgrid.appendChild(item);
      });
      section.appendChild(pgrid);
      contentEl.appendChild(section);
    }

    if (!renderedAnything) {
      contentEl.appendChild(
        el("p", "empty-month", "No sightings recorded for " + month + " yet.")
      );
    }

    /* "Learn More" button — opens the shared references view. Shown on every
       month (the reference list itself is not month-specific). */
    if (typeof referenceData !== "undefined") {
      const moreWrap = el("div", "learn-more-wrap");
      const moreBtn = el("button", "learn-more-btn", "Learn More");
      moreBtn.type = "button";
      moreBtn.id = "learn-more-btn";
      moreWrap.appendChild(moreBtn);
      contentEl.appendChild(moreWrap);
    }

    /* Stagger the section fade-ins for a gentle reveal. */
    Array.prototype.forEach.call(contentEl.querySelectorAll(".category"),
      function (sec, i) { sec.style.animationDelay = (i * 0.06) + "s"; });
  }

  /* ----------------------------------------------------- build a card */
  function buildCard(species, id, n) {
    const card = el("button", "species-card");
    card.type = "button";
    card.dataset.id = id;
    card.style.animationDelay = (n * 0.015) + "s";

    /* Photo tile (full-bleed, 4:3). Falls back to a tinted placeholder bearing
       the species name when no photo has been sourced yet. */
    const figure = el("div", "card-figure");
    if (species.photo) {
      const img = document.createElement("img");
      img.className = "card-img";
      img.src = species.photo;          // relative path -> prefix-safe
      img.alt = species.name;
      img.loading = "lazy";
      img.decoding = "async";
      if (species.focal) img.style.objectPosition = species.focal;  // crop anchor
      figure.appendChild(img);
    } else {
      figure.classList.add("is-placeholder");
      figure.appendChild(el("span", "placeholder-mark", "❧"));
    }
    card.appendChild(figure);

    card.appendChild(el("h3", "species-name", species.name));
    if (species.action) {
      card.appendChild(el("span", "species-action", species.action));
    }

    const cta = el("div", "card-cta");
    const chips = el("span", "ref-chips");
    if (species.collinsPage) chips.appendChild(el("span", "chip", "Collins p." + species.collinsPage));
    if (species.bakerPage)   chips.appendChild(el("span", "chip", "Baker p." + species.bakerPage));
    if (chips.childNodes.length) {
      cta.appendChild(chips);
    } else {
      cta.appendChild(el("span", null, "Tap for detail →"));
    }
    card.appendChild(cta);

    return card;
  }

  /* ----------------------------------------------------- open the modal */
  function openModal(id) {
    const s = speciesIndex[id];
    if (!s) return;

    let html = "";
    html += '<p class="modal-eyebrow">' + escapeHtml(currentMonth) + '</p>';
    html += '<h3 class="modal-title">' + escapeHtml(s.name) + '</h3>';
    if (s.action) {
      html += '<p class="modal-action">' + escapeHtml(s.action) + '</p>';
    }

    /* Photo (relative path -> prefix-safe) with optional credit line. */
    if (s.photo) {
      html += '<figure class="modal-figure">' +
                '<img class="modal-img" src="' + escapeHtml(s.photo) +
                  '" alt="' + escapeHtml(s.name) + '" loading="lazy" decoding="async"' +
                  (s.focal ? ' style="object-position:' + escapeHtml(s.focal) + '"' : '') +
                  ' />';
      if (s.photoCredit) {
        html += '<figcaption class="modal-credit">' + escapeHtml(s.photoCredit) + '</figcaption>';
      }
      html += '</figure>';
    }

    /* Natural-history detail (each shown only if populated). */
    if (s.residency) html += section("Residency", s.residency);
    if (s.migration) html += section("Migration", s.migration);
    if (s.diet)      html += section("Diet", s.diet);
    if (s.breeding)  html += section("Breeding", s.breeding);
    if (s.status)    html += section("How Common", s.status);

    if (s.folklore) {
      html += section("Folklore & Notes", s.folklore);
    }
    if (s.culinaryUses) {
      html += section("Culinary Uses", s.culinaryUses);
    }
    if (s.medicalUses) {
      html += section("Medicinal Uses", s.medicalUses);
    }

    /* Reference pills (page numbers). */
    const pills = [];
    if (s.collinsPage) pills.push('<span class="ref-pill"><strong>Collins Bird Guide</strong> &middot; p.' + escapeHtml(s.collinsPage) + '</span>');
    if (s.bakerPage)   pills.push('<span class="ref-pill"><strong>Baker</strong> &middot; p.' + escapeHtml(s.bakerPage) + '</span>');
    if (pills.length) {
      html += '<div class="modal-refs">' + pills.join("") + '</div>';
    }

    /* External reference link. */
    if (s.referenceUrl) {
      html += '<a class="modal-link" href="' + escapeHtml(s.referenceUrl) +
              '" target="' + linkTarget() + '" rel="noopener noreferrer">Find out more &nearr;</a>';
    }

    /* If nothing but the name exists, say so gracefully. */
    if (!s.folklore && !s.culinaryUses && !s.medicalUses &&
        !s.collinsPage && !s.bakerPage && !s.referenceUrl &&
        !s.residency && !s.migration && !s.diet && !s.breeding &&
        !s.status && !s.photo) {
      html += '<p class="modal-empty">Detail for this entry is still being gathered.</p>';
    }

    modalBodyEl.innerHTML = html;

    if (typeof modalEl.showModal === "function") {
      modalEl.showModal();
    } else {
      modalEl.setAttribute("open", "");  // very old fallback
    }
  }

  function section(title, body) {
    return '<div class="modal-section"><h4>' + escapeHtml(title) +
           '</h4><p>' + escapeHtml(body) + '</p></div>';
  }

  function closeModal() {
    if (typeof modalEl.close === "function") modalEl.close();
    else modalEl.removeAttribute("open");
  }

  /* --------------------------------------------------- references view */
  /* Display labels + ordering for the reference categories. Mirrors the
     species categories, plus two cross-cutting ones. */
  const REFERENCE_CATEGORIES = [
    ["Mammals", "Mammals"],
    ["Birds", "Birds"],
    ["AmphibiansReptilesFish", "Amphibians, Reptiles & Fish"],
    ["Invertebrates", "Invertebrates"],
    ["Plants", "Plants & Fungi"],
    ["SeashoreMarine", "Seashore & Marine"],
    ["WhereToWatch", "Where to Watch"],
    ["ReferenceBooks", "Reference Books to Consider"],
    ["MediaToConsider", "Media to Consider"]
  ];

  function openReferences() {
    if (typeof referenceData === "undefined") return;

    let html = "";
    html += '<p class="modal-eyebrow">Learn More</p>';
    html += '<h3 class="modal-title">Further Reading &amp; Resources</h3>';
    html += '<p class="modal-action">Identification guides and trusted sources, by group.</p>';

    REFERENCE_CATEGORIES.forEach(function (pair) {
      const key = pair[0];
      const label = pair[1];
      const list = referenceData[key];
      if (!Array.isArray(list) || list.length === 0) return;

      html += '<div class="ref-group">';
      html += '<h4 class="ref-group-title">' + escapeHtml(label) + '</h4>';
      html += '<div class="ref-list">';

      if (key === "ReferenceBooks") {
        /* Books: title (italic) + author, optional note. No link. */
        list.forEach(function (b) {
          if (!b || !b.title) return;
          html += '<div class="ref-book">';
          html += '<span class="ref-book-title">' + escapeHtml(b.title) + '</span>';
          if (b.author) html += '<span class="ref-book-author"> — ' + escapeHtml(b.author) + '</span>';
          if (b.note) html += '<span class="ref-book-note">' + escapeHtml(b.note) + '</span>';
          html += '</div>';
        });
      } else if (key === "MediaToConsider") {
        /* Media: title + type badge, optional note, optional link. */
        list.forEach(function (m) {
          if (!m || !m.title) return;
          var hasUrl = !!m.url;
          var openTag = hasUrl
            ? '<a class="ref-link ref-media" href="' + escapeHtml(m.url) +
              '" target="' + linkTarget() + '" rel="noopener noreferrer">'
            : '<div class="ref-media">';
          var closeTag = hasUrl ? '</a>' : '</div>';
          html += openTag;
          if (hasUrl) html += '<span class="pin" aria-hidden="true">&#9672;</span>';
          html += '<span class="ref-media-body">';
          html += '<span class="ref-media-title">' + escapeHtml(m.title) + '</span>';
          if (m.type) html += '<span class="ref-media-type">' + escapeHtml(m.type) + '</span>';
          if (m.note) html += '<span class="ref-media-note">' + escapeHtml(m.note) + '</span>';
          html += '</span>';
          html += closeTag;
        });
      } else {
        /* Standard link list (unchanged). */
        list.forEach(function (ref) {
          if (!ref || !ref.name || !ref.url) return;
          html += '<a class="ref-link" href="' + escapeHtml(ref.url) +
                  '" target="' + linkTarget() + '" rel="noopener noreferrer">' +
                  '<span class="pin" aria-hidden="true">&#9672;</span>' +
                  '<span>' + escapeHtml(ref.name) + '</span></a>';
        });
      }

      html += '</div></div>';
    });

    /* "How to edit" note. Editing is done in the local reference-helper.html
       tool on the Mac (which holds the GitHub token), NOT on the live site,
       so this is guidance — deliberately not an in-page editor. */
    html += '<details class="ref-edit-note">';
    html += '<summary>Edit these references</summary>';
    html += '<div class="ref-edit-body">';
    html += '<p>References are edited from a small tool on the Mac, then ' +
            'published to every device. They can\u2019t be edited here on the ' +
            'website.</p>';
    html += '<ol>';
    html += '<li>On the Mac, open the <strong>Nature Through the Seasons</strong> ' +
            'folder and double-click <code>reference-helper.html</code> ' +
            '(it opens in the browser).</li>';
    html += '<li>Add, remove or reorder entries using the forms and lists.</li>';
    html += '<li>In the <strong>Save directly to GitHub</strong> panel, paste the ' +
            'access token and click commit.</li>';
    html += '<li>Within about five minutes the changes appear here and on every ' +
            'device \u2014 no restart needed.</li>';
    html += '</ol>';
    html += '</div></details>';

    modalBodyEl.innerHTML = html;

    if (typeof modalEl.showModal === "function") {
      modalEl.showModal();
    } else {
      modalEl.setAttribute("open", "");
    }
  }

  /* --------------------------------------------------- view switching */
  /* Two top-level views: "months" (the existing app) and "simulations".
     The month navigator only makes sense in the months view, so it's hidden
     in the simulations view. Simulations are rendered lazily on first show. */
  let simsRendered = false;

  function switchView(view) {
    const showSims = (view === "simulations");

    monthsViewEl.hidden = showSims;
    simsViewEl.hidden = !showSims;

    /* The month navigator belongs to the months view only. */
    if (navEl) navEl.style.display = showSims ? "none" : "";

    /* Tab active/pressed state. */
    Array.prototype.forEach.call(viewTabsEl.children, function (tab) {
      const isActive = tab.dataset.view === view;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    if (showSims && !simsRendered) {
      renderSimulations();
      simsRendered = true;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* --------------------------------------------------- simulations list */
  function renderSimulations() {
    simContentEl.innerHTML = "";

    const list = (typeof simulationData !== "undefined") ? simulationData : null;
    if (!Array.isArray(list) || list.length === 0) {
      simContentEl.appendChild(
        el("p", "empty-month", "No simulations available yet.")
      );
      return;
    }

    const section = el("section", "category");
    const head = el("div", "category-head");
    head.appendChild(el("h2", "category-title", "Simulations"));
    head.appendChild(el("span", "category-count",
      list.length + (list.length === 1 ? " simulation" : " simulations")));
    section.appendChild(head);

    const grid = el("div", "sim-grid");
    list.forEach(function (sim, i) {
      if (!sim || !sim.file || !sim.title) return;
      const card = el("button", "sim-card");
      card.type = "button";
      card.dataset.simIndex = i;
      card.style.animationDelay = (i * 0.04) + "s";

      const glyph = el("span", "sim-glyph", "❧");
      glyph.setAttribute("aria-hidden", "true");
      card.appendChild(glyph);

      const body = el("div", "sim-card-body");
      body.appendChild(el("h3", "sim-card-title", sim.title));
      if (sim.blurb) body.appendChild(el("p", "sim-card-blurb", sim.blurb));
      card.appendChild(body);

      card.appendChild(el("span", "sim-card-cta", "Open →"));
      grid.appendChild(card);
    });
    section.appendChild(grid);
    simContentEl.appendChild(section);

    section.style.animationDelay = "0s";
  }

  /* --------------------------------------------------- simulation overlay */
  function openSimulation(index) {
    const list = (typeof simulationData !== "undefined") ? simulationData : null;
    const sim = list && list[index];
    if (!sim || !sim.file) return;

    simOverlayTtl.textContent = sim.title || "Simulation";
    simOverlayFrm.title = sim.title || "Simulation";
    simOverlayFrm.src = sim.file;           // relative -> prefix-safe; loads now

    simOverlayEl.hidden = false;
    simOverlayEl.setAttribute("aria-hidden", "false");
    document.body.classList.add("sim-open");
  }

  function closeSimulation() {
    simOverlayEl.hidden = true;
    simOverlayEl.setAttribute("aria-hidden", "true");
    document.body.classList.remove("sim-open");
    /* Clear src so the bundle stops running and frees memory until reopened. */
    simOverlayFrm.removeAttribute("src");
  }


  function wireEvents() {
    /* View switching — delegated on the tab bar. */
    viewTabsEl.addEventListener("click", function (e) {
      const tab = e.target.closest(".view-tab");
      if (tab && tab.dataset.view) switchView(tab.dataset.view);
    });

    /* Simulation card clicks — delegated on the simulations container. */
    simContentEl.addEventListener("click", function (e) {
      const card = e.target.closest(".sim-card");
      if (card && card.dataset.simIndex != null) {
        openSimulation(parseInt(card.dataset.simIndex, 10));
      }
    });

    /* Simulation overlay close (button + Escape). */
    simOverlayCls.addEventListener("click", closeSimulation);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !simOverlayEl.hidden) closeSimulation();
    });

    /* Month switching — delegated on the nav container. */
    navEl.addEventListener("click", function (e) {
      const btn = e.target.closest(".month-btn");
      if (btn && btn.dataset.month) renderMonth(btn.dataset.month);
    });

    /* Card clicks — delegated on the content container. */
    contentEl.addEventListener("click", function (e) {
      const moreBtn = e.target.closest(".learn-more-btn");
      if (moreBtn) { openReferences(); return; }
      const card = e.target.closest(".species-card");
      if (card && card.dataset.id) openModal(card.dataset.id);
    });

    /* Modal close button. */
    modalCloseEl.addEventListener("click", closeModal);

    /* Close when clicking the backdrop (clicks that land on the dialog
       element itself, outside the inner card). */
    modalEl.addEventListener("click", function (e) {
      if (e.target === modalEl) closeModal();
    });

    /* Native <dialog> already closes on Escape; nothing extra needed. */
  }

  /* ----------------------------------------------------- init */
  function init() {
    buildNav();
    wireEvents();
    const now = new Date();
    const monthName = MONTHS[now.getMonth()];   // 0-indexed -> name
    renderMonth(monthName);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
