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
  async asyncData({ $content, $parseSlugWithPaging, params }) {
    const [subTarget, curPage] = $parseSlugWithPaging(params.slug)
    const startDate = new Date(subTarget + '-01')
    const endDate = new Date(subTarget + '-31')
    const raw = await $content('blog')
      .only(['title', 'description', 'tags', 'slug', 'publishedAt'])
      .where({
        createdAt: { $between: [startDate.valueOf(), endDate.valueOf()] },
      })
      .sortBy('publishedAt', 'desc')
      .skip((curPage - 1) * pageSize)
      .limit(pageSize + 1)
      .fetch()
    const hasNext = raw && raw.length > pageSize
    const hasPrev = curPage > 1

    return {
      target: `${subTarget}`,
      curPage,
      hasPrev,
      hasNext,
      pageSize,
      articles: hasNext ? raw.slice(0, -1) : raw,
      selectedTag: subTarget,
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
