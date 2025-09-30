// ========== THEME CONTROLLER ==========
// Handles theme switching (light/dark)

const ThemeController = {
  init() {
    const toggleBtn = document.getElementById("theme-toggle");
    if (!toggleBtn) return;

    const currentTheme = localStorage.getItem("theme") || "light";
    document.body.dataset.theme = currentTheme;

    toggleBtn.addEventListener("click", () => {
      const newTheme = document.body.dataset.theme === "light" ? "dark" : "light";
      document.body.dataset.theme = newTheme;
      localStorage.setItem("theme", newTheme);
    });
  },
};

export default ThemeController;
