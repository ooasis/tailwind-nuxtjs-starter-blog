<template>
  <div>
    <div class="divide-y divide-gray-200 dark:divide-gray-700">
      <page-title :title="`Time: ${selectedTag}`" />
      <list-view :articles="articles" />
      <prev-next-page
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
  async asyncData({ $content, params, query }) {
    const startDate = new Date(params.slug + '-01')
    const endDate = new Date(params.slug + '-31')
    const curPage = query.page ? parseInt(query.page) : 1
    const target = `/timelines/${params.slug}`
    const raw = await $content('blog')
      .only(['title', 'description', 'tags', 'slug', 'updatedAt'])
      .where({
        updatedAt: { $between: [startDate.valueOf(), endDate.valueOf()] },
      })
      .sortBy('updatedAt', 'desc')
      .skip((curPage - 1) * pageSize)
      .limit(pageSize + 1)
      .fetch()
    const hasNext = raw && raw.length > pageSize
    const hasPrev = curPage > 1

    return {
      target,
      curPage,
      hasPrev,
      hasNext,
      pageSize,
      articles: hasNext ? raw.slice(0, -1) : raw,
      selectedTag: params.slug,
    }
  },
  head() {
    return this.$seo({
      title: `${this.selectedTag}${
        this.curPage > 1 ? ' - ' + this.curPage : ''
      }`,
    })
  },
  watchQuery: ['page'],
}
</script>
