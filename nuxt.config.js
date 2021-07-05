import createFeed from './lib/feed'
import siteConfig from '../config'

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

    dir: {
      assets: 'assets',
      static: '../static',
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],
    // css: ['~/assets/css/tailwind.css'],

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
      '@nuxtjs/svg',
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
      cssPath: '~/assets/css/tailwind.css',
      // add '~tailwind.config` alias
      exposeConfig: true,
    },

    colorMode: {
      classSuffix: '',
    },

    content: {
      dir: '../content',
      liveEdit: false,
      markdown: {
        prism: {
          theme: 'prism-themes/themes/prism-material-oceanic.css',
        },
      },
    },

    generate: {
      dir: '../dist',
    },

    seo: siteConfig.seo,

    sitemap: {
      hostname: `${siteConfig.baseUrl}`,
      gzip: true,
      exclude: ['/404'],
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
      port: 3000, // default: 3000
      host: '0.0.0.0', // default: localhost
    },
  }
}
