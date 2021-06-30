const createFeed = async (feed, siteConfig) => {
  feed.options = {
    title: siteConfig.title,
    link: siteConfig.seo.baseUrl,
    description: siteConfig.seo.description,
  }

  // MUST import it here
  const { $content } = require('@nuxt/content')
  const articles = await $content('blog')
    .only(['title', 'description', 'summary', 'slug', 'updatedAt'])
    .sortBy('updatedAt', 'desc')
    .limit(100)
    .fetch()

  articles.forEach((article) => {
    const url = `${siteConfig.seo.baseUrl}/blog/${article.slug}`

    feed.addItem({
      title: article.title,
      id: url,
      link: url,
      date: new Date(article.updatedAt),
      description: article.description,
      content: article.summary,
      author: [siteConfig.author],
    })
  })

  feed.addCategory(siteConfig.feed.category)
}

export default createFeed
