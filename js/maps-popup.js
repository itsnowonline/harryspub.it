// js/maps-popup.js

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=40.1217153,18.2984916";
const APPLE_MAPS_URL = "https://maps.apple.com/?ll=40.1217153,18.2984916";

function openMapsSheet() {
  const existing = document.getElementById("mapsOverlay");
  if (existing) {
    existing.remove();
  }

  const overlay = document.createElement("div");
  overlay.id = "mapsOverlay";

  const sheet = document.createElement("div");
  sheet.id = "mapsSheet";

  const title = document.createElement("div");
  title.id = "mapsTitle";
  title.setAttribute("data-i18n", "maps.title");

  const optionsWrap = document.createElement("div");
  optionsWrap.className = "maps-options";

  const btnGoogle = document.createElement("button");
  btnGoogle.type = "button";
  btnGoogle.className = "maps-btn primary";
  btnGoogle.setAttribute("data-i18n", "maps.google");

  const btnApple = document.createElement("button");
  btnApple.type = "button";
  btnApple.className = "maps-btn";
  btnApple.setAttribute("data-i18n", "maps.apple");

  const btnCancel = document.createElement("button");
  btnCancel.type = "button";
  btnCancel.className = "maps-btn cancel";
  btnCancel.setAttribute("data-i18n", "maps.cancel");

  optionsWrap.appendChild(btnGoogle);
  optionsWrap.appendChild(btnApple);
  optionsWrap.appendChild(btnCancel);

  sheet.appendChild(title);
  sheet.appendChild(optionsWrap);
  overlay.appendChild(sheet);
  document.body.appendChild(overlay);

  const current = document.documentElement.getAttribute("data-lang") || "en";
  applyTranslations(current);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.remove();
    }
  });

  btnCancel.addEventListener("click", () => overlay.remove());

  btnGoogle.addEventListener("click", () => {
    window.open(GOOGLE_MAPS_URL, "_blank");
    overlay.remove();
  });

  btnApple.addEventListener("click", () => {
    window.open(APPLE_MAPS_URL, "_blank");
    overlay.remove();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const trigger = document.querySelector("[data-maps-trigger]");
  if (!trigger) return;

  trigger.addEventListener("click", () => {
    openMapsSheet();
  });
});
