// js/language-switch.js

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("[data-lang-switch]");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-lang") || "en";
    const nextLang = current === "en" ? "it" : "en";

    applyTranslations(nextLang);
    if (typeof saveLanguage === "function") {
      saveLanguage(nextLang);
    }
  });
});
