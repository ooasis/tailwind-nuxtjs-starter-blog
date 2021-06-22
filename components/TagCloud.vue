<template>
  <div class="flex flex-wrap max-w-lg">
    <div v-for="tag in Object.keys(tags)" :key="tag" class="mt-2 mb-2 mr-5">
      <NuxtLink
        :to="`/tags/${tag}`"
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
      <NuxtLink
        :to="`/tags/${tag}`"
        class="
          -ml-2
          text-sm
          font-semibold
          text-gray-600
          uppercase
          dark:text-gray-300
        "
      >
        {{ tags[tag] }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Object,
      required: true,
    },
  },
}
</script>
