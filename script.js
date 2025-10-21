// ============================
// Utility Functions
// ============================

// Save theme in cookies
function saveTheme(theme) {
  document.cookie = `theme=${theme}; path=/; max-age=31536000`; // 1 year
}

// Load theme from cookies
function loadTheme() {
  const match = document.cookie.match(new RegExp("(^| )theme=([^;]+)"));
  return match ? match[2] : null;
}

// Apply theme with smooth transition
function setTheme(theme) {
  const body = document.body;

  // Enable smooth transition
  body.style.transition = "background 0.6s ease, color 0.6s ease";

  // Remove all themes
  const themes = [
    "theme-hacker",
    "theme-cyberpunk",
    "theme-abyss",
    "theme-white",
    "theme-darkblack"
  ];
  body.classList.remove(...themes);

  // Add the new theme
  body.classList.add("theme-" + theme);

  // Save to cookies
  saveTheme(theme);

  console.log("Applied theme:", body.className);
}

// Toggle side navigation panel
function togglePanel() {
  const panel = document.getElementById("side-panel");
  if (panel) {
    panel.classList.toggle("open");
  }
}

// ============================
// 4. Footer box injection (Collapsible + Theme Compatible)
// ============================
/*
function injectFooter() {
  if (document.querySelector(".site-footer-box")) return;

  const footerBox = document.createElement("footer");
  footerBox.className = "site-footer-box collapsed";

  footerBox.innerHTML = `
    <div class="footer-header">
      <span>Innovation Club Portal</span>
      <button class="footer-toggle">▲</button>
    </div>
    <div class="footer-content">
      <div class="footer-section">
        <h4>Social Links</h4>
        <a href="https://github.com/innovation-club" target="_blank">GitHub</a> |
        <a href="/underdev.html" target="_blank">X</a> |
        <a href="/underdev.html" target="_blank">Instagram</a>
      </div>
      <div class="footer-section">
        <h4>How to Use</h4>
        <a href="howtouse.html">Usage Instructions</a>
      </div>
      <div class="footer-section">
        <h4>Rules</h4>
        <a href="rules.html">View Rules</a>
      </div>
      <div class="footer-section">
        <h4>Resources</h4>
        <a href="/feedback.html">Feedback Page</a> |
        <a href="/releasenotes.html">Release Notes</a>
      </div>
    </div>
  `;

  document.body.appendChild(footerBox);

  // Toggle collapsed/expanded
  const toggleBtn = footerBox.querySelector(".footer-toggle");
  toggleBtn.addEventListener("click", () => {
    footerBox.classList.toggle("collapsed");
    toggleBtn.textContent = footerBox.classList.contains("collapsed") ? "▲" : "▼";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // apply saved theme
  const savedTheme = loadTheme();
  if (savedTheme) setTheme(savedTheme);

  injectFooter(); // inject footer AFTER DOM ready
});

*/


// ============================
// DOM Ready
// ============================
document.addEventListener("DOMContentLoaded", () => {
  // --- Apply saved theme ---
  const savedTheme = loadTheme();
  if (savedTheme) {
    setTheme(savedTheme);
  }


  // --- Make watermark clickable ---
  const watermark = document.querySelector(".watermark");
  if (watermark) {
    watermark.style.cursor = "pointer";
    watermark.addEventListener("click", () => {
      window.location.href = "https://innovationclubvotingwebsite.netlify.app/";
    });
  }

  // --- Add spinner if not present ---
  let spinner = document.getElementById("spinner");
  if (!spinner) {
    spinner = document.createElement("div");
    spinner.id = "spinner";
    document.body.appendChild(spinner);
  }

  // --- Spinner on button clicks ---
  document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      spinner.style.display = "block";
      setTimeout(() => {
        spinner.style.display = "none";
      }, 2000);
    });
  });

  // --- Footer box injection with collapsible toggle ---
});
