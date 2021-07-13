<template>
  <div class="divide-y divide-gray-200 dark:divide-gray-700">
    <page-title title="About" />
    <div
      class="
        items-start
        space-y-2
        xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0
      "
    >
      <div class="flex flex-col items-center pt-8 space-x-2">
        <img
          :src="$site.avatar"
          alt="avatar"
          width="192px"
          height="192px"
          class="w-48 h-48 rounded-full"
        />
        <h3 class="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
          {{ $site.author }}
        </h3>
        <div class="text-gray-500 dark:text-gray-400">
          {{ $site.identity }}
        </div>
        <div class="text-gray-500 dark:text-gray-400">{{ $site.location }}</div>
        <div class="flex pt-6 space-x-3">
          <social-icon
            v-if="$site.social.mail"
            kind="mail"
            :href="`mailto:${$site.social.mail}`"
          />
          <social-icon
            v-if="$site.social.github"
            kind="github"
            :href="$site.social.github"
          />
          <social-icon
            v-if="$site.social.facebook"
            kind="facebook"
            :href="$site.social.facebook"
          />
          <social-icon
            v-if="$site.social.youtube"
            kind="youtube"
            :href="$site.social.youtube"
          />
          <social-icon
            v-if="$site.social.linkedin"
            kind="linkedin"
            :href="$site.social.linkedin"
          />
          <social-icon
            v-if="$site.social.twitter"
            kind="twitter"
            :href="$site.social.twitter"
          />
        </div>
      </div>
      <div class="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
        <nuxt-content :document="article" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const article = await $content('page/about').fetch()
    return {
      article,
    }
  },
  head() {
    return this.$seo({
      title: 'About',
    })
  },
  mounted() {
    if (this.$gtag) {
      this.$gtag('config', this.$site.gtag, {
        page_title: 'About',
        page_path: this.$route.fullPath,
      })
    }
  },
}
</script>
