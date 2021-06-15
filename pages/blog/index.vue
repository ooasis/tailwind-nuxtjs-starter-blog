<template>
  <div>
    <div class="divide-y divide-gray-200 dark:divide-gray-700">
      <div>
        <page-title title="All Posts">
          <full-text-search-box :on-update="refreshArticles" />
        </page-title>
        <list-view :articles="articles" />
      </div>
      <div class="pt-6 pb-8 space-y-2 md:space-y-5">
        <nav class="flex justify-between">
          <button
            rel="previous"
            class="cursor-auto disabled:opacity-50"
            disabled="{!prevPage}"
          >
            Previous
          </button>
          <span> 1 of 20 </span>
          <button
            rel="next"
            class="cursor-auto disabled:opacity-50"
            disabled="{!nextPage}"
          >
            Next
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import ListView from '~/components/ListView.vue'
export default {
  components: { ListView },
  async asyncData({ $content }) {
    const articles = await $content('blog')
      .only(['title', 'description', 'tags', 'slug', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .limit(25)
      .fetch()
    return {
      articles,
    }
  },
  methods: {
    refreshArticles(articles) {
      this.articles = articles
    },
  },
}
</script>
