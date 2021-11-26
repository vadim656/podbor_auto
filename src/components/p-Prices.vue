<template>
  <section class="flex  justify-center text-white h-full lg:h-[800px]">
    <img
      :src="img"
      :alt="items"
      class="object-cover object-center w-full h-[1400px] lg:h-[800px] absolute z-[0]"
    />
    <div class="container flex flex-col justify-between py-5  z-10">
      <div class="w-full flex flex-col items-center justify-center">
        <h3 class="text-[36px] font-bold uppercase">Стоимость услуг</h3>
        <span class="text-[#909090] pb-2 lg:pb-0"
          >Уже подобрали более 200 авто нашим клиентам</span
        >
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-20 px-8">
        <PPricesItem v-for="item in items" :key="item.id" :items_data="item" />
      </div>
      <!-- /.g -->
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import PPricesItem from './p-PricesItem.vue'
export default {
  data () {
    return {
      items: [],
      errors: [],
      img: null
    }
  },
  props: {},
  mounted () {
    axios
      .get('http://perfect-podbor.ru/api/wp-json/wp/v2/posts/?categories=7', {})
      .then(response => {
        this.items = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    axios
      .get('http://perfect-podbor.ru/api/wp-json/acf/v3/posts/2', {})
      .then(response => {
        this.img = response.data.acf.imgprices
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  components: { PPricesItem }
}
</script>

<style></style>
