// Reload page without hash
window.addEventListener("load", () => {
    if (window.location.hash) {
        window.history.replaceState(null, null, window.location.pathname);
        }
    }
);