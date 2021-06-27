<template>
  <div>
    <div class="divide-y divide-gray-200 dark:divide-gray-700">
      <div>
        <page-title title="All Posts">
          <full-text-search-box :on-update="refreshArticles" />
        </page-title>
        <list-view :articles="articles" />
      </div>
      <prev-next-page
        v-if="!searchQuery"
        :target="target"
        :cur-page="curPage"
        :has-next="hasNext"
        :has-prev="hasPrev"
        :page-size="pageSize"
      />
    </div>
  </div>
</template>

<script>
const pageSize = 10

export default {
  async asyncData({ $content, $parseSlugWithPaging, params }) {
    const [subTarget, curPage] = $parseSlugWithPaging(params.slug)
    const raw = await $content('blog')
      .only(['title', 'description', 'tags', 'slug', 'updatedAt'])
      .sortBy('updatedAt', 'desc')
      .skip((curPage - 1) * pageSize)
      .limit(pageSize + 1)
      .fetch()

    const hasNext = raw && raw.length > pageSize
    const hasPrev = curPage > 1

    return {
      searchQuery: null,
      target: `/blogs/${subTarget}`,
      curPage,
      hasPrev,
      hasNext,
      pageSize,
      articles: hasNext ? raw.slice(0, -1) : raw,
    }
  },
  head() {
    return this.$seo({
      title: `Blogs${this.curPage > 1 ? ' - ' + this.curPage : ''}`,
    })
  },
  watchQuery: ['page'],
  methods: {
    refreshArticles(articles, searchQuery) {
      this.articles = articles
      this.searchQuery = searchQuery
    },
  },
}
</script>
