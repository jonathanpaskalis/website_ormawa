// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    '**' : { prerender: true }
  },
  devtools: { enabled: true },
  css: ['~/assets/scss/global.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['vue3-carousel-nuxt', "@nuxt/image"],
  nitro: {
    firebase: {
      gen: 2,
      httpsOptions: {
        region: 'asia-southeast2',
      }
    },
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/profile',
        '/program',
        '/contact-us',
        '/election',
      ]
    }
  },
  runtimeConfig: {
    FB_TYPE: process.env.FB_TYPE,
    FB_PRIVATE_KEY_ID: process.env.FB_PRIVATE_KEY_ID,
    FB_PRIVATE_KEY: process.env.FB_PRIVATE_KEY,
    FB_CLIENT_EMAIL: process.env.FB_CLIENT_EMAIL,
    FB_CLIENT_ID: process.env.FB_CLIENT_ID,
    FB_AUTH_URI: process.env.FB_AUTH_URI,
    FB_TOKEN_URI: process.env.FB_TOKEN_URI,
    FB_AUTH_PROVIDER_X509_CERT_URL: process.env.FB_AUTH_PROVIDER_X509_CERT_URL,
    FB_CLIENT_X509_CERT_URL: process.env.FB_PRIVATE_KEY_ID,
    FB_UNIVERSE_DOMAIN: process.env.FB_UNIVERSE_DOMAIN,
    public: {
      PASSWORD: process.env.PASSWORD,
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