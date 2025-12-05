import * as pages from "./menuPages.js";

const page0HTML = pages.page0HTML;
const page1HTML = pages.page1HTML;
const page2HTML = pages.page2HTML;

const app = document.getElementById("app");

let currentPage = 0; // 0 = home, 1 = menu1, 2 = menu2


/* ============================================================
   RENDER PAGE
============================================================ */
function render(page) {
    currentPage = page;

    if (page === 0) {
        app.innerHTML = page0HTML;
        app.className = "homeMode";
        return;
    }

    app.className = "menuMode"; // glass mode for menu pages
    app.style.opacity = 0;

    const html = page === 1 ? page1HTML : page2HTML;

    setTimeout(() => {
        app.innerHTML = html;
        app.style.opacity = 1;
    }, 10);
}


/* ============================================================
   PAGE NAVIGATION
============================================================ */
function nextPage() {
    if (currentPage === 0) render(1);
    else if (currentPage === 1) render(2);
}

function prevPage() {
    if (currentPage === 2) render(1);
    else if (currentPage === 1) render(0);
}


/* ============================================================
   INITIAL LOAD
============================================================ */
render(0);


/* ============================================================
   SWIPE DETECTION
============================================================ */
let sx = 0, sy = 0;

document.addEventListener("touchstart", e => {
    const t = e.changedTouches[0];
    sx = t.clientX;
    sy = t.clientY;
});

document.addEventListener("touchend", e => {
    const t = e.changedTouches[0];
    const dx = t.clientX - sx;
    const dy = t.clientY - sy;

    const ax = Math.abs(dx);
    const ay = Math.abs(dy);

    if (ax < 40 && ay < 40) return;

    if (ax > ay) {
        if (dx < 0) nextPage();
        else prevPage();
    } else {
        if (dy < 0) nextPage();
        else prevPage();
    }
});