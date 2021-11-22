<template>
  <div class="flex flex-col lg:flex-row justify-between items-center mt-8 w-full">
    <div
      v-for="value in info"
      :key="value.info"
      class="flex  bg-gray-400 justify-center items-center mx-1 p-8 flex-col w-full my-4 lg:w-1/4"
    >
      <h3>{{ value.title.rendered }}</h3>
      <div> {{ value.content.rendered.replace("<p>", '').replace("</p>", '') }} </div>
    </div>


  </div>

</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      info: [],
      errors: []
    }
  },
  created () {
    axios
      .get('http://perfect-podbor.ru/api/wp-json/wp/v2/posts?categories=5')
      .then(response => {
        (this.info = response.data)
       
      })

      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style></style>
