let pages;

/* ================= LOAD PAGES ================= */
async function loadPages() {
    const lang = localStorage.getItem("hp_lang") || "en";

    if (lang === "it") {
        pages = await import("./menuPages-it.js");
    } else {
        pages = await import("./menuPages-en.js");
    }
}

await loadPages();

/* ================= PAGE REFS ================= */
let {
    page0HTML,
    page1HTML,
    page2HTML,
    page3HTML,
    page4HTML,
    page5HTML,
    page6HTML,
    page7HTML,
    page8HTML
} = pages;

const app = document.getElementById("app");
let currentPage = 0;

/* ================= RENDER ================= */
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
        page8HTML;

    setTimeout(() => {
        app.innerHTML = html;
        app.style.opacity = 1;
        attachNavClicks();
    }, 10);
}

/* ================= NAV ================= */
function nextPage() {
    if (currentPage < 8) render(currentPage + 1);
}

function prevPage() {
    if (currentPage > 0) render(currentPage - 1);
}

/* ================= INIT ================= */
render(0);

/* ================= SWIPE ================= */
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

    if (Math.abs(dy) > Math.abs(dx)) return;
    if (Math.abs(dx) < 40) return;

    dx > 0 ? prevPage() : nextPage();
});

/* ================= BUTTONS ================= */
function attachNavClicks() {

    /* ========== HOME (pages 1–8) ========== */
    document.querySelectorAll(".home-btn").forEach(btn => {
        btn.onclick = () => render(0);
    });

    /* ========== PAGE 0 ONLY (TOP NAV) ========== */
    if (currentPage === 0) {
        const mainNav = document.querySelector(".main-nav");
        if (mainNav) {
            const links = mainNav.querySelectorAll(".nav-link");

            // MENU (Menù)
            if (links[0]) {
                links[0].onclick = () => render(1);
            }

            // LANGUAGE
            if (links[2]) {
                links[2].onclick = async () => {
                    const cur = localStorage.getItem("hp_lang") || "en";
                    const next = cur === "it" ? "en" : "it";
                    localStorage.setItem("hp_lang", next);

                    await loadPages();
                    ({
                        page0HTML,
                        page1HTML,
                        page2HTML,
                        page3HTML,
                        page4HTML,
                        page5HTML,
                        page6HTML,
                        page7HTML,
                        page8HTML
                    } = pages);

                    render(0);
                };
            }
        }
        return; // ⛔ IMPORTANT: stop here
    }

    /* ========== PAGES 1–8 (FLOATING BUTTONS) ========== */
    document.querySelectorAll(".floating-menu-btns").forEach(group => {
        const links = group.querySelectorAll(".nav-link");

        // LANGUAGE ONLY
        if (links[1]) {
            links[1].onclick = async () => {
                const cur = localStorage.getItem("hp_lang") || "en";
                const next = cur === "it" ? "en" : "it";
                localStorage.setItem("hp_lang", next);

                await loadPages();
                ({
                    page0HTML,
                    page1HTML,
                    page2HTML,
                    page3HTML,
                    page4HTML,
                    page5HTML,
                    page6HTML,
                    page7HTML,
                    page8HTML
                } = pages);

                render(currentPage);
            };
        }
    });
}