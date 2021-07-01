import createFeed from './lib/feed'
import siteConfig from './mysite/config'

export default () => {
  return {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
      htmlAttrs: {
        lang: siteConfig.lang,
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },

    target: 'static',

    env: {
      MY_SITE: process.env.MY_SITE,
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['~/plugins/siteutils.js'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
      // https://go.nuxtjs.dev/typescript
      '@nuxt/typescript-build',
      // https://go.nuxtjs.dev/stylelint
      '@nuxtjs/stylelint-module',
      // https://go.nuxtjs.dev/tailwindcss
      '@nuxtjs/tailwindcss',
      // https://color-mode.nuxtjs.org/
      '@nuxtjs/color-mode',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
      '@nuxt/content',
      '@nuxtjs/sitemap',
      '@nuxtjs/feed',
      '~/modules/seo',
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
      extend(config, ctx) {
        if (ctx.isDev) {
          config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
        }
        // this is not necessary any more
        // config.module.rules.push({
        //   test: /\.md$/i,
        //   loader: 'ignore-loader',
        // })
      },
    },

    tailwindcss: {
      // jit: true,
      // add '~tailwind.config` alias
      exposeConfig: true,
    },

    colorMode: {
      classSuffix: '',
    },

    content: {
      dir: `${process.env.MY_SITE || 'sample'}/content`,
    },

    generate: {
      dir: `${process.env.MY_SITE || 'sample'}/dist`,
    },

    seo: siteConfig.seo,

    sitemap: {
      hostname: 'http://192.168.4.26:3123',
      gzip: true,
      exclude: ['/about'],
    },

    feed: [
      {
        path: '/feed.xml', // The route to your feed.
        create: createFeed,
        cacheTime: 1000 * 60 * 15, // How long should the feed be cached
        type: 'rss2', // Can be: rss2, atom1, json1
        data: siteConfig,
      },
    ],

    server: {
      port: 3123, // default: 3000
      host: '0.0.0.0', // default: localhost
    },
  }
}
