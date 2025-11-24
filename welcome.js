// js/welcome.js

const LANG_KEY = "pub_lang";
const LANG_EXPIRY_KEY = "pub_lang_expiry";
const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

function getSavedLanguage() {
  try {
    const lang = localStorage.getItem(LANG_KEY);
    const expiry = localStorage.getItem(LANG_EXPIRY_KEY);

    if (!lang || !expiry) return null;

    const now = Date.now();
    if (now > Number(expiry)) {
      localStorage.removeItem(LANG_KEY);
      localStorage.removeItem(LANG_EXPIRY_KEY);
      return null;
    }

    return lang;
  } catch (e) {
    return null;
  }
}

function saveLanguage(lang) {
  try {
    const now = Date.now();
    localStorage.setItem(LANG_KEY, lang);
    localStorage.setItem(LANG_EXPIRY_KEY, String(now + THIRTY_DAYS_MS));
  } catch (e) {
    // ignore
  }
}

function detectBrowserLanguage() {
  const lang = navigator.language || navigator.userLanguage || "en";
  if (lang.toLowerCase().startsWith("it")) return "it";
  return "en";
}

function createWelcomePopup(defaultLang) {
  const overlay = document.createElement("div");
  overlay.id = "welcomeOverlay";

  const popup = document.createElement("div");
  popup.id = "welcomePopup";

  const title = document.createElement("h2");
  title.id = "welcomePopupTitle";
  title.setAttribute("data-i18n", "welcome.title");

  const text = document.createElement("p");
  text.id = "welcomePopupText";
  text.setAttribute("data-i18n", "welcome.text");

  const select = document.createElement("select");
  select.id = "welcomeLangSelect";

  const optEn = document.createElement("option");
  optEn.value = "en";
  optEn.setAttribute("data-i18n", "welcome.lang.en");

  const optIt = document.createElement("option");
  optIt.value = "it";
  optIt.setAttribute("data-i18n", "welcome.lang.it");

  select.appendChild(optEn);
  select.appendChild(optIt);

  const btn = document.createElement("button");
  btn.id = "welcomeContinueBtn";
  btn.setAttribute("data-i18n", "welcome.continue");

  popup.appendChild(title);
  popup.appendChild(text);
  popup.appendChild(select);
  popup.appendChild(btn);
  overlay.appendChild(popup);
  document.body.appendChild(overlay);

  applyTranslations(defaultLang);
  select.value = defaultLang;

  select.addEventListener("change", () => {
    const chosenLang = select.value || "en";
    applyTranslations(chosenLang);
  });

  btn.addEventListener("click", () => {
    const chosenLang = select.value || defaultLang || "en";
    saveLanguage(chosenLang);
    applyTranslations(chosenLang);
    overlay.remove();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = getSavedLanguage();

  if (savedLang) {
    applyTranslations(savedLang);
    return;
  }

  const defaultLang = detectBrowserLanguage();
  createWelcomePopup(defaultLang);
});

// expose for other scripts
window.saveLanguage = saveLanguage;
