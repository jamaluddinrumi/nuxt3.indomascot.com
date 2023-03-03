// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {},
  },

  css: ["@/assets/css/style.scss"],

  modules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.PUBLIC_STORYBLOK_API_KEY,
        cacheProvider: "memory",
      },
    ],
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxtjs/device",
    "nuxt-icon",
  ],

  device: {
    refreshOnResize: true,
  },

  i18n: {
    locales: [
      {
        name: "Indonesian",
        code: "id",
        iso: "id-ID",
        file: "id-ID.js",
      },
      {
        name: "English",
        code: "en",
        iso: "en-US",
        file: "en-US.js",
      },
    ],
    detectBrowserLanguage: false,
    langDir: "locales",
    defaultLocale: "id",
    strategy: "prefix_except_default",
    vueI18n: {
      fallbackLocale: "id",
    },
    baseUrl: "https://www.indomascot.com",
  },
});
