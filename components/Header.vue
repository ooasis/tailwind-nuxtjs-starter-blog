<template>
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
      <div v-for="link in links" :key="link.title" class="hidden sm:block">
        <a
          :key="link.title"
          :href="link.href"
          class="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
        >
          {{ link.title }}
        </a>
      </div>
    </div>
    <mobile-nav />
  </header>
</template>
<script>
import site from '../config/site.config'
import MobileNav from './MobileNav.vue'

export default {
  components: { MobileNav },
  data() {
    return {
      site,
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
}
</script>
