// js/i18n.js

const translations = {
  en: {
    "pub.name": "Harry's Pub",

    "hero.title": "Harry's Pub",
    "hero.subtitle": "Eat, drink and chill in the heart of the city.",
    "hero.menuButton": "FOOD MENÙ",

    "contact.title": "Find us",
    "contact.addressLabel": "Address",
    "contact.address": "Via Lubelli 9",
    "contact.phoneLabel": "Phone",
    "contact.phone": "0836505587",
    "contact.emailLabel": "Email",
    "contact.email": "harshansibia1081@gmail.com",
    "contact.hoursLabel": "Opening hours",
    "contact.hours": "11:00–15:00, 18:00–00:00",
    "contact.followUs": "Follow us",

    "maps.label": "Maps",
    "maps.title": "Select Maps App",
    "maps.google": "Open in Google Maps",
    "maps.apple": "Open in Apple Maps",
    "maps.cancel": "Cancel",

    "footer.copy": "© Harry's Pub. All rights reserved.",

    "welcome.title": "Welcome to Harry's Pub!",
    "welcome.text": "Please choose your preferred language to continue.",
    "welcome.continue": "Continue",
    "welcome.lang.en": "English",
    "welcome.lang.it": "Italian",

    "menu.title": "Food Menu",
    "menu.subtitle": "Menu will be available here."
  },

  it: {
    "pub.name": "Harry's Pub",

    "hero.title": "Harry's Pub",
    "hero.subtitle": "Mangia, bevi e rilassati nel cuore della città.",
    "hero.menuButton": "MENÙ CIBO",

    "contact.title": "Dove siamo",
    "contact.addressLabel": "Indirizzo",
    "contact.address": "Via Lubelli 9",
    "contact.phoneLabel": "Telefono",
    "contact.phone": "0836505587",
    "contact.emailLabel": "Email",
    "contact.email": "harshansibia1081@gmail.com",
    "contact.hoursLabel": "Orari di apertura",
    "contact.hours": "11:00–15:00, 18:00–00:00",
    "contact.followUs": "Seguici",

    "maps.label": "Mappe",
    "maps.title": "Seleziona l'app Mappe",
    "maps.google": "Apri in Google Maps",
    "maps.apple": "Apri in Apple Maps",
    "maps.cancel": "Annulla",

    "footer.copy": "© Harry's Pub. Tutti i diritti riservati.",

    "welcome.title": "Benvenuto al Harry's Pub!",
    "welcome.text": "Seleziona la tua lingua preferita per continuare.",
    "welcome.continue": "Continua",
    "welcome.lang.en": "Inglese",
    "welcome.lang.it": "Italiano",

    "menu.title": "Menù Cibo",
    "menu.subtitle": "Il menù sarà disponibile qui."
  }
};

let currentLang = "en";

function applyTranslations(lang) {
  currentLang = lang;

  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const dict = translations[lang];

    if (dict && dict[key]) {
      el.textContent = dict[key];
    }
  });

  const labelEl = document.querySelector("[data-lang-label]");
  if (labelEl) {
    labelEl.textContent = lang.toUpperCase();
  }

  document.documentElement.setAttribute("data-lang", lang);
}

// expose for other scripts
window.applyTranslations = applyTranslations;
window.translations = translations;
window.currentLang = currentLang;
