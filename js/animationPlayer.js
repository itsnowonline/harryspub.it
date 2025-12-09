// ============================================================
//   animationPlayer.js – ALL ANIMATION TRIGGERS (NO COOLDOWN)
//   Allowed triggers:
//   1) Welcome popup close
//   2) Click on .home-bg  (page 0 only)
//   3) Vertical swipe on .home-bg (page 0 only, >=70px)
//   4) Click on "Menu" button (page 0 only)
// ============================================================

import { startSwipeTutorial } from "https://itsnowonline.github.io/js/swipe/swipeGit.js?v=3";

const app = document.getElementById("app");

// ------------------------------------------------------------
//  HELPER — Check if user is on PAGE 0
// ------------------------------------------------------------
function isOnPage0() {
    return document.querySelector("#page0") !== null;
}

// ------------------------------------------------------------
//  TRIGGER 1 — Welcome Popup Close
// ------------------------------------------------------------
const popup = document.getElementById("openingOverlay");
const popupClose = document.getElementById("closeOverlay");

if (popup && popupClose) {
    popupClose.addEventListener("click", () => {
        startSwipeTutorial();
    });
}

// ------------------------------------------------------------
//  TRIGGER 2 — CLICK on .home-bg or "Menu" button (PAGE 0 ONLY)
// ------------------------------------------------------------
document.addEventListener("click", (e) => {
    if (!isOnPage0()) return;

    const target = e.target;

    // center background area
    const inHomeBg = target.closest(".home-bg") !== null;

    // Menu button (only text "Menu")
    const menuBtn = target.closest("button.nav-link");
    const isMenuBtn =
        menuBtn &&
        menuBtn.textContent &&
        menuBtn.textContent.trim().toLowerCase() === "menu";

    if (inHomeBg || isMenuBtn) {
        startSwipeTutorial();
    }
});

// ------------------------------------------------------------
//  TRIGGER 3 — VERTICAL SWIPE on .home-bg (PAGE 0 ONLY)
// ------------------------------------------------------------

let startX = 0;
let startY = 0;
let startTarget = null;

window.addEventListener("touchstart", (e) => {
    const t = e.changedTouches[0];
    startX = t.clientX;
    startY = t.clientY;
    startTarget = e.target;
});

window.addEventListener("touchend", (e) => {
    if (!isOnPage0()) return;

    const t = e.changedTouches[0];
    const dx = t.clientX - startX;
    const dy = t.clientY - startY;

    // Only vertical swipe (ignore horizontal)
    if (Math.abs(dx) > Math.abs(dy)) return;

    // Minimum 70px movement
    if (Math.abs(dy) < 70) return;

    // Swipe must start inside .home-bg
    if (!startTarget) return;
    const inHomeBg = startTarget.closest(".home-bg") !== null;
    if (!inHomeBg) return;

    startSwipeTutorial();
});