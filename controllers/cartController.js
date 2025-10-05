/* Controller for cart logic */
import { select, formatPrice } from "../js/utils.js";

export function initCartController() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function updateCartDisplay() {
    const cartPage = select("#cart-items");
    const basePath = window.location.pathname.includes("/html/") ? "../" : "";
    if (cartPage) {
      cartPage.innerHTML = cart.length
        ? cart
            .map(
              (item) => `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${basePath}${item.image}" alt="${item.name}">
                    <span>${item.name}</span>
                    <span>${formatPrice(item.price)}</span>
                    <div class="quantity">
                        <button class="decrease">-</button>
                        <span>${item.quantity}</span>
                        <button class="increase">+</button>
                    </div>
                </div>
            `
            )
            .join("")
        : "<p>No items in cart</p>";
    }
    select(".cart-icon").textContent = `Cart (${cart.reduce(
      (sum, item) => sum + item.quantity,
      0
    )})`;
  }

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
      const id = parseInt(e.target.dataset.id);
      const basePath = window.location.pathname.includes("/html/")
        ? "../../assets/data/products.json"
        : "../assets/data/products.json";
      fetch(basePath)
        .then((response) => {
          if (!response.ok) throw new Error("Failed to fetch products");
          return response.json();
        })
        .then((products) => {
          const product = products.find((p) => p.id === id);
          const cartItem = cart.find((item) => item.id === id);
          if (cartItem) {
            cartItem.quantity += 1;
          } else {
            cart.push({ ...product, quantity: 1 });
          }
          localStorage.setItem("cart", JSON.stringify(cart));
          updateCartDisplay();
        })
        .catch((error) => console.error("Error adding to cart:", error));
    }
    if (e.target.classList.contains("increase")) {
      const id = parseInt(e.target.closest(".cart-item").dataset.id);
      const cartItem = cart.find((item) => item.id === id);
      cartItem.quantity += 1;
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartDisplay();
    }
    if (e.target.classList.contains("decrease")) {
      const id = parseInt(e.target.closest(".cart-item").dataset.id);
      const cartItem = cart.find((item) => item.id === id);
      if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
      } else {
        cart = cart.filter((item) => item.id !== id);
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartDisplay();
    }
    if (e.target.classList.contains("clear-cart")) {
      cart = [];
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartDisplay();
    }
  });

  updateCartDisplay();
}
