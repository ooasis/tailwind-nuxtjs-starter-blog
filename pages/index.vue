<template>
  <div>
    <div class="divide-y divide-gray-200 dark:divide-gray-700">
      <page-title title="Latest" />
      <list-view :articles="articles" />
    </div>
    <div class="flex justify-end text-base font-medium leading-6">
      <a
        href="/blog"
        class="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
        aria-label="all posts"
      >
        All Posts &rarr;
      </a>
    </div>
  </div>
</template>

<script>
const pageSize = 25

export default {
  async asyncData({ $content }) {
    const articles = await $content('blog')
      .only(['title', 'description', 'tags', 'slug', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .limit(pageSize)
      .fetch()

    return {
      articles,
    }
  },
}
</script>
