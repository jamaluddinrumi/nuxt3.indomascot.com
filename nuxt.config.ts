// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {},
  },

  css: ["@/assets/css/style.scss"],

  modules: [
    "@storyblok/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxtjs/device",
    "nuxt-icon",
    "@nuxt/image-edge",
    "@vueuse/nuxt",
    "@vueuse/motion/nuxt",
  ],

  image: {
    storyblok: {
      baseURL: "https://a.storyblok.com",
    },
  },

  storyblok: {
    accessToken: process.env.STORYBLOK_API_KEY,
  },

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
      legacy: false,
      fallbackLocale: "id",
    },
    baseUrl: "https://www.indomascot.com",
  },
});
