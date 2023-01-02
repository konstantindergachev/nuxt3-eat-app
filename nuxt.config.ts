// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  css: ['@/assets/css/main.css'],
  app: {
    head: {
      title: 'EatApp',
      meta: [{ name: 'description', content: 'Everything about EatApp' }],
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
});
