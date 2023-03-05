// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    indexable: true,
    siteUrl: process.env.PUBLIC_BASE_URL,
    public: {
      trailingSlash: true,
      siteName: "INDOMASCOT",
      siteDescription:
        "INDOMASCOT melayani pembuatan kostum badut maskot untuk branding produk atau instansi anda dengan desain dari anda sendiri. (WA 0822-2155-6633)",
      language: "id",
    },
  },

  css: ["@/assets/css/style.scss"],

  extends: ["nuxt-seo-kit"],

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

  schemaOrg: {
    host: process.env.PUBLIC_BASE_URL,
  },

  robots: {
    sitemap: process.env.PUBLIC_SITEMAP_PATH,
  },

  linkChecker: {
    failOn404: false,
  },

  image: {
    storyblok: {
      baseURL: "https://a.storyblok.com",
    },
  },

  storyblok: {
    accessToken: process.env.STORYBLOK_API_KEY,
    apiOptions: {
      timeout: 60,
    },
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
