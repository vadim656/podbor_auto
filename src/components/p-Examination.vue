<template>
  <section class="flex  justify-center  items-center text-white">
    <div class="container py-8 mt-8 h-full ">
      <div class="w-full flex justify-center h-20">
        <h3 class="text-[36px] font-bold uppercase ">Что мы проверяем</h3>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10"></div>
      <div class="w-full flex flex-col justify-center ">
        <div class="flex justify-between">
          <div class="flex w-full justify-between">
            <PExaminationTab variant="horizontal" :tabList="tabList">
              <template v-slot:tabPanel-1> </template>
            </PExaminationTab>
          </div>
        </div>

        <div class="w-full flex justify-center w-prose mt-10">
          <a class="border-dotted-[#fff] border-b" href="">Как мы работаем</a>
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
  async created () {
    axios
      .get('http://perfect-podbor.ru/api/wp-json/wp/v2/posts/?categories=4' , {
        timeout: 1000,
        responseType: 'text',
        decompress: true,
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
