<template>
  <footer>
    <div class="flex flex-col items-center mt-16">
      <div class="flex mb-3 space-x-4"></div>
      <div class="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <div>{{ site.author }}</div>
        <div>{{ ` • ` }}</div>
        <div>{{ `© ${new Date().getFullYear()}` }}</div>
      </div>
      <div class="mb-8 text-sm text-gray-500 dark:text-gray-400">
        Powered by:
        <a href="https://github.com/hsun-cnnxty/nuxtjs-starter-blog">
          NuxtJS Starter Blog
        </a>
      </div>
    </div>
  </footer>
</template>
<script>
import site from '../config/site.config'

export default {
  data() {
    return {
      site,
    }
  },
}
</script>
