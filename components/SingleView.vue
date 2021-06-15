<template>
  <div class="pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6">
    <div class="pt-10 pb-0 prose dark:prose-dark max-w-none">
      <nuxt-content :document="article" />
      <div class="py-4 xl:py-8">
        <h2
          class="
            text-xs
            tracking-wide
            text-gray-500
            uppercase
            dark:text-gray-400
          "
        >
          Tags
        </h2>
        <tags :article="article" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
}
</script>
