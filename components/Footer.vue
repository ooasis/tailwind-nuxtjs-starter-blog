<template>
  <footer>
    <div class="flex flex-col items-center mt-16">
      <div class="flex mb-3 space-x-4"></div>
      <div class="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <div>{{ author }}</div>
        <div>{{ ` • ` }}</div>
        <div>{{ `© ${new Date().getFullYear()}` }}</div>
      </div>
      <div
        v-if="platform"
        class="mb-8 text-sm text-gray-500 dark:text-gray-400"
      >
        Powered by:
        <NuxtLink
          to="https://github.com/hsun-cnnxty/tailwind-nuxtjs-starter-blog"
        >
          tailwind-nuxtjs-starter-blog
        </NuxtLink>
        (Inspired by
        <a href="https://github.com/timlrx/tailwind-nextjs-starter-blog"
          >tailwind-nextjs-starter-blog</a
        >)
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    platform: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    return {
      author: null,
    }
  },
  // async fetch() {
  //   const siteConfig = await import(
  //     '../' + (process.env.SITE_CONFIG_DIR || 'sample_config')
  //   )
  //   this.author = siteConfig.author
  // },
}
</script>
