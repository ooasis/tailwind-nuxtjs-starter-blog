<template>
  <div>
    <div class="divide-y divide-gray-200 dark:divide-gray-700">
      <page-title :title="`Tag: ${selectedTag}`" />
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
const pageSize = 25

export default {
  async asyncData({ $content, params, query }) {
    const curPage = query.page ? parseInt(query.page) : 1
    const target = `/tags/${params.slug}`
    const raw = await $content('blog')
      .where({ tags: { $contains: params.slug } })
      .only(['title', 'description', 'tags', 'slug', 'updatedAt'])
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
}
</script>
