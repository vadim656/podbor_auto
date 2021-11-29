<template>
  <section class="flex justify-center  items-center">
    <div class="w-full flex justify-center  lg:h-[800px] bg-[#1A1F22]">
      
      <div
        class="z-10 grid grid-cols-1 grid-row-[1fr,auto] sm:grid-cols-[3fr,2fr] w-full items-stretch overflow-hidden"
      >
        <div
          class="offer w-full h-full  flex flex-col justify-items-center justify-self-center pl-[5%]" 
        >
          <div
            class="mt-4 lg:mt-0 flex flex-col justify-center w-full items-center lg:items-start px-2 lg:px-0 lg:pl-8 z-1 h-full text-[#fff] "
          >
            <div
              class="text-[42px] lg:text-[100px] text-[#fff] font-bold z-10 uppercase mt-8 "
            >
              {{ title }}
            </div>
            <span class="lg:text-2xl  text-center lg:text-left">
              Професcиональная помощь при выборе автомобиля <br />
              в г.Краснодар
            </span>
            <span
              class="text-[#909090] text-[16px] text-left w-full  lg:text-[24px] mt-10"
            >
              - Осмотр и полная диагностика
            </span>
            <span
              class="text-[#909090] text-[16px] text-left  w-full lg:text-[24px] mb-10"
            >
              - Полный спектр услуг по проверке и подбору автомобиля <br />
              от бюджетного до элитного
            </span>
            <button
              class="w-60 px-10 py-6 bg-gradient-to-r from-[#303483] bg-[#1B1E58] hover:bg-[#303483] text-white mt-4 rounded z-10"
            >
              {{ button }}
            </button>
          </div>
          <div
            class="w-full flex flex-col lg:flex-row sm:justify-start h-full items-center lg:items-center py-4"
          >
            <div class="text-[24px] lg:mr-20 text-white">
              <span class="text-[#5960EF] font-bold text-[36px]">5 лет</span>
              <br />на рынке
            </div>
            <div class="text-[24px] lg:mr-20 text-white">
              <span class="text-[#5960EF] font-bold text-[36px]"
                >3 000 000 млн</span
              >
              <br />сэкономлено клиентам
            </div>
            <div class="text-[24px] lg:mr-20 text-white">
              <span class="text-[#5960EF] font-bold text-[36px]"
                >более 100</span
              >
              <br />авто куплено
            </div>
          </div>
        </div>
        <div class=" w-full h-[800px] sm:h-full relative py-4">
          <PSlider/>
        </div>
      </div>

      <!-- /.w-full -->
    </div>
  </section>
</template>

<script>


import axios from 'axios'
import PSlider from './p-Slider.vue'


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
  components: { PSlider },
  created () {
    axios
      .get('http://perfect-podbor.ru/api/wp-json/acf/v3/posts/2')
      .then(response => {
        (this.button = response.data.acf.button_name),
          (this.title = response.data.acf.offertext),
          (this.imgFace = response.data.acf.kim_chlen),
          (this.img = response.data.acf.img_main_page)
      })

      .catch(e => {
        this.errors.push(e)
      })
    
  },
  methods: {
  }
}
</script>

<style>


</style>
