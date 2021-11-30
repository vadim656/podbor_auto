<template>
<PHeader/>
  <router-view />
<PFooter />  
</template>

<script>
import PHeader from './components/p-Header.vue'
import PFooter from './components/p-Footer.vue'

export default {
  components: {
    PHeader,
    PFooter,
  }
}
</script>

<style>
</style>
