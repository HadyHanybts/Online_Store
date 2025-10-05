/* Main app initialization */
import { initProductController } from "../controllers/productController.js";
import { initCartController } from "../controllers/cartController.js";
import { initSearchController } from "../controllers/searchController.js";
import { initUserController } from "../controllers/userController.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Online Store Template Initialized");
  initProductController();
  initCartController();
  initSearchController();
  initUserController();
});
