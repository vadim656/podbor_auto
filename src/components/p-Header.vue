<template>
  <PNav :img="img" />
</template>

<script>
import PNav from './p-Nav.vue'
import axios from 'axios'
export default {
  data () {
    return {
      img: [],
      errors: []
    }
  },
  created () {
    axios
      .get('http://perfect-podbor.ru/api/wp-json/acf/v3/posts/2')
      .then(response => {
        this.img = response.data.acf.logo_header
      })

      .catch(e => {
        this.errors.push(e)
      })
  },
  components: { PNav }
}
</script>

<style>
.bg-mor {
  box-shadow: 0px 2px 40px 10px rgba(0, 0, 0, 0.42);
}
</style>
