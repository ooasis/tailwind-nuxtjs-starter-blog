<template>
  <div>
    <div class="divide-y divide-gray-200 dark:divide-gray-700">
      <page-title :title="`Tag: ${selectedTag}`" />
      <list-view :articles="articles" />
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
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('blog')
      .where({ tags: { $contains: params.slug } })
      .fetch()

    return {
      articles,
      selectedTag: params.slug,
    }
  },
}
</script>
