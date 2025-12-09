// ============================================================
//   animationPlayer.js – ALL ANIMATION TRIGGERS (NO COOLDOWN)
//   Only VERTICAL swipe (>=70px) triggers animation
// ============================================================

// ALWAYS load latest swipeGit.js
// import { startSwipeTutorial } from "./swipeGit.js?v=3";
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
//  TRIGGER 2 — PAGE 0 TAP → Play Animation
// ------------------------------------------------------------
document.addEventListener("click", (e) => {
    if (!isOnPage0()) return;

    const page0 = document.getElementById("page0");
    if (page0 && page0.contains(e.target)) {
        startSwipeTutorial();
    }
});

// ------------------------------------------------------------
//  TRIGGER 3 — PAGE 0 VERTICAL SWIPE ONLY (>=70px)
// ------------------------------------------------------------
let startX = 0;
let startY = 0;

window.addEventListener("touchstart", (e) => {
    const t = e.changedTouches[0];
    startX = t.clientX;
    startY = t.clientY;
});

window.addEventListener("touchend", (e) => {
    if (!isOnPage0()) return;

    const t = e.changedTouches[0];
    const dx = t.clientX - startX;  // horizontal movement
    const dy = t.clientY - startY;  // vertical movement

    // ❌ Ignore horizontal movements completely
    if (Math.abs(dx) > Math.abs(dy)) return;

    // ✔ Vertical swipe must be at least 70px
    if (Math.abs(dy) < 70) return;

    // Running tutorial:
    startSwipeTutorial();
});

// ------------------------------------------------------------
//  TRIGGER 4 — MENU Button Click
// ------------------------------------------------------------
document.addEventListener("click", (e) => {
    if (e.target.textContent?.trim().toLowerCase() === "menu") {
        startSwipeTutorial();
    }
});