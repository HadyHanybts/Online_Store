/* Controller for product logic */
import { select, formatPrice } from '../js/utils.js';

export function initProductController() {
    const basePath = window.location.pathname.includes('/html/') ? '../../assets/data/products.json' : '../assets/data/products.json';
    const imageBasePath = window.location.pathname.includes('/html/') ? '../' : '';
    
    fetch(basePath)
        .then(response => {
            if (!response.ok) throw new Error('Failed to fetch products');
            return response.json();
        })
        .then(products => {
            const grid = select('#product-grid');
            if (!grid) {
                console.error('Product grid element not found');
                return;
            }
            grid.innerHTML = products.map(product => `
                <div class="product-card">
                    <img src="${imageBasePath}${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p class="price">${formatPrice(product.price)}</p>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            `).join('');
        })
        .catch(error => console.error('Error loading products:', error));
}