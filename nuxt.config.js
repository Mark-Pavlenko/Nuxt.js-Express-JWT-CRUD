export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-with-express',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios', // enables Nuxt Axios module
    '@nuxtjs/auth-next', // enables Nuxt Auth module
  ],
  auth: {
      strategies: {
        local: {
          endpoints: {
            // these are the API endpoints we created in Express
            login: {
              url: '/api/users/login',
              method: 'post',
              propertyName: 'token'
            },
            logout: true,
            user: {
              url: '/api/users/user',
              method: 'get',
              propertyName: 'user'
            }
          },
          tokenRequired: true,
          tokenType: "Bearer"
        }
      },
      redirect: {
        login: '/user/login', // User will be redirected to this path if login is required
        logout: '/', // User will be redirected to this path if after logout, current route is protected
        home: '/' // User will be redirect to this path after login if accessed login page directly
      },
      rewriteRedirects: true,

  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  serverMiddleware: [
    '~/api/index.js'
  ]
}
