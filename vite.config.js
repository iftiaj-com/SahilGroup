import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                contact: resolve(__dirname, 'contact.html'),
                dyeing: resolve(__dirname, 'dyeing.html'),
                finishing: resolve(__dirname, 'finishing.html'),
                gallery: resolve(__dirname, 'gallery.html'),
                knitting: resolve(__dirname, 'knitting.html'),
            },
        },
    },
});
