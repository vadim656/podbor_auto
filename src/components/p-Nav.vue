!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <header class="bg-[#1F1A20] sticky top-0 z-[99999] ">
    <nav class=" mx-auto w-full  sm:px-6 lg:px-8 sm:container" aria-label="Top">
      <div
        class="w-full  px-4 py-2 grid grid-cols-[2fr,4fr,1fr] sm:flex items-center sm:justify-between  lg:border-none"
      >
        <div class="flex items-center">
          <router-link to="/">
            <span class="sr-only">eee</span>
            <img class="h-8 sm:h-16 w-auto object-cover" :src="img" alt="" />
          </router-link>
          <div class="hidden ml-10 space-x-8 lg:block">
            <a
              v-scroll-to="{
                el: '#examination',
                offset: -75,
              }"
              class="text-base font-medium text-white hover:text-indigo-50 cursor-pointer"
            >
              Что проверяем
            </a>
             <router-link
                    @click="showModal = false"
                    v-for="link in navigation"
                    :key="link.name"
                    :to="link.href"
                    class="text-base font-medium text-white hover:text-indigo-50"
                  >
                    {{ link.name }}
                  </router-link>
          </div>
        </div>
        <div class="lg:ml-10 lg:space-x-4  h-full flex items-center">
          <SocialInsta class="hidden sm:block" />
          <SocialButton class="hidden sm:block" />
          <SocialTelegram class="hidden sm:block" />
          <a
            href="tel:89054756888"
            class="inline-block bg-gradient-to-r from-[#303483] bg-[#1B1E58] text-[14px] lg:text-[18px] lg:ml-10 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
            >+7(905)475-68-88</a
          >
        </div>
        <div
          @click="showModal = true"
          class="flex sm:hidden items-center h-full "
        >
          <span class="text-white ">МЕНЮ</span>
        </div>
        <transition name="fade" appear>
          <div v-if="showModal" @click="showModal = false"></div>
        </transition>
        <transition name="slide" appear>
          <div
            v-if="showModal"
            class="absolute top-0 left-0 w-screen h-screen "
          >
            <div
              @click="showModal = false"
              class="absolute top-0 right-0 z-[2] p-4"
            >
              <span class=" text-white">ЗАКРЫТЬ</span>
            </div>

            <div
              class="w-full top-0 left-0 absolute h-screen bg-gradient-to-r from-[#303483] bg-[#1B1E58] z-[1]"
            >
              <div class="w-full mt-[40%]">
                <ul class="w-full flex flex-col px-8">
                  <router-link
                    @click="showModal = false"
                    v-for="link in navigation"
                    :key="link.name"
                    :to="link.href"
                    class="text-2xl font-medium text-white hover:text-indigo-50 mt-4"
                  >
                    {{ link.name }}
                  </router-link>
                </ul>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <!-- <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
        <router-link
          v-for="link in navigation"
          :key="link.name"
          :to="link.href"
          class="text-base font-medium text-white hover:text-indigo-50"
        >
          {{ link.name }}
        </router-link>
      </div> -->
    </nav>
  </header>
</template>

<script>
import SocialButton from './UI/SocialButton.vue'
import SocialTelegram from './UI/SocialTelegram.vue'
import SocialInsta from './UI/SocialInsta.vue'

const navigation = [
  { name: 'Услуги', href: '/services' },
  { name: 'Документы', href: '/' },
  { name: 'О компании', href: '/about' }
]

export default {
  setup () {
    return {
      navigation
    }
  },
  data () {
    return {
      showModal: false
    }
  },
  props: {
    img: {
      default () {
        return {}
      }
    }
  },
  components: { SocialButton, SocialTelegram, SocialInsta }
}
</script>

<style>
/* .fade-enter-active {
  transition: all 0.6s ease-out;
}

.fade-leave-active {
  transition: all 0.6s cubic-bezier(0.45, -0.58, 0.67, 1.51);
} */

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s cubic-bezier(0.45, -0.58, 0.67, 1.51);
}

.slide-enter-from {
  opacity: 0;
}

.slide-leave-to {
  opacity: 0;
}
</style>
