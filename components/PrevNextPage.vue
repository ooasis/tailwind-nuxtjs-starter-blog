<template>
  <div class="pt-6 pb-8 space-y-2 md:space-y-5">
    <nav class="flex justify-between">
      <button
        rel="previous"
        class="cursor-auto disabled:opacity-50"
        :disabled="!hasPrev"
      >
        <a
          v-if="hasPrev"
          :href="`${curPage == 2 ? target : target + '?page=' + (curPage - 1)}`"
          >Previous</a
        >
      </button>
      <span> Page: {{ curPage }} </span>
      <button
        rel="next"
        class="cursor-auto disabled:opacity-50"
        :disabled="!hasNext"
      >
        <a v-if="hasNext" :href="`${target}?page=${curPage + 1}`">Next</a>
      </button>
    </nav>
  </div>
</template>
<script>
export default {
  props: {
    target: {
      type: String,
      required: true,
    },
    hasPrev: {
      type: Boolean,
      required: true,
    },
    hasNext: {
      type: Boolean,
      required: true,
    },
    curPage: {
      type: Number,
      required: true,
    },
    pageSize: {
      type: Number,
      required: true,
    },
  },
}
</script>
