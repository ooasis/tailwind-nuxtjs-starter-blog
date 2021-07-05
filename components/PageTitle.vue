<template>
  <div class="divide-y divide-gray-200 dark:divide-gray-700">
    <div class="pt-6 pb-8 space-y-2 md:space-y-5">
      <h1
        class="
          text-4xl
          font-extrabold
          leading-9
          tracking-tight
          text-gray-900
          dark:text-gray-100
          sm:text-3xl sm:leading-10
          md:text-4xl md:leading-14
        "
      >
        {{ title }}
      </h1>
      <p
        v-if="subtitle"
        class="text-lg leading-7 text-gray-500 dark:text-gray-400"
      >
        {{ subtitle }}
      </p>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
      default: null,
    },
  },
}
</script>
