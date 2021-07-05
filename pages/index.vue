<template>
  <div>
    <div class="prose dark:prose-dark max-w-none">
      <nuxt-content :document="home" />
    </div>
    <div class="divide-y divide-gray-200 dark:divide-gray-700">
      <page-title title="Latest" />
      <list-view :articles="articles" />
    </div>
    <div class="flex justify-end text-base font-medium leading-6">
      <NuxtLink
        to="/blogs"
        class="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
        aria-label="all posts"
      >
        All Posts &rarr;
      </NuxtLink>
    </div>
  </div>
</template>

<script>
const pageSize = 10

export default {
  async asyncData({ $content }) {
    const home = await $content('page/home').fetch()
    const articles = await $content('blog')
      .only(['title', 'description', 'tags', 'slug', 'updatedAt'])
      .sortBy('updatedAt', 'desc')
      .limit(pageSize)
      .fetch()

    return {
      home,
      articles,
    }
  },
  head() {
    return this.$seo({
      title: 'Home Page',
    })
  },
}
</script>
