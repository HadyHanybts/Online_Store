# 🛍️ E-Commerce Frontend Template

A fully reusable **online store frontend template** built with **HTML, CSS, and JavaScript** — designed to be flexible, modular, and easily customizable for different brands or projects.

---

## 🚀 Project Overview

This project is a **frontend-only e-commerce web application** template.  
It is built with clean architecture and a modular structure so it can be **reused for multiple stores** simply by changing themes, data, or minor components.

The project uses:

- Pure **HTML, CSS, JS** (no frameworks)
- **Controllers** for logic organization
- **Component-based structure** for UI
- **Central theme and variable system** for design control

---

## 🗂️ Folder Structure

# Online_Store

project-root/
│
├── html/ # All HTML files and reusable page components
│ ├── index.html # Home page
│ ├── product-list.html # Page showing all products or category list
│ ├── product-details.html # Single product detail page
│ ├── cart.html # Shopping cart page
│ ├── checkout.html # Checkout page with payment details
│ ├── about.html # About the store or brand
│ ├── contact.html # Contact form / support page
│ │
│ └── components/ # Reusable HTML fragments used in all pages
│ ├── header.html # Navigation bar / logo / cart icon
│ ├── footer.html # Footer section with links and copyright
│ ├── product-card.html # Product card used in grids and lists
│ ├── banner.html # Promotional banner section
│ ├── modal.html # Popup modal window structure
│ ├── button.html # Custom button template
│ ├── input.html # Reusable input field template
│ └── alert.html # Small alert / toast / message box component
│
├── css/ # Styling system (main + utilities + themes)
│ ├── main.css # Main entry CSS file importing all others
│ ├── layout.css # Layout structure (grids, header/footer, spacing)
│ ├── components.css # Shared styles for all components
│ │
│ ├── pages/ # Page-specific styles
│ │ ├── home.css # Homepage layout styles
│ │ ├── product-details.css # Product detail page styles
│ │ └── cart.css # Cart and checkout page styles
│ │
│ └── utils/ # CSS helpers and base files
│ ├── variables.css # All CSS variables (colors, fonts, spacing)
│ ├── animations.css # Keyframe animations and transitions
│ ├── reset.css # CSS reset to ensure consistent base
│ ├── helpers.css # Utility classes (flex, hidden, padding, etc.)
│ │
│ └── themes/ # Ready-made themes (switchable)
│ ├── default.css # Default store theme
│ ├── dark.css # Dark mode theme
│ ├── brand1.css # Example theme for brand #1
│ └── brand2.css # Example theme for brand #2
│
├── js/ # All JavaScript logic (core + components + pages)
│ ├── main.js # Global app initializer
│ ├── utils.js # Helper functions (formatting, DOM handling, etc.)
│ │
│ ├── components/ # Logic for individual UI components
│ │ ├── header.js # Dynamic header behavior (cart count, scroll, etc.)
│ │ ├── productCard.js # Product card creation and interactions
│ │ ├── modal.js # Open/close modal logic
│ │ ├── alert.js # Toast/alert system
│ │ ├── carousel.js # Slideshow or banner carousel logic
│ │ └── formValidation.js # Validation for forms (contact, checkout)
│ │
│ ├── pages/ # Page-specific controllers
│ │ ├── homeController.js # Handles homepage content (banners, featured products)
│ │ ├── productDetailsController.js # Handles single product data and actions
│ │ ├── cartController.js # Adds/removes items and manages totals
│ │ └── checkoutController.js # Validates checkout and handles submission
│ │
│ └── api/ # Simulated or real API data access layer
│ ├── productService.js # Fetch or load product data (JSON/API)
│ ├── categoryService.js # Fetch category data
│ └── userService.js # Handles mock user data (login, register)
│
├── controller/ # Central logic managers (MVC-style controllers)
│ ├── productController.js # Coordinates product data & UI rendering
│ ├── cartController.js # Syncs cart logic between pages and storage
│ ├── userController.js # User authentication and session
│ ├── themeController.js # Controls color themes and theme switching
│ ├── uiController.js # Loads HTML components dynamically
│ └── dataController.js # Central data handler for API/JSON interactions
│
├── assets/ # Static assets (media, fonts, and local data)
│ ├── images/
│ │ ├── products/ # Product images
│ │ ├── banners/ # Promotional banners and homepage slides
│ │ └── icons/ # Icons used across UI
│ │
│ ├── fonts/ # Custom fonts (if used)
│ │
│ └── data/ # Local JSON files acting as mock database
│ ├── products.json # Product list with price, name, image, etc.
│ ├── categories.json # Product categories and filters
│ └── users.json # Example users for login demo
│
└── README.md # Full documentation for setup and structure

