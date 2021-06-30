export default async (_, inject) => {
  inject('shortenTitle', (title, maxLen = 20) =>
    title.length > maxLen ? `${title.substring(0, maxLen)} ...` : title
  )

  inject('parseSlugWithPaging', (slug) => {
    let ret = [slug || 'index', 1]
    if (slug && slug.includes('__')) {
      const parts = slug.split('__')
      const page = parseInt(parts[parts.length - 1])
      if (!isNaN(page)) {
        ret = [parts.slice(0, parts.length - 1).join('__'), page]
      }
    }
    return ret
  })

  // interesting, you cannot combine the expression to eliminate variable configDir
  const configDir = `${process.env.MY_SITE || 'sample'}/config/index.js`
  const siteConfig = await import(`~/${configDir}`)
  inject('site', siteConfig)
}
