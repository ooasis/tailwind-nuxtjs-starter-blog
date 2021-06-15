<template>
  <div class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
    <time :dateTime="article.createdAt">
      {{
        new Date(article.createdAt).toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      }}
    </time>
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
