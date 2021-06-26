export default async () => {
  const siteConfig = await import(
    './' + (process.env.SITE_CONFIG_DIR || 'sample_config')
  )
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
    modules: ['@nuxt/content', '~/modules/seo'],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    tailwindcss: {
      jit: true,
      // add '~tailwind.config` alias
      exposeConfig: true,
    },

    colorMode: {
      classSuffix: '',
    },

    content: {
      dir: process.env.CONTENT_DIR || 'sample_content',
    },

    seo: siteConfig.seo,

    server: {
      port: 3123, // default: 3000
      host: '0.0.0.0', // default: localhost
    },
  }
}
