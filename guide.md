# Sahil Group Website

A modern, responsive, and performance-optimized website for Sahil Group, built with **Vite** and **Vanilla JavaScript** (Web Components).

## 🚀 Features

-   **Modular Architecture**: Built using native Web Components (`<app-header>`, `<app-footer>`) for reusability.
-   **Vite Powered**: Ultra-fast development server and optimized build process.
-   **Cloudflare Ready**: configured for static site deployment on Cloudflare Pages.
-   **Performance Optimized**: Minified CSS/JS and optimized assets.

## 🛠️ Project Setup

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Run Development Server**
    Start the local development server with hot reload:
    ```bash
    npm run dev
    ```
    Access the site at `http://localhost:5173`.

3.  **Build for Production**
    Generate the production-ready static files in the `dist/` folder:
    ```bash
    npm run build
    ```

## ☁️ Deployment Guide (Cloudflare Pages)

This project is tailored for **Cloudflare Pages**. Follow these steps to host it for free.

### Option 1: Direct Upload (Simplest)
1.  Run `npm run build` in your terminal. This creates a `dist` folder.
2.  Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Pages**.
3.  Click **Create a project** > **Direct Upload**.
4.  Drag and drop the entire `dist` folder.
5.  Click **Deploy Site**.

### Option 2: Git Integration (Recommended for Updates)
1.  Push this project to a GitHub/GitLab repository.
2.  Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Pages**.
3.  Click **Create a project** > **Connect to Git**.
4.  Select your repository.
5.  **Build Settings**:
    *   **Framework Preset**: Select `Vite` (or `None`).
    *   **Build Command**: `npm run build`
    *   **Output Directory**: `dist`
6.  Click **Save and Deploy**.

Cloudflare will now automatically rebuild and deploy your site whenever you push changes to the repository.
