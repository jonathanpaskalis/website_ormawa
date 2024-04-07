// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    '**' : { 
      prerender: true,
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/scss/global.scss'],
  nitro: {
    firebase: {
      gen: 2,
      httpsOptions: {
        region: 'asia-southeast2',
      },
    },
    publicAssets: [
      {
        baseURL: 'images',
        dir: 'public/images',
        maxAge: 60*60*24*7,
      },
    ],
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/profile',
        '/program',
        '/program/[period]/[slug]',
        '/contact-us',
        '/election',
      ]
    }
  },
  modules: ['vue3-carousel-nuxt', '@nuxtjs/robots', "@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public: {
      FB_API_KEY: process.env.FB_API_KEY,
      FB_AUTH_DOMAIN: process.env.FB_AUTH_DOMAIN,
      FB_PROJECT_ID: process.env.FB_PROJECT_ID,
      FB_STORAGE_BUCKET: process.env.FB_STORAGE_BUCKET,
      FB_MESSAGING_SENDER_ID: process.env.FB_MESSAGING_SENDER_ID,
      FB_APP_ID: process.env.FB_APP_ID,
      FB_MEASUREMENT_ID: process.env.FB_MEASUREMENT_ID,
    },
  },
})