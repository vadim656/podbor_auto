<template>
  <div class="container mx-auto min-h-screen text-white ">
    <h1 class=" w-full text-center text-2xl my-10">О компании</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full h-full">
      <div class="h-full">
        <h3 class="text-center">{{ title }}</h3>
         <br />
        <span class="h-full" v-html="info"></span>
      </div>
      <!-- /.bord -->
      <PSliderAbout/>
      <!-- /.bord -->
    </div>
    <!-- /.grid -->
  </div>
 
</template>

<script>
import PSliderAbout from "../components/p-Slider-About.vue"

export default {
    data() {
        return {
            title: '',
            img: '',
            info: '',
            errors: []
        };
    },
    created() {
        // Simple GET request using fetch
        fetch("http://perfect-podbor.ru/api/wp-json/acf/v3/pages/145")
            .then(response => response.json())
            .then(data => (this.title = data.acf.title));
        fetch("http://perfect-podbor.ru/api/wp-json/acf/v3/pages/145")
            .then(response => response.json())
            .then(data => (this.info = data.acf.text_left));
        fetch("http://perfect-podbor.ru/api/wp-json/acf/v3/pages/145")
            .then(response => response.json())
            .then(data => (this.img = data.acf.img_right));
    },
    components: { PSliderAbout }
}
</script>

<style></style>
