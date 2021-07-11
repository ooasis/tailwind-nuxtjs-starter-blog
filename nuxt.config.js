import site from '../config'
import createFeed from './lib/feed'

// process.env.DEBUG = 'nuxt:*'

const isIsso = site.comment && site.comment.isso
const isCommento = site.comment && site.comment.commento

const headScripts = []
if (isIsso) {
  headScripts.push({
    src: `${site.comment.isso}/js/embed.min.js`,
    'data-isso': `${site.comment.isso}/`,
    'data-isso-css': false,
  })
} else if (isCommento) {
  headScripts.push({
    defer: true,
    src: `${site.comment.commento}/js/commento.js`,
    'data-auto-init': false,
    'data-page-id': 'global',
    'data-id-root': 'commentobox',
  })
}

export default () => {
  return {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
      htmlAttrs: {
        lang: site.lang,
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      script: headScripts,
    },

    target: 'static',

    dir: {
      assets: 'assets',
      static: '../static',
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/css/isso.css'],

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

    seo: site.seo,

    sitemap: {
      hostname: `${site.baseUrl}`,
      gzip: true,
      exclude: ['/404'],
    },

    feed: [
      {
        path: '/feed.xml', // The route to your feed.
        create: createFeed,
        cacheTime: 1000 * 60 * 15, // How long should the feed be cached
        type: 'rss2', // Can be: rss2, atom1, json1
        data: site,
      },
    ],

    server: {
      port: 3000, // default: 3000
      host: '0.0.0.0', // default: localhost
    },
  }
}
