<template>
  <div>
    <article>
      <div
        class="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700"
        style="grid-template-rows: auto 1fr"
      >
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
          <prev-next-article :prev="prev" :next="next" />
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
export default {
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
}
</script>
