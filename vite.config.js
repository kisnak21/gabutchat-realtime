import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [
      react(),
      VitePWA({
         includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
         manifest: {
            name: 'Gabut Chat App',
            short_name: 'GabutApp',
            description: 'An awesome online group chat',
            theme_color: '#ffffff',
            icons: [
              {
                src: 'icon-72x72.png',
                sizes: '72x72',
                type: 'image/png',
                purpose: 'maskable any'
              },
              {
                src: 'icon-96x96.png',
                sizes: '96x96',
                type: 'image/png',
                purpose: 'maskable any'
              },
              {
                src: 'icon-128x128.png',
                sizes: '128x128',
                type: 'image/png',
                purpose: 'maskable any'
              },
              {
                src: 'icon-144x144.png',
                sizes: '144x144',
                type: 'image/png',
                purpose: 'maskable any'
              },
              {
                src: 'icon-152x152.png',
                sizes: '152x152',
                type: 'image/png',
                purpose: 'maskable any'
              },
              {
                src: 'icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable any'
              },
              {
                src: 'icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable any'
              }
            ]
          },
         registerType: 'autoUpdate',
         workbox: {
           clientsClaim: true,
           skipWaiting: true,
           globPatterns: ['**/*.{js,css,html,ico,png,svg}']
         },
         devOptions: {
            enabled: true
          },
         injectRegister: 'auto'
       }),
       
   ],
});
