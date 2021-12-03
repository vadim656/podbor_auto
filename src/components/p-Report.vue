<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative  bg-[#1F1A20] sm:h-[500px] overflow-hidden">
    <!-- <img class="absolute z-10 right-[-10%] sm:left-[400px] sm:top-[50px] w-[200px] sm:w-[400px] bottom-[300px] sm:bottom-[110px] " src="../assets/calculator_right.png"  alt=""> -->
    <div class="h-[300px] sm:h-[700px] bg-[#1F1A20] sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
      <img class=" sm:pl-[5%] w-[600px] h-full object-cover" :src="img" alt="" />
    </div>
    <div class="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div class="md:ml-auto md:w-1/2 md:pl-10">
        <h2 class="text-base font-semibold uppercase tracking-wider text-gray-300">
         Обьективная проверка
        </h2>
        <p class="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
          Полный отчет об авто
        </p>
        <p class="mt-3 text-lg text-gray-300">
          Направляем видео-/фотоотчет и диагностический
лист (с комментариями эксперта) после каждой
проверки на почту или в мессенджеры.
Прикрепляем все документы к договору.
        </p>
        <div class="mt-8">
          <div class="inline-flex rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
              Скачать пример отчета
              <ExternalLinkIcon class="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ExternalLinkIcon } from '@heroicons/vue/solid'

export default {
  components: {
    ExternalLinkIcon,
  },
  data () {
      return {
          img: ''
      }
  },
  created () {
    axios
      .get('http://perfect-podbor.ru/api/wp-json/acf/v3/posts/2')
      .then(response => {
        this.img = response.data.acf.img_report
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
}
</script>