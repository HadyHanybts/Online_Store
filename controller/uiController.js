// ========== UI CONTROLLER ==========
// Loads reusable HTML components (header, footer, etc.) dynamically

const UIController = {
  async loadComponent(targetId, filePath) {
    const container = document.getElementById(targetId);
    if (!container) return;

    try {
      const response = await fetch(filePath);
      const html = await response.text();
      container.innerHTML = html;
    } catch (err) {
      console.error(`Failed to load component ${filePath}:`, err);
    }
  },

  async init() {
    await this.loadComponent("header", "../html/components/header.html");
    await this.loadComponent("footer", "../html/components/footer.html");

    // Add dynamic year in footer
    const yearSpan = document.getElementById("year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  },
};

export default UIController;
