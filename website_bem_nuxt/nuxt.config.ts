// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/global.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxtjs/google-fonts',
    'vue3-carousel-nuxt',
  ],
  googleFonts: {
    families: {
      "Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200": true,
    }
  },
  nitro: {
    firebase: {
      gen: 2,
      httpsOptions: {
        region: 'asia-southeast2',
      }
    },
    preset: 'firebase',
  },
  vite: {
    define: {
      'process.env': {
        PASSWORD: JSON.stringify(process.env.PASSWORD),
        FB_API_KEY: JSON.stringify(process.env.FB_API_KEY),
        FB_AUTH_DOMAIN: JSON.stringify(process.env.FB_AUTH_DOMAIN),
        FB_PROJECT_ID: JSON.stringify(process.env.FB_PROJECT_ID),
        FB_STORAGE_BUCKET: JSON.stringify(process.env.FB_STORAGE_BUCKET),
        FB_MESSAGING_SENDER_ID: JSON.stringify(process.env.FB_MESSAGING_SENDER_ID),
        FB_APP_ID: JSON.stringify(process.env.FB_APP_ID),
        FB_MEASUREMENT_ID: JSON.stringify(process.env.FB_MEASUREMENT_ID),
      }
    }
  }
})