// js/preload-images.js
// Preload all menu & UI images into browser cache

const preloadImages = [
  // menu images
  "assets/menu/alette.png",
  "assets/menu/aperitivo.png",
  "assets/menu/biriyani.png",
  "assets/menu/bottle.png",
  "assets/menu/bowl.png",
  "assets/menu/brb.png",
  "assets/menu/carnea.png",
  "assets/menu/carneb.png",
  "assets/menu/fries.png",
  "assets/menu/glass.png",
  "assets/menu/leaf.png",
  "assets/menu/mixing.png",
  "assets/menu/panino.png",
  "assets/menu/pizza.png",
  "assets/menu/riso.png",
  "assets/menu/samose.png",
  "assets/menu/tlb.png",

  // main images
  "assets/img/logo.png",
  "assets/img/bg.jpeg",
  "assets/img/nuova-apertura.jpg",

  // icons (optional but smooth)
  "assets/svg/call.svg",
  "assets/svg/email.svg",
  "assets/svg/facebook.svg",
  "assets/svg/instagram.svg",
  "assets/svg/map.svg",
  "assets/svg/share.png",
  "assets/svg/close.png"
];

preloadImages.forEach(src => {
  const img = new Image();
  img.src = src;
});