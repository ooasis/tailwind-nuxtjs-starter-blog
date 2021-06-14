<template>
  <div>
    <div class="divide-y divide-gray-200 dark:divide-gray-700">
      <div class="divide-y">
        <div class="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1
            class="
              text-3xl
              font-extrabold
              leading-9
              tracking-tight
              text-gray-900
              dark:text-gray-100
              sm:text-4xl sm:leading-10
              md:text-6xl md:leading-14
            "
          >
            Tag: {{ selectedTag }}
          </h1>
        </div>
        <ul>
          <li v-for="article in articles" :key="article.title" class="py-4">
            <article
              class="
                space-y-2
                xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline
              "
            >
              <dl>
                <dt class="sr-only">Published on</dt>
                <dd
                  class="
                    text-base
                    font-medium
                    leading-6
                    text-gray-500
                    dark:text-gray-400
                  "
                >
                  <time dateTime="{date}">
                    {{
                      new Date(article.createdAt).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })
                    }}
                  </time>
                </dd>
              </dl>
              <div class="space-y-3 xl:col-span-3">
                <div>
                  <h3 class="text-2xl font-bold leading-8 tracking-tight">
                    <a
                      :href="`/blog/${article.slug}`"
                      class="text-gray-900 dark:text-gray-100"
                    >
                      {{ article.title }}
                    </a>
                  </h3>
                  <div class="flex flex-wrap">
                    <a
                      v-for="tag in article.tags"
                      :key="tag"
                      :href="`/tags/${tag}`"
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
                  </div>
                </div>
                <div class="prose text-gray-500 max-w-none dark:text-gray-400">
                  {{ article.description }}
                </div>
              </div>
            </article>
          </li>
        </ul>
      </div>
      <div class="pt-6 pb-8 space-y-2 md:space-y-5">
        <nav class="flex justify-between">
          <button
            rel="previous"
            class="cursor-auto disabled:opacity-50"
            disabled="{!prevPage}"
          >
            Previous
          </button>
          <span> 1 of 20 </span>
          <button
            rel="next"
            class="cursor-auto disabled:opacity-50"
            disabled="{!nextPage}"
          >
            Next
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content, params }) {
    const articles = await $content('blog')
      .where({ tags: { $contains: params.slug } })
      .fetch()

    return {
      articles,
      selectedTag: params.slug,
    }
  },
})
</script>
