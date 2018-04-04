const webpack = require('webpack');

module.exports = {
  css: [
    '~/assets/css/bootstrap.min.css',
    '~/assets/css/agency.min.css',
  ],
  plugins: [
    // { src: '~/assets/js/jquery.min.js', ssr: false },
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: ['jquery']
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700' },
      {
        rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Kaushan+Script'
      },
      {
        rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic'
      },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
   ** Customize app manifest
   */
  manifest: {
    theme_color: '#3B8070'
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa',
  ]
}
