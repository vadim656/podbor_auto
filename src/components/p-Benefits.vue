<template>
  <div class="flex justify-between items-center mt-8">
    <div
      v-for="value in info"
      :key="value.info"
      class="flex bg-gray-400 justify-center items-center mx-1 p-8 flex-col w-1/4"
    >
      <h3>{{ value.title.rendered }}</h3>
      <p>ID: {{ value.id }}</p>
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
      .get('http://perfect-podbor.ru/api/wp-json/wp/v2/posts')
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
