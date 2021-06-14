<template>
  <div>
    <div class="divide-y divide-gray-200 dark:divide-gray-700">
      <div class="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1
          class="
            text-xl
            font-extrabold
            leading-9
            tracking-tight
            text-gray-900
            dark:text-gray-100
            sm:text-4xl sm:leading-10
            md:text-6xl md:leading-14
          "
        >
          Latest
        </h1>
        <p class="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Only for those in agreement with 1 + 1 = 10
        </p>
      </div>
      <ul class="divide-y divide-gray-200 dark:divide-gray-700">
        <li v-for="article in articles" :key="article.title" class="py-12">
          <article>
            <div
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
                      new Date(article.createdAt).toLocaleDateString(
                        'US',
                        'yyyy-mm-dd'
                      )
                    }}
                  </time>
                </dd>
              </dl>
              <div class="space-y-5 xl:col-span-3">
                <div class="space-y-6">
                  <div>
                    <h2 class="text-2xl font-bold leading-8 tracking-tight">
                      {{ article.title }}
                    </h2>
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
                  <div
                    class="prose text-gray-500 max-w-none dark:text-gray-400"
                  >
                    <p>{{ article.description }}</p>
                  </div>
                </div>
                <div class="text-base font-medium leading-6">
                  <a
                    :href="`/blog/${article.slug}`"
                    class="
                      text-blue-500
                      hover:text-blue-600
                      dark:hover:text-blue-400
                    "
                    :aria-label="`Read ${article.title}`"
                  >
                    Read more &rarr;
                  </a>
                </div>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </div>
    <div class="flex justify-end text-base font-medium leading-6">
      <a
        href="/blog"
        class="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
        aria-label="all posts"
      >
        All Posts &rarr;
      </a>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const articles = await $content('blog')
      .only(['title', 'description', 'tags', 'slug', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .limit(10)
      .fetch()

    return {
      articles,
    }
  },
})
</script>
