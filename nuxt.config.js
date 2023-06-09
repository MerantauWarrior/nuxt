import colors from 'vuetify/es5/util/colors'

// import axios from 'axios'
// let dynamicRoutes = async () => {
//   let her = await axios.get('https://rickandmortyapi.com/api/character').then(res => {
//     let result = res.data.results.map(i => `heroes/${i.id}`)
//     console.log(result)
//     return result
//   })
//   let eps = await axios.get('https://rickandmortyapi.com/api/episode').then(res => {
//     let result = res.data.results.map(i => `episodes/${i.id}`)
//     console.log(result)
//     return result
//   })
//   console.log(her)
//   console.log(eps)
//   return [...her, ...eps]
// }

export default {
  // target: 'static',
  // generate: {
  //   routes: dynamicRoutes
  // },
  loading: '@/components/LoadingBar.vue',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - demonuxt',
    title: 'Demo Nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/i18n'
  ],

  router: {
    middleware: ['auth']
  },

  auth: {
    strategies: {
      github: {
        clientId: '24ab924c99404374e893',
        clientSecret: '0aa6acee4af9c2db96f5e795abbbf2004ee0d83c'
      },
    }
  },

  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.json',
        name: 'English'
      },
      {
        code: 'ru',
        file: 'ru.json',
        name: 'Русский'
      }
    ],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'en',
    // strategy: 'no_prefix'
    strategy: 'prefix_and_default'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: '/',
    proxy: true,
    retry: {
      retries: 2
    }
  },
  proxy: {
    '/api/v1/': {
      target: 'https://rickandmortyapi.com/api',
      pathRewrite: { '^/api/v1/': '' }
    },
    '/api/v2/': {
      target: 'https://swapi.dev/api/',
      pathRewrite: { '^/api/v2/': '' }
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  // server: {
  //   host: '0.0.0.0'
  // }
}
