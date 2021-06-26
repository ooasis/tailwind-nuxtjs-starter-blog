<template>
  <div class="flex flex-wrap max-w-lg">
    <div
      v-for="timeline in Object.keys(timelines)"
      :key="timeline"
      class="mt-2 mb-2 mr-5"
    >
      <NuxtLink
        :to="`/timeline/${timeline}`"
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
        {{ timeline }}
      </NuxtLink>
      <NuxtLink
        :to="`/timeline/${timeline}`"
        class="
          -ml-2
          text-sm
          font-semibold
          text-gray-600
          uppercase
          dark:text-gray-300
        "
      >
        {{ timelines[timeline] }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    timelines: {
      type: Object,
      required: true,
    },
  },
}
</script>
