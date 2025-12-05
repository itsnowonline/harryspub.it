// FIXED UNIVERSAL IMPORT (works on all devices)
import * as pages from "./menuPages.js";

const page0HTML = pages.page0HTML;
const page1HTML = pages.page1HTML;
const page2HTML = pages.page2HTML;

// MAIN CONTAINER
const main = document.getElementById("menuPages");

let currentPage = 0; // 0 = home, 1 = menu page 1, 2 = menu page 2


/* ============================================================
   SHOW PAGE (0, 1, 2)
============================================================ */
function showPage(num) {
    currentPage = num;

    // PAGE 0 — HOME
    if (num === 0) {
        main.innerHTML = page0HTML;
        main.style.display = "block";
        main.style.opacity = 1;
        return;
    }

    // MENU PAGES (1 & 2)
    main.style.display = "block";
    main.style.opacity = 0;

    const html = num === 1 ? page1HTML : page2HTML;

    setTimeout(() => {
        main.innerHTML = html;
        main.style.opacity = 1;
    }, 10);
}


/* ============================================================
   NAVIGATION HANDLERS
============================================================ */
function goNext() {
    if (currentPage === 0) showPage(1);
    else if (currentPage === 1) showPage(2);
}

function goPrev() {
    if (currentPage === 2) showPage(1);
    else if (currentPage === 1) showPage(0);
}


/* ============================================================
   INITIAL LOAD
============================================================ */
showPage(0);


/* ============================================================
   SWIPE DETECTION (Vertical + Horizontal)
============================================================ */
let startX = 0, startY = 0;

document.addEventListener("touchstart", (e) => {
    const t = e.changedTouches[0];
    startX = t.clientX;
    startY = t.clientY;
});

document.addEventListener("touchend", (e) => {
    const t = e.changedTouches[0];
    const diffX = t.clientX - startX;
    const diffY = t.clientY - startY;

    const absX = Math.abs(diffX);
    const absY = Math.abs(diffY);

    // Ignore small swipes
    if (absX < 40 && absY < 40) return;

    // Horizontal swipe
    if (absX > absY) {
        if (diffX < 0) goNext();  // → next
        else goPrev();            // ← previous
    }
    // Vertical swipe
    else {
        if (diffY < 0) goNext();  // bottom → top
        else goPrev();            // top → bottom
    }
});