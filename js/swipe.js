import * as pages from "./menuPages.js";

const page0HTML = pages.page0HTML;
const page1HTML = pages.page1HTML;
const page2HTML = pages.page2HTML;
const page3HTML = pages.page3HTML;
const page4HTML = pages.page4HTML;
const page5HTML = pages.page5HTML;
const page6HTML = pages.page6HTML;
const page7HTML = pages.page7HTML;
const page8HTML = pages.page8HTML;   // ★ NEW

const app = document.getElementById("app");

let currentPage = 0;
// 0=home to 8=new page


/* ============================================================
   RENDER PAGE
============================================================ */
function render(page) {
    currentPage = page;

    if (page === 0) {
        app.innerHTML = page0HTML;
        app.className = "homeMode";
        attachNavClicks();
        return;
    }

    app.className = "menuMode";
    app.style.opacity = 0;

    const html =
        page === 1 ? page1HTML :
        page === 2 ? page2HTML :
        page === 3 ? page3HTML :
        page === 4 ? page4HTML :
        page === 5 ? page5HTML :
        page === 6 ? page6HTML :
        page === 7 ? page7HTML :
        page8HTML;   // fallback = page8

    setTimeout(() => {
        app.innerHTML = html;
        app.style.opacity = 1;
        attachNavClicks();
    }, 10);
}


/* ============================================================
   PAGE NAVIGATION (LEFT ↔ RIGHT)
============================================================ */
function nextPage() {
    if (currentPage === 0) render(1);
    else if (currentPage === 1) render(2);
    else if (currentPage === 2) render(3);
    else if (currentPage === 3) render(4);
    else if (currentPage === 4) render(5);
    else if (currentPage === 5) render(6);
    else if (currentPage === 6) render(7);
    else if (currentPage === 7) render(8);   // ★ NEW
}

function prevPage() {
    if (currentPage === 8) render(7);        // ★ NEW
    else if (currentPage === 7) render(6);
    else if (currentPage === 6) render(5);
    else if (currentPage === 5) render(4);
    else if (currentPage === 4) render(3);
    else if (currentPage === 3) render(2);
    else if (currentPage === 2) render(1);
    else if (currentPage === 1) render(0);
}


/* ============================================================
   INITIAL LOAD
============================================================ */
render(0);


/* ============================================================
   SWIPE DETECTION  (vertical scroll safe)
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

    if (Math.abs(dy) > Math.abs(dx)) return; // vertical scroll = ignore
    if (Math.abs(dx) < 40) return;          // tiny swipe ignore

    if (dx > 0) prevPage();
    else nextPage();
});


/* ============================================================
   CLICK HANDLERS
============================================================ */
function attachNavClicks() {

    document.querySelectorAll(".home-btn").forEach(btn => {
        btn.onclick = () => render(0);
    });

    document.querySelectorAll(".nav-link").forEach(btn => {
        if (btn.textContent.trim().toLowerCase() === "menu") {
            btn.onclick = () => render(1);
        }
    });
}