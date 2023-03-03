// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      // googleFormUrl: process.env.GOOGLE_FORM_URL,
      // formsparkEndpoint: process.env.FORMSPARK_ENDPOINT,
      // uploadcarePublicKey: process.env.UPLOADCARE_PUBLIC_KEY,
      waNo: process.env.WA_NO,
      waUrl: process.env.WA_URL,
      emailAddress: process.env.EMAIL_ADDRESS,
      igUrl: process.env.IG_URL,
      youtubeUrl: process.env.YOUTUBE_URL,
      youtubeWorkshopIdUrl: process.env.YOUTUBE_WORKSHOP_ID,
      googleBusinessUrl: process.env.GOOGLE_BUSINESS_URL,
      // biteshipToken: process.env.BITESHIP_TOKEN,
      // cibeunyingKaler: process.env.CIBEUNYING_KALER,
      // fullOrderUntilDate: process.env.FULL_ORDER_UNTIL_DATE,
      // closeOrderUntilDate: process.env.CLOSE_ORDER_UNTIL_DATE,
    },
  },

  css: ["@/assets/css/style.scss"],

  modules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.STORYBLOK_API_KEY,
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
