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
        <single-view :article="article" :prev="prev" :next="next" />
      </div>
    </article>
  </div>
</template>
<script>
import debug from 'debug'
const deb = debug('pages:blog')

export default {
  async asyncData({ $content, $site, params, from }) {
    const article = await $content('blog', params.slug).fetch()
    const [prev, next] = await $content('blog')
      .only(['title', 'slug', 'updatedAt', ''])
      .sortBy('createdAt', 'desc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next,
      inPage: from && from.name === 'blog-slug',
      isIsso: $site.comment && $site.comment.isso,
      isCommento: $site.comment && $site.comment.commento,
    }
  },
  head() {
    const seoHeaders = this.$seo({
      title: this.article.title,
    })
    const headScripts = []
    if (this.isIsso) {
      headScripts.push({
        src: `${this.$site.comment.isso}/js/embed.min.js`,
        'data-isso': `${this.$site.comment.isso}/`,
        'data-isso-css': false,
      })
    } else if (this.isCommento) {
      // has been initialized in nuxt.config.js if commento is enabled
    }
    return { ...seoHeaders, script: headScripts }
  },
  mounted() {
    if (this.isIsso) {
      if (this.inPage && window.Isso) {
        deb('Refresh isso')
        window.Isso.init()
        window.Isso.fetchComments()
      }
    } else if (this.isCommento) {
      if (window.commento && window.commento.reInit) {
        deb('Refresh commento')
        window.commento.reInit({
          idRoot: 'commentobox',
          pageId: this.article.slug,
        })
      }
    } else {
      deb('Skip comment refresh')
    }
  },
}
</script>
