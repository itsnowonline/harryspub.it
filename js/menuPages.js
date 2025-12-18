/* ============================================================
   menuPages.js — LANGUAGE PROXY (AUTO + MANUAL)
============================================================ */

// 1) Read saved language (if any)
const savedLang = localStorage.getItem("hp_lang");

// 2) Detect browser language (fallback)
const browserLang = (navigator.language || "en").toLowerCase();

// 3) Decide final language
const lang = savedLang || (browserLang.startsWith("it") ? "it" : "en");

// 4) Dynamic import
let pages;
if (lang === "it") {
    pages = await import("./menuPages-it.js");
} else {
    pages = await import("./menuPages-en.js");
}

// 5) Re-export SAME names (critical)
export const page0HTML = pages.page0HTML;
export const page1HTML = pages.page1HTML;
export const page2HTML = pages.page2HTML;
export const page3HTML = pages.page3HTML;
export const page4HTML = pages.page4HTML;
export const page5HTML = pages.page5HTML;
export const page6HTML = pages.page6HTML;
export const page7HTML = pages.page7HTML;
export const page8HTML = pages.page8HTML;