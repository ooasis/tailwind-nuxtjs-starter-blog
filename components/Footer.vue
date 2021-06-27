<template>
  <footer>
    <div class="flex flex-col items-center mt-16">
      <div class="flex mb-3 space-x-4"></div>
      <div class="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <div>{{ $site.author }}</div>
        <div>{{ ` • ` }}</div>
        <div>{{ `© ${new Date().getFullYear()}` }}</div>
      </div>
      <div
        v-if="platform"
        class="mb-8 text-sm text-gray-500 dark:text-gray-400"
      >
        Powered by:
        <a href="https://github.com/smalltalk/tailwind-nuxtjs-starter-blog">
          tailwind-nuxtjs-starter-blog
        </a>
        [ Inspired by
        <a href="https://github.com/timlrx/tailwind-nextjs-starter-blog"
          >tailwind-nextjs-starter-blog</a
        >
        ]
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
}
</script>
