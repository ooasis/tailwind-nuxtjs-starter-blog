<template>
  <div>
    <div
      class="
        flex flex-col
        items-start
        justify-start
        divide-y divide-gray-200
        dark:divide-gray-700
        md:justify-center
        md:items-center
        md:divide-y-0
        md:flex-row
        md:space-x-6
        md:mt-24
      "
    >
      <page-title title="Tags" />
      <tag-cloud :tags="tags" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('blog').only('tags').fetch()

    const tags = articles
      .flatMap((r) => r.tags)
      .reduce((m, a) => {
        if (a in m) {
          m[a] += 1
        } else {
          m[a] = 1
        }
        return m
      }, {})

    return {
      tags,
    }
  },
  head() {
    return this.$seo({
      title: 'Tags',
    })
  },
}
</script>
