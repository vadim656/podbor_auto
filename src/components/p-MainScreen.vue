<template>
  <section class="bg-gray-100 flex items-center w-full h-96">
    <div class="flex flex-col w-1/2 pl-8">
      <div class="text-left">
        {{ title }}
      </div>
      <button
        class="w-40 px-6 py-4 bg-gray-900 hover:bg-gray-600 text-white mt-4 rounded"
      >
        {{ button }}
      </button>
    </div>
    <div class="w-1/2">
      images
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      title: null,
      button: null,
      errors: []
    }
  },
  created () {
    axios
      .get('http://perfect-podbor.ru/api/wp-json/acf/v3/posts/2')
      .then(response => {
        (this.button = response.data.acf.button_name),
        (this.title  = response.data.acf.offertext)
      })

      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style></style>
