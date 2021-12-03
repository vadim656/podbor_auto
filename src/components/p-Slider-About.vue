<template>
  <swiper
    :autoHeight="true"
    :spaceBetween="20"
    :navigation="true"
    :pagination="{
      clickable: true
    }"
    class="mySwiper text-[red]"
  >
    <swiper-slide v-for="(href, index) in img" :key="index" :virtualIndex="index">
      <img :src="href.url" alt="" />
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/navigation'

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper'

// install Swiper modules
SwiperCore.use([Navigation, Pagination])

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
        img: []
    }
  },
  methods: {},
  created() {
        // Simple GET request using fetch
        fetch("http://perfect-podbor.ru/api/wp-json/acf/v3/pages/145")
            .then(response => response.json())
            .then(data => (this.img = data.acf.img_right));
    },
}
</script>

<style scoped>
.swiper {
  width: 100%;
  height: auto;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  max-height: 400px;
}

.swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  background-color: #fff;
}
.swiper-pagination-bullet-active{
  background-color: #272d83;
}

</style>
