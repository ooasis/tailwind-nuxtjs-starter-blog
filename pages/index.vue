<template>
  <div>
    <div class="divide-y divide-gray-200 dark:divide-gray-700">
      <page-title
        title="Latest"
        subtitle="Only for those in agreement with 1 + 1 = 10"
      />
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
import Vue from 'vue'
import PageTitle from '~/components/PageTitle.vue'

export default Vue.extend({
  components: { PageTitle },
  async asyncData({ $content }) {
    const articles = await $content('blog')
      .only(['title', 'description', 'tags', 'slug', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .limit(10)
      .fetch()

    return {
      articles,
    }
  },
})
</script>
