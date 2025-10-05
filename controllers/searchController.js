/* Controller for search logic */
import { select, formatPrice } from '../js/utils.js';

export function initSearchController() {
    const searchBar = select('.search-bar');
    searchBar.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const basePath = window.location.pathname.includes('/html/') ? '../../assets/data/products.json' : '../assets/data/products.json';
        const imageBasePath = window.location.pathname.includes('/html/') ? '../' : '';

        // Check if on cart page
        const isCartPage = window.location.pathname.includes('cart.html');
        const targetElement = isCartPage ? select('#cart-items') : select('#product-grid');

        if (!targetElement) {
            console.error('Target element not found');
            return;
        }

        if (isCartPage) {
            // Filter cart items
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const filteredCart = cart.filter(item => item.name.toLowerCase().includes(query));
            targetElement.innerHTML = filteredCart.length ? filteredCart.map(item => `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${imageBasePath}${item.image}" alt="${item.name}">
                    <span>${item.name}</span>
                    <span>${formatPrice(item.price)}</span>
                    <div class="quantity">
                        <button class="decrease">-</button>
                        <span>${item.quantity}</span>
                        <button class="increase">+</button>
                    </div>
                </div>
            `).join('') : '<p>No items found</p>';
        } else {
            // Filter products
            fetch(basePath)
                .then(response => {
                    if (!response.ok) throw new Error('Failed to fetch products');
                    return response.json();
                })
                .then(products => {
                    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
                    targetElement.innerHTML = filtered.length ? filtered.map(product => `
                        <div class="product-card">
                            <img src="${imageBasePath}${product.image}" alt="${product.name}">
                            <h3>${product.name}</h3>
                            <p class="price">${formatPrice(product.price)}</p>
                            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                        </div>
                    `).join('') : '<p>No items found</p>';
                })
                .catch(error => console.error('Error searching products:', error));
        }
    });
}