<template>
<PHeader/>
  <router-view />
</template>

<script>
import PHeader from './components/p-Header.vue'
export default {
  components: {
    PHeader
  }
}
</script>

<style>
</style>
