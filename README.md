# Online_Store

project-root/
│
├── html/
│ ├── index.html ← Home page
│ ├── product-list.html ← All products
│ ├── product-details.html ← Product details
│ ├── cart.html
│ ├── checkout.html
│ ├── about.html
│ ├── contact.html
│ │
│ └── components/ ← HTML partials (never edited per project)
│ ├── header.html
│ ├── footer.html
│ ├── product-card.html
│ ├── banner.html
│ ├── modal.html
│ ├── button.html
│ ├── input.html
│ └── alert.html
│
├── css/
│ ├── main.css ← imports all CSS files
│ ├── layout.css ← grid, sections, container, responsiveness
│ ├── components.css ← styles for all reusable components
│ ├── pages/ ← optional per-page overrides
│ │ ├── home.css
│ │ ├── product-details.css
│ │ └── cart.css
│ └── utils/
│ ├── variables.css ← all colors, fonts, sizes, shadows, etc.
│ ├── animations.css ← fade-in, slide, transitions
│ ├── reset.css ← normalize browser defaults
│ ├── themes/ ← each brand theme here
│ │ ├── default.css
│ │ ├── dark.css
│ │ ├── brand1.css
│ │ └── brand2.css
│ └── helpers.css ← reusable utility classes (e.g., .flex, .hidden)
│
├── js/
│ ├── main.js ← initializes the app, loads components, etc.
│ ├── utils.js ← global helper functions
│ ├── components/ ← logic for reusable components
│ │ ├── header.js
│ │ ├── productCard.js
│ │ ├── modal.js
│ │ ├── alert.js
│ │ ├── carousel.js
│ │ └── formValidation.js
│ ├── pages/ ← logic specific to pages
│ │ ├── homeController.js
│ │ ├── productDetailsController.js
│ │ ├── cartController.js
│ │ └── checkoutController.js
│ └── api/ ← simulated APIs or data fetch logic
│ ├── productService.js
│ ├── categoryService.js
│ └── userService.js
│
├── controller/ ← business logic layer (pure JS)
│ ├── productController.js ← fetch, filter, sort, etc.
│ ├── cartController.js ← add/remove items, calculate totals
│ ├── userController.js ← login/logout handling
│ ├── themeController.js ← change colors/themes dynamically
│ ├── uiController.js ← load HTML components dynamically
│ └── dataController.js ← central access to JSON/API data
│
├── assets/
│ ├── images/
│ │ ├── products/
│ │ ├── banners/
│ │ └── icons/
│ ├── fonts/
│ └── data/
│ ├── products.json
│ ├── categories.json
│ └── users.json
│
└── README.md ← documentation for reuse and structure
