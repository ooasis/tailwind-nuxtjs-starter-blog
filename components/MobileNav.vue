<template>
  <div class="sm:hidden">
    <button
      type="button"
      class="w-8 h-8 ml-1 mr-1 rounded"
      aria-label="Toggle Menu"
      @click="onToggleNav"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="text-gray-900 dark:text-gray-100"
      >
        <path
          v-if="navShow"
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
        <path
          v-if="!navShow"
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    </button>
    <div
      :class="`fixed
        w-full
        h-full
        top-24
        right-0
        bg-gray-200
        dark:bg-gray-800
        opacity-95
        z-10
        transform
        ease-in-out
        duration-300
        ${navShow ? 'translate-x-0' : 'translate-x-full'}`"
    >
      <button
        type="button"
        aria-label="toggle modal"
        class="fixed w-full h-full cursor-auto focus:outline-none"
        @click="onToggleNav"
      ></button>
      <nav class="fixed h-full mt-8">
        <div v-for="link in links" :key="link.title" class="px-12 py-4">
          <NuxtLink
            :to="link.href"
            class="
              text-xl
              font-bold
              tracking-widest
              text-gray-900
              dark:text-gray-100
            "
            @click="onToggleNav"
          >
            {{ link.title }}
          </NuxtLink>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navShow: false,
      links: [
        {
          title: 'Blog',
          href: '/blogs',
        },
        {
          title: 'Tag',
          href: '/tags',
        },
        {
          title: 'Timeline',
          href: '/timelines',
        },
        {
          title: 'About',
          href: '/about',
        },
      ],
    }
  },
  methods: {
    onToggleNav() {
      if (this.navShow) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      this.navShow = !this.navShow
    },
  },
}
</script>