markdown
Copy code

---

## ⚙️ Architecture Overview

### 🧩 Components

Reusable HTML blocks for the UI.  
Located in `html/components/`

Each component can have:

- **HTML snippet** — structure
- **CSS styles** — shared in `css/components.css`
- **JS logic** — inside `js/components/`

Examples:

- `header.html`, `footer.html`
- `product-card.html`
- `modal.html`, `alert.html`
- `button.html`, `input.html`

Components are dynamically loaded into pages by the `uiController.js`.

---

### 🎨 Styling System

All styling is controlled through CSS variables in:

`css/utils/variables.css`

This file defines:

- Colors (`--color-primary`, `--color-text`, etc.)
- Fonts (`--font-main`, `--font-alt`)
- Layout variables (spacing, borders, shadows)
- Breakpoints for responsive design

To change the entire look of the store:

- Edit the variables in `variables.css`
- Or switch to another theme file in `css/utils/themes/`

Example themes:

- `default.css`
- `dark.css`
- `brand1.css`
- `brand2.css`

---

### 🧠 Controllers

Each controller handles a specific part of the logic to keep the code modular and clean.

| Controller             | Description                                            |
| ---------------------- | ------------------------------------------------------ |
| `uiController.js`      | Loads and manages reusable HTML components dynamically |
| `productController.js` | Handles product data (fetching, sorting, filtering)    |
| `cartController.js`    | Manages shopping cart operations                       |
| `userController.js`    | Handles login, logout, user session                    |
| `themeController.js`   | Switches color themes dynamically                      |
| `dataController.js`    | Central data access layer for local JSON or APIs       |

---

### 🧰 Utilities

**CSS Utilities (`helpers.css`)**
Reusable utility classes to speed up styling.

Example:

```css
.flex-center { display: flex; justify-content: center; align-items: center; }
.hidden { display: none; }
JavaScript Utilities (utils.js)
General helper functions for formatting, DOM handling, etc.

Example:

formatCurrency(price)

createElement(tag, attributes)

parseQueryParams()

🧾 Data
All sample data for the template lives in:
assets/data/

products.json → product info

categories.json → product categories

users.json → mock login data

Later you can replace these files with real API endpoints without changing your controllers.

🌗 Theme System
Theme logic handled by:
controller/themeController.js

Responsibilities:

Load a theme file dynamically (default, dark, brand1, etc.)

Allow switching themes from UI

Save user’s theme preference in localStorage

🧭 Page Load Flow
Example: Product List Page

The HTML file (product-list.html) loads.

main.js initializes all required controllers.

uiController.js injects shared components (header, footer, etc.).

productController.js fetches products from assets/data/products.json.

productCard.js renders each product dynamically.

themeController.js applies the selected theme.

The page becomes interactive and styled automatically.

🧩 How to Reuse This Template
To use this project for a new online store:

Duplicate the entire project folder.

Change theme:

Edit css/utils/variables.css

Or load another theme file (themes/brandX.css)

Update data:

assets/data/products.json

assets/data/categories.json

Replace images:

Inside assets/images/products/

Update branding:

html/components/header.html

html/components/footer.html

You don’t need to touch the JS logic — everything else will adapt automatically.

🧩 Naming Conventions
Type	Convention	Example
Folders	lowercase with dashes	product-details, product-card
CSS Variables	--kebab-case	--color-primary, --font-main
JS Files	camelCase	themeController.js, productService.js
Functions	camelCase	loadProducts(), switchTheme()
Components	PascalCase	ProductCard, Modal, Header

✅ Future Upgrades
You can easily expand this project with:

LocalStorage persistence for cart and theme

Pagination and advanced product filters

Wishlist, ratings, and reviews

Real API integration

PWA (Progressive Web App) support

Conversion to frameworks (React / Angular / Vue) thanks to modular structure

👨‍💻 Author
Created by: Hady Harb
Project Type: Frontend Web Application Template
Purpose: General reusable online store system for future e-commerce projects
Languages: HTML, CSS, JavaScript
Architecture: Modular MVC-inspired
License: Private / Reusable (custom)

yaml
Copy code

---

Would you like me to now generate the **empty folder and file skeleton (with minimal starter content)** in one zipped structure so you can download and open it directly in VS Code?
It would include all folders, empty files, and basic import paths already connected (like linking `main.css` and `main.js`).

```
