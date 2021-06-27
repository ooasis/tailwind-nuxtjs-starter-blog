<template>
  <div
    class="pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6"
    style="grid-template-rows: auto 1fr"
  >
    <dl
      class="
        pt-6
        pb-10
        xl:pt-11 xl:border-b xl:border-gray-200 xl:dark:border-gray-700
      "
    >
      <dt>Related Info:</dt>
      <dd>
        <ul
          class="
            flex
            justify-center
            pt-6
            space-x-8
            xl:block
            sm:space-x-12
            xl:space-x-0 xl:space-y-8
          "
        >
          <li class="flex items-center space-x-2">
            <dl class="text-sm font-medium leading-5 whitespace-nowrap">
              <dd class="text-gray-900 dark:text-gray-100"></dd>
            </dl>
          </li>
        </ul>
      </dd>
    </dl>
    <div
      class="
        divide-y divide-gray-200
        dark:divide-gray-700
        xl:pb-0 xl:col-span-3 xl:row-span-2
      "
    >
      <div class="pt-10 pb-0 prose dark:prose-dark max-w-none">
        <nuxt-content :document="article" />
      </div>
    </div>
    <footer>
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
      <prev-next-article :prev="prev" :next="next" />
      <div class="pt-4 xl:pt-8">
        <NuxtLink
          to="/blogs"
          class="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
        >
          &larr; Back to the blogs
        </NuxtLink>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
    prev: {
      type: Object,
      required: true,
    },
    next: {
      type: Object,
      required: true,
    },
  },
}
</script>
