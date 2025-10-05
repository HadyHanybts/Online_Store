online-store-template/
├── index.html          # Main entry point (homepage)
├── README.md           # Instructions for reuse
├── html/               # Additional HTML pages
│   ├── products.html   # Product listing page
│   ├── cart.html       # Shopping cart page
│   ├── checkout.html   # Checkout page
│   └── about.html      # About page
├── css/                # Styles
│   ├── main.css        # Global styles (resets, typography)
│   ├── layout.css      # Page layouts
│   ├── components.css  # Component-specific styles
│   └── theme.css       # Customizable variables
├── js/                 # General scripts
│   ├── utils.js        # Helper functions
│   └── app.js          # Main app initialization
├── controllers/        # Feature-specific logic
│   ├── cartController.js     # Cart logic (stub)
│   ├── productController.js  # Product logic (stub)
│   ├── userController.js     # User logic (stub)
│   └── searchController.js   # Search logic (stub)
└── assets/             # Static files
    ├── images/         # Placeholder images
    │   └── placeholder.jpg
    ├── fonts/          # Empty for now
    └── data/           # Mock data
        └── products.json

Homepage: Displays featured products, navigation, and a hero section. Reusable components: Hero banner, product carousel/slider.
Product Listing Page: Shows a grid/list of products with filters/sorting. Reusable components: Product card, filter sidebar.
Product Details Page: Detailed view of a single product with add-to-cart button. Reusable components: Product info block, related products section.
Shopping Cart Page: Lists added items, allows quantity changes/removals, shows totals. Reusable components: Cart item row, summary box.
Checkout Page: Basic form for shipping/payment info (simulated, no real processing). Reusable components: Form fields, address input.
Additional General Features: Search bar, user login modal (simulated), footer with links. These will be components that can be included anywhere.