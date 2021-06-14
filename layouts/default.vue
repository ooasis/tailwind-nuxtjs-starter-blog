<template>
  <div class="antialiased text-black bg-white dark:bg-gray-900 dark:text-white">
    <div class="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
      <div class="flex flex-col justify-between h-screen">
        <header class="flex items-center justify-between py-10">
          <div>
            <a href="/" :aria-label="site.title">
              <div class="flex items-center justify-between">
                <div class="mr-3"></div>
                <div class="hidden h-6 text-2xl font-semibold sm:block">
                  {{ site.title }}
                </div>
              </div>
            </a>
          </div>
          <div class="flex items-center text-base leading-5">
            <div
              v-for="link in links"
              :key="link.title"
              class="hidden sm:block"
            >
              <a
                :key="link.title"
                :href="link.href"
                class="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
              >
                {{ link.title }}
              </a>
            </div>
          </div>
        </header>
        <main class="mb-auto">
          <Nuxt />
        </main>
        <footer>
          <div class="flex flex-col items-center mt-16">
            <div class="flex mb-3 space-x-4"></div>
            <div
              class="
                flex
                mb-2
                space-x-2
                text-sm text-gray-500
                dark:text-gray-400
              "
            >
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
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      site: {
        title: 'Small Talks',
        author: 'Small Talks',
      },
      links: [
        {
          title: 'Blog',
          href: '/blog',
        },
        {
          title: 'Tags',
          href: '/tags',
        },
        {
          title: 'About',
          href: '/about',
        },
      ],
    }
  },
})
</script>
