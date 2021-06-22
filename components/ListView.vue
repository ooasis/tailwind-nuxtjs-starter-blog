<template>
  <ul>
    <li v-for="article in articles" :key="article.title" class="py-4">
      <article
        class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline"
      >
        <dl>
          <dt class="sr-only">Published on</dt>
          <dd>
            <formatted-date :article="article" />
          </dd>
        </dl>
        <div class="space-y-3 xl:col-span-3">
          <div>
            <h3 class="text-2xl font-bold leading-8 tracking-tight">
              <NuxtLink
                :to="`/blog/${article.slug}`"
                class="text-gray-900 dark:text-gray-100"
              >
                {{ article.title }}
              </NuxtLink>
            </h3>
            <tags :article="article" />
          </div>
          <div class="prose text-gray-500 max-w-none dark:text-gray-400">
            {{ article.description }}
          </div>
        </div>
      </article>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
}
</script>
