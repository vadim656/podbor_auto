<template>
  <section class="flex justify-center  items-center ">
    <div
      class="w-full flex justify-center  lg:h-[800px] bg-no-repeat bg-cover"
      v-bind:style="{ 'background-image': 'url(' + img + ')' }"
    >
      <div
        class="z-10 grid grid-cols-1 grid-row-[1fr,auto] sm:grid-cols-[3fr,2fr,2fr] w-full items-stretch overflow-hidden"
      >
        <div
          class="offer w-full h-full  flex flex-col justify-items-center justify-self-center pl-[5%]"
        >
          <div
            class="mt-4 lg:mt-0 flex flex-col justify-center w-full items-center lg:items-start px-2 lg:px-0 lg:pl-8 z-1 h-full text-[#fff]"
          >
            <div
              class="text-[42px] lg:text-[100px] text-[#fff] font-bold z-10 uppercase mt-8 a-1"
            >
              {{ title }}
            </div>
            <span class="lg:text-2xl  mb-8 text-center lg:text-left a-3">
              Професcиональная помощь при выборе автомобиля <br />
              в г.Краснодар
            </span>
            <span
              class="hidden text-[#909090] text-[16px] text-left w-full  lg:text-[24px] mt-10"
            >
              - Осмотр и полная диагностика
            </span>
            <span
              class="hidden text-[#909090] text-[16px] text-left  w-full lg:text-[24px] mb-10"
            >
              - Полный спектр услуг по проверке и подбору автомобиля <br />
              от бюджетного до элитного
            </span>
            <button
              @click="showModal"
              class=" w-60 px-10 flex justify-center items-center py-6 bg-gradient-to-r from-[#303483] bg-[#1B1E58] hover:bg-[#303483] text-white mt-4 rounded z-10 a-3"
            >
              {{ button }}
            </button>
          </div>
          <div
            class="w-full  sm:flex flex-col sm:justify-start h-full sm:pl-8 items-start py-4 gap-4"
          >
            <div class="text-[24px] lg:mr-20 text-white text-left a-2">
              <span class="text-[#5960EF] font-bold  text-[24px] sm:text-[36px]"
                >5 лет</span
              >
              <br />на рынке
            </div>
            <div class="text-[24px] lg:mr-20 text-white text-left a-2">
              <span class="text-[#5960EF] font-bold  text-[24px] sm:text-[36px]"
                >по 108</span
              >
              <br />параметрам проверка автомобиля
            </div>
            <div class="text-[24px] lg:mr-20 text-white text-left a-2">
              <span class="text-[#5960EF] font-bold  text-[24px] sm:text-[36px]"
                >300+</span
              >
              <br />авто подобрано
            </div>
          </div>
        </div>
        <div
          class="w-full mt-8 sm:mt-0 h-[460px] sm:h-[750px] sm:h-full relative slider"
        >
          <PSlider />
        </div>
        <div class="relative">
          <img
            src="../assets/image/6M0A3579_adobespark.png"
            class="img-response object-cover"
            alt=""
          />
          <div
            class="absolute bottom-[20px] w-full text-center text-[18px] text-white bg-[#1A1F22] py-2 px-4 "
          >
            Основатель компании-Деркачев Вячеслав
          </div>
        </div>
      </div>
      <!-- modal-form -->
      <div class="modal-form w-full h-full" v-show="IsModalOpen" @close="closeModal">
        <div class="w-96 modal-in pl-4 pr-4 pt-4 text-white">
          <FormTelega />
          <button class="border-t-2 py-4 mt-8" @click="closeModal">Закрыть</button>
        </div>
      </div>
      <!-- modal-form -->
      <!-- /.w-full -->
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import PSlider from './p-Slider.vue'
//anime
import anime from 'animejs/lib/anime.es.js'
import FormTelega from './UI/FormTelega.vue'

export default {
  data () {
    return {
      title: '',
      button: '',
      img: '',
      imgFace: '',
      errors: [],
      IsModalOpen: false
    }
  },
  components: { PSlider, FormTelega },
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
  },
  methods: {
    showModal () {
      this.IsModalOpen = true
    },
    closeModal () {
      this.IsModalOpen = false
    }
  },
  mounted () {
    var slider = document.querySelectorAll('.swiper-slide')
    var img = document.querySelectorAll('.img-response')
    anime({
      targets: slider,
      direction: 'alternate',
      opacity: [0, 1],
      delay: anime.stagger(100, { start: 400 }),
      loop: false,
      easing: 'cubicBezier(.5, .05, .1, .3)'
    })
    anime({
      targets: img,
      direction: 'alternate',
      opacity: [0, 1],
      delay: 1000,
      loop: false,
      easing: 'linear'
    })
    anime({
      targets: '.a-1',
      direction: 'alternate',
      opacity: [0, 1],
      delay: 500,
      loop: false,
      easing: 'cubicBezier(.5, .05, .1, .3)'
    })
    anime({
      targets: '.a-2',
      direction: 'alternate',
      opacity: [0, 1],
      delay: anime.stagger(200),
      loop: false,
      easing: 'cubicBezier(.5, .05, .1, .3)'
    })
    anime({
      targets: '.a-3',
      direction: 'alternate',
      opacity: [0, 1],
      delay: anime.stagger(200),
      loop: false,
      easing: 'cubicBezier(.5, .05, .1, .3)'
    })
  }
}
</script>

<style>
.modal-form {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999999;
}

.modal-in {
  background: #1A1F22;
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  border-radius: 8px;
}
</style>
