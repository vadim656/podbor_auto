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
            <PExaminationTab 
            variant="horizontal"
            :tabList="tabList">
              <template v-slot:tabPanel-1> Content 1 </template>
              <template v-slot:tabPanel-2> Content 2 </template>
              <template v-slot:tabPanel-3> Content 3 </template>
              <template v-slot:tabPanel-4> Content 4 </template>
            </PExaminationTab>
          </div>
        </div>

        <div class="w-full flex justify-center w-prose">
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
      items: [],
      errors: [],
      tabList: ['Кузов', 'Электроника', 'Шины', 'Tab 4']
    }
  },
  created () {
    axios
      .get('http://perfect-podbor.ru/api/wp-json/wp/v2/posts/?categories=4')
      .then(response => {
        this.items = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  components: { PExaminationTab }
}
</script>

<style></style>
