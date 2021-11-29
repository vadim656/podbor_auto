!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <header class="bg-[#1F1A20] sticky top-0 z-[99999] ">
    <nav class=" mx-auto px-4 sm:px-6 lg:px-8 container" aria-label="Top">
      <div
        class="w-full py-2 flex items-center justify-between border-b border-indigo-500 lg:border-none"
      >
        <div class="flex items-center">
          <router-link to="/">
            <span class="sr-only">Workflow</span>
            <img class="h-16 w-auto object-cover" :src="img" alt="" />
          </router-link>
          <div class="hidden ml-10 space-x-8 lg:block">
            <router-link
              v-for="link in navigation"
              :key="link.name"
              :to="link.href"
              class="text-base font-medium text-white hover:text-indigo-50"
            >
              {{ link.name }}
            </router-link>
          </div>
        </div>
        <div class="lg:ml-10 lg:space-x-4">
          <a
            href="#"
            class="inline-block bg-gradient-to-r from-[#303483] bg-[#1B1E58] text-[14px] lg:text-[18px] lg:ml-10 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
            >+7 (000) 000-00-00</a
          >
          <a
            href="#"
            class=" bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-[#1B1E58] hover:bg-indigo-50 hidden lg:inline-block"
            >Подобрать авто</a
          >
        </div>
      </div>
      <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
        <router-link
          v-for="link in navigation"
          :key="link.name"
          :to="link.href"
          class="text-base font-medium text-white hover:text-indigo-50"
        >
          {{ link.name }}
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
const navigation = [
  { name: 'Что проверяем', href: '/' },
  { name: 'Услуги', href: '/' },
  { name: 'Документы', href: '/' },
  { name: 'О компании', href: '/about' }
]

export default {
  setup () {
    return {
      navigation
    }
  },
  props: {
    img: {
      default () {
        return {}
      }
    }
  }
}
</script>
