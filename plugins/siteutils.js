export default async (_, inject) => {
  inject('shortenTitle', (title, maxLen = 20) =>
    title.length > maxLen ? `${title.substring(0, maxLen)} ...` : title
  )

  inject('parseSlugWithPaging', (slug) => {
    let ret = [slug || 'index', 1]
    console.log('slug is %o', slug)
    if (slug && slug.includes('__')) {
      const parts = slug.split('__')
      const page = parseInt(parts[parts.length - 1])
      if (!isNaN(page)) {
        ret = [parts.slice(0, parts.length - 1).join('__'), page]
      }
    }
    console.log('return  is %s', ret)
    return ret
  })

  const configDir = process.env.SITE_CONFIG_DIR || 'sample_config'
  // eslint-disable-next-line no-console
  // console.info(`About to load site config from ${configDir}`)
  const siteConfig = await import(`~/${configDir}/index.js`)
  inject('site', siteConfig)
}
