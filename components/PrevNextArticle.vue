<template>
  <div
    class="
      text-sm
      font-medium
      leading-5
      divide-gray-200
      xl:divide-y
      dark:divide-gray-700
      xl:col-start-1 xl:row-start-2
    "
  >
    <div class="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
      <div v-if="prev">
        <h2
          class="
            text-xs
            tracking-wide
            text-gray-500
            uppercase
            dark:text-gray-400
          "
        >
          Previous Article
        </h2>
        <div class="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
          <a :href="`/blog/${prev.slug}`">{{
            $shortenTitle(prev.title, 200)
          }}</a>
        </div>
      </div>
      <div v-if="!prev"></div>

      <div v-if="next">
        <h2
          class="
            text-xs
            tracking-wide
            text-gray-500
            uppercase
            dark:text-gray-400
          "
        >
          Next Article
        </h2>
        <div class="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
          <a :href="`/blog/${next.slug}`">{{
            $shortenTitle(next.title, 200)
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    prev: {
      type: Object,
      required: false,
      default: null,
    },
    next: {
      type: Object,
      required: false,
      default: null,
    },
  },
}
</script>
