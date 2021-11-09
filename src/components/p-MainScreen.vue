<template>
  <section  class="w-full flex justify-center items-center  h-[600px]">
    <img :src="img" alt="" class="object-cover object-center w-full  h-[600px] absolute z-[0]">
    <div class="flex flex-col justify-center w-1/2 pl-8 z-1 h-full text-[#fff]">
      <div class="text-left text-[100px] text-[#fff] font-bold z-10 uppercase">
        {{ title }}
      </div>
      <span class="z-10 text-2xl">
        Професcиональная помощь при выборе автомобиля <br>
        в г.Краснодар 
      </span>
      <button
        class="w-40 px-6 py-4 bg-gradient-to-r from-[blue] to-[red] hover:bg-gray-600 text-white mt-4 rounded z-10"
      >
        {{ button }}
      </button>
    </div>
    <div class="w-1/2 z-10 h-full flex justify-start items-end">
      <div class=" w-1/2">
        <img :src="imgFace" alt="Славик">
        </div>
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
      img: null,
      imgFace: null,
      errors: []
    }
  },
  created () {
    axios
      .get('http://perfect-podbor.ru/api/wp-json/acf/v3/posts/2')
      .then(response => {
        (this.button = response.data.acf.button_name),
        (this.title  = response.data.acf.offertext),
         (this.imgFace  = response.data.acf.kim_chlen),
        (this.img  = response.data.acf.img_main_page)
      })

      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style>
.ss{
 
}
</style>
