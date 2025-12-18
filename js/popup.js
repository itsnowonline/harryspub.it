// ============================================================
//  popup.js – Welcome Popup Controller
// ============================================================

const LS_KEY = "harrys_opening_seen_time";
const OVERLAY_TIMEOUT = 10 * 1000; // 10 seconds

const overlay = document.getElementById("openingOverlay");
const closeBtn = document.getElementById("closeOverlay");

function hideOverlay() {
    if (!overlay) return;

    // hide popup visually
    overlay.classList.add("hidden");
    overlay.setAttribute("aria-hidden", "true");

    // allow animationPlayer.js to detect closing
    document.dispatchEvent(new Event("popupClosed"));

    // save close time
    localStorage.setItem(LS_KEY, Date.now().toString());
}


// AUTO-HIDE CHECK
(function checkOverlayTime() {
    if (!overlay) return;

    const saved = localStorage.getItem(LS_KEY);
    if (!saved) return;

    const diff = Date.now() - Number(saved);

    if (diff < OVERLAY_TIMEOUT) {
        overlay.classList.add("hidden");
        overlay.setAttribute("aria-hidden", "true");

        // notify animationPlayer
        document.dispatchEvent(new Event("popupClosed"));
    } else {
        localStorage.removeItem(LS_KEY);
    }
})();


// CLICK HANDLERS
closeBtn.addEventListener("click", hideOverlay);

overlay.addEventListener("click", (e) => {
    if (e.target === overlay) hideOverlay();
});