<template>
  <div class="divide-y divide-gray-200 dark:divide-gray-700">
    <page-title title="About" />
    <div
      class="
        items-start
        space-y-2
        xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0
      "
    >
      <div class="flex flex-col items-center pt-8 space-x-2">
        <h3 class="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
          Author
        </h3>
      </div>
      <div class="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
        <nuxt-content :document="article" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const article = await $content('other/about').fetch()
    return {
      article,
    }
  },
  head() {
    return this.$seo({
      title: 'About',
    })
  },
}
</script>
