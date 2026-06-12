# Sahil Group Website

A modern, responsive, and performance-optimized website for Sahil Group, built with **Vite** and **Vanilla JavaScript** (using native Web Components).

---

## 🛠️ Local Development Setup

Follow these steps to run the website locally on your computer:

### Prerequisite
Make sure you have [Node.js](https://nodejs.org/) installed (LTS version recommended).

### 1. Install Dependencies
Navigate to the project root directory and install the required npm packages:
```bash
npm install
```

### 2. Run the Development Server
Start the local development server with hot reload:
```bash
npm run dev
```
Once started, open your browser and navigate to the address shown in the terminal (usually `http://localhost:5173`).

---

## 🚀 Building for Production

To generate optimized, minified static files for production deployment:

```bash
npm run build
```
This will create a `dist/` directory containing all your production-ready HTML, CSS, JavaScript, and asset files.

---

## 📂 Project Structure

* `src/components/` - Reusable HTML/JS Web Components (like `<app-header>` and `<app-footer>`).
* `src/style.css` - Global Vanilla CSS stylesheet.
* `public/` - Static assets, images, and configuration files (including Cloudflare Worker scripts).
* `index.html` - Homepage.
* `about.html`, `contact.html`, `dyeing.html`, `knitting.html`, `finishing.html`, `gallery.html` - Service and content pages.
