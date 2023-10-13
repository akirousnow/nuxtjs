// https://nuxt.com/docs/api/configuration/nuxt-config
export default  defineNuxtConfig({

  devtools: { enabled: false },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.css'],
  router: {
    base: '/nuxtjs/',
  },

  generate: {
    dir:"docs",
    subFolders: false
  }
})
