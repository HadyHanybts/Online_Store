/* Utility functions for reusability */
export const select = (selector) => document.querySelector(selector);

export const formatPrice = (price) => `$${price.toFixed(2)}`;