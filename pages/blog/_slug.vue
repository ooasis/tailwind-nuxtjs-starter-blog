<template>
  <div>
    <article>
      <div class="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
        <header class="pt-6 xl:pb-6">
          <div class="space-y-1 text-center">
            <dl class="space-y-10">
              <div>
                <dt class="sr-only">Published on</dt>
                <dd>
                  <formatted-date :article="article" />
                </dd>
              </div>
            </dl>
            <div>
              <h1
                class="
                  text-3xl
                  font-extrabold
                  leading-9
                  tracking-tight
                  text-gray-900
                  dark:text-gray-100
                  sm:text-4xl sm:leading-10
                  md:text-5xl md:leading-14
                "
              >
                {{ article.title }}
              </h1>
            </div>
          </div>
        </header>
        <single-view :article="article" />
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
            <div
              class="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8"
            >
              <div v-if="prev">
                <h2
                  class="
                    text-xs
                    tracking-wide
                    text-gray-500
                    uppercase
                    dark:text-gray-400
                  "
                >
                  Previous Article
                </h2>
                <div
                  class="
                    text-blue-500
                    hover:text-blue-600
                    dark:hover:text-blue-400
                  "
                >
                  <a :href="`/blog/${prev.slug}`">{{ prev.title }}</a>
                </div>
              </div>
              <div v-if="next">
                <h2
                  class="
                    text-xs
                    tracking-wide
                    text-gray-500
                    uppercase
                    dark:text-gray-400
                  "
                >
                  Next Article
                </h2>
                <div
                  class="
                    text-blue-500
                    hover:text-blue-600
                    dark:hover:text-blue-400
                  "
                >
                  <a :href="`/blog/${next.slug}`">{{ next.title }}</a>
                </div>
              </div>
            </div>
          </div>
          <div class="pt-4 xl:pt-8">
            <a
              href="/blog"
              class="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
            >
              &larr; Back to the blog
            </a>
          </div>
        </footer>
      </div>
    </article>
  </div>
</template>
<script>
import Vue from 'vue'
import SingleView from '~/components/SingleView.vue'

export default Vue.extend({
  components: { SingleView },
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()
    const [prev, next] = await $content('blog')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next,
    }
  },
})
</script>
