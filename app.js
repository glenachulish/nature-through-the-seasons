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

  /* ---- Info panel ("more info") DOM references ---- */
  const infoPanelEl     = document.getElementById("info-panel");
  const infoTitleEl     = document.getElementById("info-panel-title");
  const infoFallbackEl  = document.getElementById("info-panel-fallback");

  let infoTeardownTimer = null;   // pending close/teardown handle

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
        item.appendChild(el("span", null, place.name));
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

    /* External reference — opens the in-page "more info" panel rather than a
       new tab. The panel attempts to embed the live site and falls back to a
       preview if the site refuses framing. */
    if (s.referenceUrl) {
      html += '<button type="button" class="modal-link" data-info-open="' +
              escapeHtml(id) + '">Find out more &nearr;</button>';
    }

    /* If nothing but the name exists, say so gracefully. */
    if (!s.folklore && !s.culinaryUses && !s.medicalUses &&
        !s.collinsPage && !s.bakerPage && !s.referenceUrl) {
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

  /* ============================================================ INFO PANEL */

  /* Open the slide-over panel for a species. It shows the in-panel preview —
     the detail we already hold plus an "Open full site in new tab" button.
     We don't embed the reference site: RSPB, Wildlife Trusts and Woodland
     Trust all block iframing, and a blocked frame fires a fake "load" event
     that can't be told apart from a real one, so an in-app embed can't be
     made reliable. Opening in a new tab is the honest, dependable behaviour. */
  function openInfoPanel(id) {
    const s = speciesIndex[id];
    if (!s || !s.referenceUrl) return;

    /* Cancel a pending close-teardown so a quick re-open isn't clobbered. */
    clearTimeout(infoTeardownTimer);

    infoTitleEl.textContent = s.name;

    /* Close the species modal underneath so they don't stack. */
    closeModal();

    /* Show the preview. */
    showInfoPreview(s);

    /* Reveal the panel. */
    infoPanelEl.hidden = false;
    infoPanelEl.setAttribute("aria-hidden", "false");
    /* Force a reflow so the CSS transition runs from the hidden state. */
    void infoPanelEl.offsetWidth;
    infoPanelEl.classList.add("open");
    document.body.classList.add("info-open");
  }

  /* The in-panel preview: species detail we already hold, plus a clear
     "open in new tab" button. */
  function showInfoPreview(s) {
    let html = "";

    if (s.action) {
      html += '<p class="info-fallback-action">' + escapeHtml(s.action) + '</p>';
    }
    if (s.folklore) {
      html += '<div class="info-fallback-section"><h4>Folklore &amp; Notes</h4><p>' +
              escapeHtml(s.folklore) + '</p></div>';
    }
    if (s.culinaryUses) {
      html += '<div class="info-fallback-section"><h4>Culinary Uses</h4><p>' +
              escapeHtml(s.culinaryUses) + '</p></div>';
    }
    if (s.medicalUses) {
      html += '<div class="info-fallback-section"><h4>Medicinal Uses</h4><p>' +
              escapeHtml(s.medicalUses) + '</p></div>';
    }

    const pills = [];
    if (s.collinsPage) pills.push('<span class="ref-pill"><strong>Collins Bird Guide</strong> &middot; p.' + escapeHtml(s.collinsPage) + '</span>');
    if (s.bakerPage)   pills.push('<span class="ref-pill"><strong>Baker</strong> &middot; p.' + escapeHtml(s.bakerPage) + '</span>');
    if (pills.length) {
      html += '<div class="modal-refs">' + pills.join("") + '</div>';
    }

    /* Single action: open the reference site in a new tab. These sites
       (RSPB, Wildlife Trusts, Woodland Trust) block iframe embedding, and a
       blocked frame fires a fake "load" event that's indistinguishable from a
       real one — so in-app embedding can't be done reliably. Opening in a new
       tab is the honest, dependable behaviour. */
    html += '<div class="info-actions">';
    html += '<a class="info-fallback-open" href="' + escapeHtml(s.referenceUrl) +
            '" target="_blank" rel="noopener noreferrer">Open full site in new tab &nearr;</a>';
    html += '</div>';

    infoFallbackEl.innerHTML = html;
    infoFallbackEl.hidden = false;
  }

  function closeInfoPanel() {
    clearTimeout(infoTeardownTimer);
    infoPanelEl.classList.remove("open");
    document.body.classList.remove("info-open");
    infoPanelEl.setAttribute("aria-hidden", "true");

    /* Wait for the slide-out transition, then fully hide and clear the panel.
       Guard against a quick re-open: if the panel is open again by the time
       this runs, do nothing. */
    const finish = function () {
      infoPanelEl.removeEventListener("transitionend", finish);
      clearTimeout(infoTeardownTimer);
      if (infoPanelEl.classList.contains("open")) return;  // re-opened — leave it
      infoPanelEl.hidden = true;
      infoFallbackEl.innerHTML = "";
      infoFallbackEl.hidden = true;
    };
    /* transitionend may not fire if motion is reduced; back it with a timer. */
    infoPanelEl.addEventListener("transitionend", finish);
    infoTeardownTimer = setTimeout(finish, 400);
  }

  function isInfoPanelOpen() {
    return !infoPanelEl.hidden && infoPanelEl.classList.contains("open");
  }

  /* ----------------------------------------------------- event wiring */
  function wireEvents() {
    /* Month switching — delegated on the nav container. */
    navEl.addEventListener("click", function (e) {
      const btn = e.target.closest(".month-btn");
      if (btn && btn.dataset.month) renderMonth(btn.dataset.month);
    });

    /* Card clicks — delegated on the content container. */
    contentEl.addEventListener("click", function (e) {
      const card = e.target.closest(".species-card");
      if (card && card.dataset.id) openModal(card.dataset.id);
    });

    /* Modal close button. */
    modalCloseEl.addEventListener("click", closeModal);

    /* "Find out more" inside the modal opens the info panel (delegated). */
    modalBodyEl.addEventListener("click", function (e) {
      const trigger = e.target.closest("[data-info-open]");
      if (trigger) {
        e.preventDefault();
        openInfoPanel(trigger.getAttribute("data-info-open"));
      }
    });

    /* Info panel clicks — close (× / backdrop carry data-info-close). */
    infoPanelEl.addEventListener("click", function (e) {
      if (e.target.closest("[data-info-close]")) closeInfoPanel();
    });

    /* Escape closes the info panel (the native <dialog> handles its own
       Escape; we only need to cover the panel, and close it first if open). */
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && isInfoPanelOpen()) {
        e.preventDefault();
        closeInfoPanel();
      }
    });

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
