// ========== MAIN JS ==========
// App entry point - initializes controllers

import UIController from "../controller/uiController.js";
import ThemeController from "../controller/themeController.js";

document.addEventListener("DOMContentLoaded", async () => {
  await UIController.init();
  ThemeController.init();
});
