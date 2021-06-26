<template>
  <div class="flex flex-wrap">
    <NuxtLink
      v-for="tag in article.tags"
      :key="`${article.title}-${tag}`"
      :to="`/tag/${tag}`"
      class="
        mr-3
        text-sm
        font-medium
        text-blue-500
        uppercase
        hover:text-blue-600
        dark:hover:text-blue-400
      "
    >
      {{ tag }}
    </NuxtLink>
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
