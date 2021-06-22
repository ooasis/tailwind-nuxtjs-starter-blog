export default async (_, inject) => {
  inject('shortenTitle', (title, maxLen = 20) =>
    title.length > maxLen ? `${title.substring(0, maxLen)} ...` : title
  )

  const configDir = process.env.SITE_CONFIG_DIR || 'sample_config'
  // eslint-disable-next-line no-console
  // console.info(`About to load site config from ${configDir}`)
  const siteConfig = await import(`~/${configDir}/index.js`)
  inject('site', siteConfig)
}
