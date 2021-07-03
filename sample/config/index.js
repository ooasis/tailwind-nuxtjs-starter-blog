const title = 'Tailwind Nuxt Starter Blog'
const description = 'A simple blog platform built on Nuxt, Tailwind'
const author = 'ooasis'

export default {
  title,
  author,
  identity: 'Programmer',
  location: 'Seattle, WA',
  avatar: '/img/ooasis.png',
  seo: {
    baseUrl: 'http://nuxtjs-tailwind-blog-starter.com',
    name: title,
    description,
    author: [author],
    keywords: ['nuxtjs', 'vuejs', 'tailwind', 'starter', 'blog'],
    twitter: {
      title,
    },
    fb: {
      pageId: 'ooasis',
    },
    openGraph: {
      title: 'ooasis',
    },
  },
  feed: {
    category: 'technology',
  },
  social: {
    mail: 'ooasis@gmail.com',
    twitter: 'https://twitter.com/ooasis',
    facebook: 'https://facebook.com/ooasis',
  },
}
