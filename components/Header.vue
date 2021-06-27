<template>
  <header class="flex items-center justify-between py-10">
    <div>
      <NuxtLink to="/" :aria-label="$site.title">
        <div class="flex items-center justify-between">
          <div class="mr-3"></div>
          <div class="hidden h-6 text-2xl font-semibold sm:block">
            {{ $site.title }}
          </div>
        </div>
      </NuxtLink>
    </div>
    <div class="flex items-center text-base leading-5">
      <div v-for="link in links" :key="link.title" class="hidden sm:block">
        <NuxtLink
          :key="link.title"
          :to="link.href"
          class="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
        >
          {{ link.title }}
        </NuxtLink>
      </div>
    </div>
    <mobile-nav />
  </header>
</template>
<script>
export default {
  data() {
    return {
      links: [
        {
          title: 'Blog',
          href: '/blogs',
        },
        {
          title: 'Tag',
          href: '/tags',
        },
        {
          title: 'Timeline',
          href: '/timelines',
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
