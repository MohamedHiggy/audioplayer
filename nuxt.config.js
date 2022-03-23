export default {
  ssr: false,
  head: {
    title: 'players',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'players' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: ["~assets/scss/main.scss"],


  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  modules: [
    'bootstrap-vue/nuxt'
  ],

  bootstrapVue: {
    bootstrapVueCSS: false
  },

  build: {
    babel: {
      compact: true,
    },
  },


  router: {
    prefetchLinks: false
  },

  loading: {
    color: '#2a6592',
    height: '2px',
    continuous: true
  }
}
