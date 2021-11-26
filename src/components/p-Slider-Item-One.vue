<template>
  <div
    class="rounded-lg 
     absolute sm:w-[500px] h-[600px] 
     flex flex-col justify-between  px-10 bg-[rgba(26,31,34,0.5)] 
    backdrop-blur-[10px] slide"
  >
    <img
      src="../assets/Noise.png"
      
      class="object-cover object-center w-full  top-0 left-0 h-full opacity-[20%] absolute z-[0]"
    />
    <div class="flex pt-2 z-[10]">
      <div class="text-[24px] font-bold uppercase text-white">
       {{ title }}
      </div>
    </div>
    <div class="text-white flex flex-col justify-start z-[10]">
      <ul>
        <li>
         
        </li>
        <li>
          {{ desc.replace(/(\<(\/?[^>]+)>)/g, '') }}
        </li>
      </ul>
    </div>
    <div class="text-white flex flex-col items-center pb-4 z-[10]">
      <span class="text-[24px] font-bold uppercase">
от {{ price }} руб.        
      </span>
      <button
        class="mx-10 px-6 py-4 bg-gradient-to-r from-[#303483] bg-[#1B1E58] hover:bg-[#303483] text-white mt-4 rounded"
      >
        Заказать диагностику
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  data () {
    return {
      title: '',
      desc: '',
      price: '',

    }
  },
  created() {
    axios
      .get('http://perfect-podbor.ru/api/wp-json/wp/v2/posts/136', {})
      .then(response => {
        (this.title = response.data.acf.title_name),
        (this.desc = response.data.content.rendered),
        (this.price = response.data.acf.price_service)
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style></style>
