<template>
  <div>
    <div
      class="
        flex flex-col
        items-start
        justify-start
        divide-y divide-gray-200
        dark:divide-gray-700
        md:justify-center
        md:items-center
        md:divide-y-0
        md:flex-row
        md:space-x-6
        md:mt-24
      "
    >
      <div class="pt-6 pb-8 space-x-2 md:space-y-5">
        <h1
          class="
            text-3xl
            font-extrabold
            leading-9
            tracking-tight
            text-gray-900
            dark:text-gray-100
            sm:text-4xl sm:leading-10
            md:text-6xl md:leading-14 md:border-r-2 md:px-6
          "
        >
          Tags
        </h1>
      </div>
      <div class="flex flex-wrap max-w-lg">
        <div v-for="tag in Object.keys(tags)" :key="tag" class="mt-2 mb-2 mr-5">
          <a :href="`/tags/${tag}`">
            <a
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
            </a>
          </a>
          <a
            :href="`/tags/${tag}`"
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
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const articles = await $content('blog').only('tags').fetch()

    const tags = articles
      .flatMap((r) => r.tags)
      .reduce((m, a) => {
        if (a in m) {
          m[a] += 1
        } else {
          m[a] = 1
        }
        return m
      }, {})

    return {
      tags,
    }
  },
})
</script>
