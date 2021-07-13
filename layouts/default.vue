<template>
  <div class="antialiased text-black bg-white dark:bg-gray-900 dark:text-white">
    <div class="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
      <div class="flex flex-col justify-between h-full min-h-screen">
        <Header />
        <main class="mb-auto">
          <Nuxt />
        </main>
        <Footer />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    if (process.browser) {
      this.$gtag('config', 'G-9PXSECGJ92', {
        page_path: this.$route.fullPath,
      })
    }
  },
}
</script>
