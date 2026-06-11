/* =============================================================================
   Nature Through the Seasons — notebook.js

   A personal, on-device field notebook. Self-contained: this script injects its
   own "Notebook" button and its own modal, and wires all behaviour itself, so
   it does not require changes to app.js.

   Storage: browser localStorage on THIS device only. Entries are NOT synced to
   other devices, NOT backed up, and will be lost if the browser's site data is
   cleared. This is intentional — it's a personal scratchpad for one phone.

   Each entry is automatically stamped with date, time, and (if permission is
   granted over HTTPS) GPS coordinates plus a map link. Entries can be copied to
   the clipboard or shared via the native share sheet (e.g. into iOS Notes).
   ========================================================================== */

(function () {
  "use strict";

  var STORAGE_KEY = "nts-notebook-entries-v1";

  /* ----------------------------------------------------- storage helpers */
  function loadEntries() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      var arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr : [];
    } catch (e) {
      return [];
    }
  }
  function saveEntries(entries) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
      return true;
    } catch (e) {
      return false;   // quota or privacy mode — caller warns the user
    }
  }

  /* ----------------------------------------------------- small helpers */
  function esc(str) {
    return String(str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  /* Human-readable stamp, using the device's locale. */
  function formatStamp(iso) {
    var d = new Date(iso);
    if (isNaN(d.getTime())) return iso;
    try {
      return d.toLocaleString(undefined, {
        weekday: "short", year: "numeric", month: "short", day: "numeric",
        hour: "2-digit", minute: "2-digit"
      });
    } catch (e) {
      return d.toString();
    }
  }

  /* Plain-text rendering of one entry, used for copy + share. */
  function entryToText(entry) {
    var lines = [];
    lines.push(formatStamp(entry.created));
    if (entry.lat != null && entry.lng != null) {
      lines.push("Location: " + entry.lat.toFixed(5) + ", " + entry.lng.toFixed(5) +
                 "  (https://maps.google.com/?q=" + entry.lat + "," + entry.lng + ")");
    }
    lines.push("");
    lines.push(entry.text);
    return lines.join("\n");
  }

  function allEntriesToText(entries) {
    return entries.map(entryToText).join("\n\n— — —\n\n");
  }

  /* ----------------------------------------------------- DOM construction */
  var modal, listEl, textEl, statusEl;

  function buildModal() {
    modal = document.createElement("dialog");
    modal.className = "species-modal notebook-modal";  // reuse modal styling
    modal.id = "notebook-modal";

    var card = document.createElement("div");
    card.className = "modal-card";

    var closeBtn = document.createElement("button");
    closeBtn.className = "modal-close";
    closeBtn.setAttribute("aria-label", "Close");
    closeBtn.innerHTML = "&times;";
    closeBtn.addEventListener("click", closeNotebook);
    card.appendChild(closeBtn);

    var body = document.createElement("div");
    body.className = "modal-body";

    body.innerHTML =
      '<p class="modal-eyebrow">Field Notebook</p>' +
      '<h3 class="modal-title">My Notebook</h3>' +
      '<p class="modal-action">Notes are saved on this device only — not backed up or synced.</p>' +
      '<div class="nb-compose">' +
        '<textarea id="nb-text" class="nb-textarea" rows="4" placeholder="What did you see? (a note, a sighting, a thought)"></textarea>' +
        '<div class="nb-compose-row">' +
          '<label class="nb-loc-toggle"><input type="checkbox" id="nb-loc" checked /> Stamp with location</label>' +
          '<button type="button" id="nb-save" class="nb-save-btn">Save entry</button>' +
        '</div>' +
        '<p id="nb-status" class="nb-status" aria-live="polite"></p>' +
      '</div>' +
      '<div class="nb-toolbar">' +
        '<button type="button" id="nb-copy-all" class="nb-tool-btn">Copy all</button>' +
        '<button type="button" id="nb-share-all" class="nb-tool-btn">Share all</button>' +
      '</div>' +
      '<div id="nb-list" class="nb-list"></div>';

    card.appendChild(body);
    modal.appendChild(card);
    document.body.appendChild(modal);

    listEl = body.querySelector("#nb-list");
    textEl = body.querySelector("#nb-text");
    statusEl = body.querySelector("#nb-status");

    body.querySelector("#nb-save").addEventListener("click", onSave);
    body.querySelector("#nb-copy-all").addEventListener("click", onCopyAll);
    body.querySelector("#nb-share-all").addEventListener("click", onShareAll);

    /* Backdrop click closes (matches the species modal behaviour). */
    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeNotebook();
    });

    /* Hide the Share controls entirely if the browser can't share. */
    if (!navigator.share) {
      var sa = body.querySelector("#nb-share-all");
      if (sa) sa.style.display = "none";
    }
  }

  /* ----------------------------------------------------- rendering list */
  function renderList() {
    var entries = loadEntries();
    listEl.innerHTML = "";

    if (entries.length === 0) {
      var empty = document.createElement("p");
      empty.className = "nb-empty";
      empty.textContent = "No entries yet. Your saved notes will appear here, newest first.";
      listEl.appendChild(empty);
      toggleToolbar(false);
      return;
    }
    toggleToolbar(true);

    /* Newest first. */
    entries.slice().reverse().forEach(function (entry) {
      var item = document.createElement("div");
      item.className = "nb-entry";

      var meta = document.createElement("div");
      meta.className = "nb-entry-meta";
      meta.textContent = formatStamp(entry.created);

      if (entry.lat != null && entry.lng != null) {
        var sep = document.createTextNode(" · ");
        meta.appendChild(sep);
        var a = document.createElement("a");
        a.className = "nb-entry-loc";
        a.href = "https://maps.google.com/?q=" + entry.lat + "," + entry.lng;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = entry.lat.toFixed(4) + ", " + entry.lng.toFixed(4);
        meta.appendChild(a);
      }
      item.appendChild(meta);

      var p = document.createElement("p");
      p.className = "nb-entry-text";
      p.textContent = entry.text;
      item.appendChild(p);

      var ctr = document.createElement("div");
      ctr.className = "nb-entry-controls";

      var copyB = document.createElement("button");
      copyB.className = "nb-tool-btn nb-small";
      copyB.textContent = "Copy";
      copyB.addEventListener("click", function () { copyText(entryToText(entry), copyB); });
      ctr.appendChild(copyB);

      if (navigator.share) {
        var shareB = document.createElement("button");
        shareB.className = "nb-tool-btn nb-small";
        shareB.textContent = "Share";
        shareB.addEventListener("click", function () { shareText(entryToText(entry)); });
        ctr.appendChild(shareB);
      }

      var delB = document.createElement("button");
      delB.className = "nb-tool-btn nb-small nb-danger";
      delB.textContent = "Delete";
      delB.addEventListener("click", function () { onDelete(entry.id); });
      ctr.appendChild(delB);

      item.appendChild(ctr);
      listEl.appendChild(item);
    });
  }

  function toggleToolbar(show) {
    var tb = document.querySelector(".nb-toolbar");
    if (tb) tb.style.display = show ? "" : "none";
  }

  /* ----------------------------------------------------- actions */
  function setStatus(msg, kind) {
    statusEl.textContent = msg;
    statusEl.className = "nb-status" + (kind ? " " + kind : "");
    if (msg) {
      window.setTimeout(function () {
        if (statusEl.textContent === msg) { statusEl.textContent = ""; statusEl.className = "nb-status"; }
      }, 4000);
    }
  }

  function persistNewEntry(text, lat, lng) {
    var entries = loadEntries();
    entries.push({
      id: String(Date.now()) + "-" + Math.random().toString(36).slice(2, 7),
      created: new Date().toISOString(),
      text: text,
      lat: (typeof lat === "number") ? lat : null,
      lng: (typeof lng === "number") ? lng : null
    });
    var ok = saveEntries(entries);
    if (!ok) {
      setStatus("Couldn't save — device storage may be full or blocked.", "err");
      return;
    }
    textEl.value = "";
    renderList();
    setStatus("Saved.", "ok");
  }

  function onSave() {
    var text = textEl.value.trim();
    if (!text) { setStatus("Write something first.", "err"); return; }

    var wantLoc = document.getElementById("nb-loc").checked;
    if (wantLoc && navigator.geolocation) {
      setStatus("Saving… getting location.", null);
      navigator.geolocation.getCurrentPosition(
        function (pos) {
          persistNewEntry(text, pos.coords.latitude, pos.coords.longitude);
        },
        function () {
          /* Permission denied / unavailable / not HTTPS — save without location. */
          persistNewEntry(text, null, null);
          setStatus("Saved (without location).", "ok");
        },
        { enableHighAccuracy: false, timeout: 8000, maximumAge: 60000 }
      );
    } else {
      persistNewEntry(text, null, null);
    }
  }

  function onDelete(id) {
    var entries = loadEntries().filter(function (e) { return e.id !== id; });
    saveEntries(entries);
    renderList();
  }

  function copyText(text, btn) {
    function flash() {
      if (btn) {
        var orig = btn.textContent;
        btn.textContent = "Copied";
        window.setTimeout(function () { btn.textContent = orig; }, 1500);
      } else {
        setStatus("Copied to clipboard.", "ok");
      }
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(flash, function () { fallbackCopy(text, flash); });
    } else {
      fallbackCopy(text, flash);
    }
  }
  function fallbackCopy(text, done) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); done(); } catch (e) { setStatus("Press and hold to copy.", "err"); }
    document.body.removeChild(ta);
  }

  function shareText(text) {
    if (navigator.share) {
      navigator.share({ title: "Nature notebook", text: text }).catch(function () {});
    } else {
      copyText(text);
    }
  }

  function onCopyAll() {
    var entries = loadEntries();
    if (entries.length === 0) { setStatus("Nothing to copy yet.", "err"); return; }
    copyText(allEntriesToText(entries));
  }
  function onShareAll() {
    var entries = loadEntries();
    if (entries.length === 0) { setStatus("Nothing to share yet.", "err"); return; }
    shareText(allEntriesToText(entries));
  }

  /* ----------------------------------------------------- open / close */
  function openNotebook() {
    renderList();
    if (typeof modal.showModal === "function") modal.showModal();
    else modal.setAttribute("open", "");
    if (textEl) textEl.focus();
  }
  function closeNotebook() {
    if (typeof modal.close === "function") modal.close();
    else modal.removeAttribute("open");
  }

  /* ----------------------------------------------------- button injection */
  /* The app re-renders #app-content on every month switch, wiping any button we
     add. Rather than fight that, we use a fixed-position floating button that
     lives outside #app-content, so it persists across month changes. */
  function injectButton() {
    if (document.getElementById("notebook-fab")) return;
    var btn = document.createElement("button");
    btn.id = "notebook-fab";
    btn.type = "button";
    btn.className = "notebook-fab";
    btn.setAttribute("aria-label", "Open field notebook");
    btn.innerHTML = '<span class="notebook-fab-mark" aria-hidden="true">&#9998;</span>' +
                    '<span class="notebook-fab-label">Notebook</span>';
    btn.addEventListener("click", openNotebook);
    document.body.appendChild(btn);
  }

  /* ----------------------------------------------------- init */
  function init() {
    buildModal();
    injectButton();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
