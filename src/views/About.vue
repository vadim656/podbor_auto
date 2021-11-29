<template>
  <div class="container mx-auto h-full">
    <h1 class=" w-full text-center text-2xl my-10">О компании</h1>
    <div class="grid grid-cols-1 sm:grid-cols-[40%,60%] gap-2 w-full h-full">
      <div class="bord sm:h-[200px]">
        <h3 class="text-center">{{ title }}</h3>
         <br />
        <span>{{ info }} </span>
      </div>
      <!-- /.bord -->
      <div class="bord sm:h-[200px] mt-4">
        <img class="responsive rounded-xl" :src="img" alt="" />
      </div>
      <!-- /.bord -->
    </div>
    <!-- /.grid -->
  </div>
 
</template>

<script>

export default {
  data () {
    return {
      title: String,
      img: null,
      info: String,
      errors: []
    }
  },
  created () {
    // Simple GET request using fetch
    fetch('http://perfect-podbor.ru/api/wp-json/acf/v3/pages/145')
      .then(response => response.json())
      .then(data => (this.title = data.acf.title))
    fetch('http://perfect-podbor.ru/api/wp-json/acf/v3/pages/145')
      .then(response => response.json())
      .then(data => (this.info = data.acf.text_left))
    fetch('http://perfect-podbor.ru/api/wp-json/acf/v3/pages/145')
      .then(response => response.json())
      .then(data => (this.img = data.acf.img_right))
  },

}
</script>

<style></style>
