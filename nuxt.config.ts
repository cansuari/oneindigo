// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  css: ["~/assets/scss/main.scss"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@vite-pwa/nuxt",
    "nuxt-icon",
  ],
  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "Oneindigo One Page Nuxt.js Template",
      short_name: "Oneindigo",
      description:
        "The Oneindigo is a Nuxt.js 3 and Vue.js 3 based Progressive Web Application with Tailwindcss Framework.",
      theme_color: "#4f46e5",
      icons: [
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
    },
    workbox: {
      maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // Example: 5 MB
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: "module",
    },
  },
  // Google Fonts
  googleFonts: {
    display: "swap",
    prefetch: true,
    preconnect: true,
    families: {
      Raleway: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
    inject: true,
    base64: true,
    download: true,
    overwriting: false,
  },
  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true,
  },
  vite: {
    resolve: {
      preserveSymlinks: true,
    },
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
});
