
/**
 * KMSP Portfolio
 * Theme toggle functionality
 */

const themeToggle = document.querySelector("#theme-toggle");
const root = document.documentElement;

const THEME_STORAGE_KEY = "kmsp-portfolio-theme";

/**
 * Determine the initial theme.
 * A previously saved preference takes priority.
 * Otherwise, use the operating system preference.
 */
function getInitialTheme() {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * Apply the selected theme and update accessibility attributes.
 */
function applyTheme(theme) {
  root.dataset.theme = theme;

  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(theme === "dark"));

    themeToggle.setAttribute(
      "aria-label",
      theme === "dark"
        ? "Switch to light theme"
        : "Switch to dark theme"
    );
  }
}

/**
 * Initialize the theme.
 */
const initialTheme = getInitialTheme();
applyTheme(initialTheme);

/**
 * Toggle between light and dark themes.
 */
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = root.dataset.theme;
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    applyTheme(newTheme);
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
  });
}
