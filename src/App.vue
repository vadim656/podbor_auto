<template>
  <PHeader />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
    <PFooter />
  </router-view>
</template>

<script>
import PHeader from './components/p-Header.vue'
import PFooter from './components/p-Footer.vue'

export default {
  components: {
    PHeader,
    PFooter
  },
  // methods: {
  //   beforeEnter: function () {
  //     var elements = document.querySelectorAll('div')
  //     anime({
  //       targets: elements,
  //       direction: 'alternate',
  //       fade: [0, 2],
  //       loop: true,
  //       easing: 'linear'
  //     })
  //   }
  // }
}
</script>

<style>
::-webkit-scrollbar {width:0px;}
#app {
  background-color: #1A1F22;
}


.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}


.fade-enter-from,
.fade-leave-to {

  transform: scale(0.9);
}
</style>
