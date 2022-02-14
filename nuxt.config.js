export default {
  ssr: false,
  head: {
    title: 'audiobook',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'audiobook' }
    ],
    link: [
      //{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: ["~assets/scss/main.scss"],

  plugins: [
    //"~plugins/persistedState.client.js"
  ],

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
    bootstrapVueCSS: {
      componentPlugins: [
        'ToastPlugin',
      ]
    },
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
    color: '#3A9679',
    height: '2px',
    continuous: true
  }
}
