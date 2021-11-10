<template>
  <section class="flex justify-center  items-center">
    <div class="w-full flex justify-center  h-[800px]">
      <img
        :src="img"
        alt=""
        class="object-cover object-center w-full  h-[800px] absolute z-[0]"
      />
      <div class="container z-10 flex flex-wrap">
        <div class="offer w-2/3">
          <div class="flex flex-col justify-center pl-8 z-1 h-full text-[#fff]">
            <div
              class="text-left text-[100px] text-[#fff] font-bold z-10 uppercase"
            >
              {{ title }}
            </div>
            <span class="text-2xl">
              Професcиональная помощь при выборе автомобиля <br />
              в г.Краснодар
            </span>
            <span class="text-[#909090] text-[24px] mt-10">
              - Осмотр и полная диагностика
            </span>
            <span class="text-[#909090] text-[24px] mb-10">
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
        <div class="w-1/3 z-10 h-[600px] flex justify-start items-end">
          <div class="absolute bottom-[0px] animate-bounce">
            <img :src="imgFace" alt="Славик" />
          </div>
        </div>
        <div class="h-40 pl-8 z-10 text-[#fff]">
          <div class="w-full flex justify-start h-full items-center">
            <div class="text-[24px] mr-20">
              <span class="text-[#5960EF] font-bold text-[36px]">5 лет</span>
              <br />на рынке
            </div>
            <div class="text-[24px] mr-20">
              <span class="text-[#5960EF] font-bold text-[36px]"
                >3 000 000 млн</span
              >
              <br />сэкономлено клиентам
            </div>
            <div class="text-[24px] mr-20">
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
.ss {
}
</style>
