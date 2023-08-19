export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify'],
  },

  components: false,

  sourcemap: {
    server: false,
    client: false,
  },

  runtimeConfig: {
    openAIApiKey: process.env.OPEN_AI_API_KEY,
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
});
