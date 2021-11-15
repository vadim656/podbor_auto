<template>
  <section class="flex justify-center  items-center">
    <div class="w-full flex justify-center  lg:h-[800px] ">
      <img
        :src="img"
        alt=""
        class="object-cover object-center w-full h-[400px] lg:h-[800px] absolute z-[0] "
      />
      <div class="container z-10 flex flex-wrap">
        <div class="offer w-full lg:w-2/3 ">
          <div class="mt-4 lg:mt-0 flex flex-col justify-center w-full items-center lg:items-start px-2 lg:px-0 lg:pl-8 z-1 h-full text-[#fff] ">
            <div
              class="text-[42px] lg:text-[100px] text-[#fff] font-bold z-10 uppercase  "
            >
              {{ title }}
            </div>
            <span class="lg:text-2xl  text-center lg:text-left">
              Професcиональная помощь при выборе автомобиля <br />
              в г.Краснодар
            </span>
            <span class="text-[#909090] text-[16px] text-left w-full  lg:text-[24px] mt-10">
              - Осмотр и полная диагностика
            </span>
            <span class="text-[#909090] text-[16px] text-left  w-full lg:text-[24px] mb-10">
              - Полный спектр услуг по проверке и подбору автомобиля <br> от
              бюджетного до элитного
            </span>
            <button
              class="w-60 px-10 py-6 bg-gradient-to-r from-[#303483] bg-[#1B1E58] hover:bg-[#303483] text-white mt-4 rounded z-10"
            >
              {{ button }}
            </button>
          </div>
        </div>
        <div class=" w-full lg:w-1/3 z-10 lg:h-[600px] lg:flex justify-start items-end hidden ">
          <div class="lg:absolute lg:bottom-[0px] top-[100px] lg:bottom-[0px] ">
            <img class="w-[50%] lg:w-full " :src="imgFace" alt="Славик" />
          </div>
        </div>
        <div class="h-[300px] lg:h-40 pl-8 z-10 text-[#fff] hidden lg:block">
          <div class="w-full flex flex-col lg:flex-row justify-start h-full items-start lg:items-center ">
            <div class="text-[24px] lg:mr-20">
              <span class="text-[#5960EF] font-bold text-[36px]">5 лет</span>
              <br />на рынке
            </div>
            <div class="text-[24px] lg:mr-20">
              <span class="text-[#5960EF] font-bold text-[36px]"
                >3 000 000 млн</span
              >
              <br />сэкономлено клиентам
            </div>
            <div class="text-[24px] lg:mr-20">
              <span class="text-[#5960EF] font-bold text-[36px]"
                >более 100</span
              >
              <br />авто куплено
            </div>
          </div>
        </div>
      </div>

      <!-- /.w-full -->
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
        ;(this.button = response.data.acf.button_name),
          (this.title = response.data.acf.offertext),
          (this.imgFace = response.data.acf.kim_chlen),
          (this.img = response.data.acf.img_main_page)
      })

      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style>

</style>
