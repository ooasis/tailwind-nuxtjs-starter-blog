/* eslint-disable vue/no-v-html */
<template>
  <a
    class="text-sm text-gray-500 transition hover:text-gray-600"
    target="_blank"
    rel="noopener noreferrer"
    :href="href"
  >
    <span class="sr-only">facebook</span>

    <component
      :is="svg"
      :class="`fill-current
      text-gray-700
      dark:text-gray-200
      hover:text-blue-500
      dark:hover:text-blue-400
      h-${size}
      w-${size}`"
    />
  </a>
</template>
<script>
export default {
  props: {
    kind: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: false,
      default: 8,
    },
  },
  // components: { Facebook },
  data() {
    return {
      svg: require(`./social/${this.kind}.svg?inline`),
    }
  },
}
</script>
