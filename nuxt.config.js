module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'vue-nuxt-template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui' },
      { hid: 'screen-orientation', name: 'screen-orientation', content: 'portrait' },
      { hid: 'apple-mobile-web-app-capable', name: 'apple-mobile-web-app-capable', content: 'yes' },
      { hid: 'format-detection', name: 'format-detection', content: 'telephone=no' },
      { hid: 'full-screen', name: 'full-screen', content: 'yes' },
      { hid: 'x5-fullscreen', name: 'x5-fullscreen', content: 'true' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TweenMax.min.js' }
    ],
  },
  /*
  ** global css
  */
  css: [
    '~/css/main.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    // 避免多页面引用时打包多次
    vendor: ['axios', '~/plugins/vue-notifications'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  // ssr标明脚本库是想在服务端使用，还是想在客户端使用
  plugins: [
    { src: '~/plugins/vue-notifications', ssr: false }
  ]
}
