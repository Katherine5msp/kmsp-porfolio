/**
 * KMSP Portfolio
 * Accessible light/dark theme toggle.
 */

const themeToggle = document.querySelector("#theme-toggle");
const root = document.documentElement;
const themeStorageKey = "kmsp-portfolio-theme";

function getInitialTheme() {
  const savedTheme = localStorage.getItem(themeStorageKey);

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme) {
  root.dataset.theme = theme;

  if (themeToggle) {
    const isDark = theme === "dark";

    themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute(
      "aria-label",
      isDark ? "Switch to light theme" : "Switch to dark theme"
    );
  }
}

const initialTheme = getInitialTheme();
applyTheme(initialTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = root.dataset.theme || "light";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    applyTheme(nextTheme);
    localStorage.setItem(themeStorageKey, nextTheme);
  });
}
