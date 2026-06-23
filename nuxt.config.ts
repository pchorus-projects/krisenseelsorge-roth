// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['~/assets/styles/styles.scss'],
  devtools: { enabled: true },
  fonts: {
    defaults: {
      weights: [400, 700],
      styles: ['normal', 'italic'],
    },
  },
  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxt/image'],
});
