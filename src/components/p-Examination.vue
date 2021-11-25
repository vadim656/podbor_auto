<template>
  <section class="flex  justify-center  items-center text-white">
    <div class="container py-8 mt-8 h-full ">
      <div class="w-full flex justify-center h-20">
        <h3 class="text-[24px] lg:text-[36px] font-bold uppercase ">Что мы проверяем</h3>
      </div>
      <!-- <div class="grid grid-cols-1 lg:grid-cols-3 gap-10"></div> -->
      <div class="w-full flex flex-col justify-center ">
        <div class="flex flex-col lg:flex-row justify-between items-start">
          <div class="flex w-full lg:w-3/5 justify-between items-start">
            <PExaminationTab variant="horizontal" :tabList="tabList">
              <template v-slot:tabPanel-1> </template>
            </PExaminationTab>
          </div>
          <div class="flex relative justify-center w-full lg:w-2/5  ml-6  h-[510px]">
            <img
              class="img-responsive h-auto object-cover rounded-lg filter brightness-[0.6]"
              src="../assets/avto.jpg"
              alt=""
            />
            <div class="absolute z-10">
              <span
                class="group w-6 h-6 bg-[red] absolute flex bord top-[350px] right-[25px] rounded-[100%] cursor-pointer animate-pulse hover:animate-none"
              >
                <p
                  class="hidden transition-all duration-500 ease-in-out motion-safe:group-hover:block group-hover:w-full min-w-[100px] group-hover:text-right bottom-[30px] right-[30px] absolute"
                >
                  Шины и колеса
                </p>
              </span>
              <span
                class="group w-6 h-6 bg-[red] absolute flex bord top-[70px] rounded-[100%] cursor-pointer animate-pulse hover:animate-none"
              >
                <p
                  class="hidden transition-all duration-1500 ease-in-out motion-safe:group-hover:block group-hover:w-full min-w-[100px] group-hover:text-right bottom-[30px] right-[30px] absolute"
                >
                  Система безопасности
                </p>
              </span>
              <span
                class="group w-6 h-6 bg-[red] absolute flex bord top-[170px] rounded-[100%] cursor-pointer animate-pulse hover:animate-none"
              >
                <p
                  class="hidden transition-all duration-500 ease-in-out motion-safe:group-hover:block group-hover:w-full min-w-[100px] group-hover:text-right bottom-[30px] right-[30px] absolute"
                >
                  Стекло
                </p>
              </span>
            </div>
          </div>
        </div>

        <div class="w-full flex justify-center w-prose mt-10">
          <router-link class="border-dotted-[#fff] border-b" to="/about">Как мы работаем</router-link>
        </div>
      </div>
    </div>
    <!-- /.container -->
  </section>
</template>

<script>
import axios from 'axios'
import PExaminationTab from './p-ExaminationTab.vue'

export default {
  data () {
    return {
      errors: [],
      tabList: null
    }
  },
  created () {
    axios
      .get('http://perfect-podbor.ru/api/wp-json/wp/v2/posts/?categories=4', {
        timeout: 1000,
        responseType: 'text',
        decompress: true
      })
      .then(response => {
        this.tabList = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  components: { PExaminationTab }
}
</script>

<style></style>
