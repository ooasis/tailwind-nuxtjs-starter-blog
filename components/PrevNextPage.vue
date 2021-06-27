<template>
  <div class="pt-6 pb-8 space-y-2 md:space-y-5">
    <nav class="flex justify-between">
      <button
        rel="previous"
        class="cursor-auto disabled:opacity-50"
        :disabled="!hasPrev"
      >
        <NuxtLink
          v-if="hasPrev"
          :to="`${curPage == 2 ? target : target + '__' + (curPage - 1)}`"
          >Previous Page</NuxtLink
        >
      </button>
      <span> Page: {{ curPage }} </span>
      <button
        rel="next"
        class="cursor-auto disabled:opacity-50"
        :disabled="!hasNext"
      >
        <NuxtLink v-if="hasNext" :to="`${target}__${curPage + 1}`"
          >Next Page</NuxtLink
        >
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
