export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css', '/assets/css/global.css'],
  build: {
    transpile: ['vuetify'],
  },

  sourcemap: {
    server: false,
    client: false,
  },

  runtimeConfig: {
    openAIApiKey: process.env.OPEN_AI_API_KEY,
    public: {
      tinymceAPiKey: process.env.TINYMCE_API_KEY,
    },
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
});
