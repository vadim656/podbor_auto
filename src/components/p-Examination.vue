<template>
  <section class="flex  justify-center  items-center text-white">
    <div class="container py-4 sm:mt-8 h-full ">
      <div class="w-full flex justify-center py-4 sm:py-0 sm:h-20">
        <h3 class="text-[24px] lg:text-[36px] font-bold uppercase ">
          Что мы проверяем
        </h3>
      </div>
      <!-- <div class="grid grid-cols-1 lg:grid-cols-3 gap-10"></div> -->
      <div class="w-full flex flex-col justify-center ">
        <div class="flex w-full jusify-between ">
          <PExaminationTab
            variant="horizontal"
            :tabList="tabList"
          ></PExaminationTab>
        </div>
        <div class="w-full flex justify-center w-prose mt-10">
          <button
            type="button"
            class="btn border px-4 py-2 rounded relative"
            @click="showModal"
          >
            Как мы работаем
          </button>

          <Modal v-show="isModalVisible" @close="closeModal" />
        </div>
      </div>
    </div>
    <!-- /.container -->
  </section>
</template>

<script>
import axios from 'axios'
import PExaminationTab from './p-ExaminationTab.vue'
import Modal from './UI/Modal-Exemin.vue'
export default {
  data () {
    return {
      errors: [],
      tabList: [],
      isModalVisible: false
    }
  },
  created () {
    axios
      .get(
        'http://perfect-podbor.ru/api/wp-json/wp/v2/posts/?categories=4&per_page=20',
        {
          responseType: '',
          decompress: true
        }
      )
      .then(response => {
        this.tabList = response.data.sort((a, b) =>   b.title.rendered - a.title.rendered);
        console.log(this.tabList.length + ' шт ' + 'Что проверяем')
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    },
  components: { PExaminationTab, Modal }
}
</script>

<style></style>
