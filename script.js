// Import / mirror js/script.js logic
document.addEventListener("DOMContentLoaded", () => {
  // If not already loaded via js/script.js
  if (typeof initTheme === 'undefined') {
    const s = document.createElement('script');
    s.src = 'js/script.js';
    document.body.appendChild(s);
  }
});
