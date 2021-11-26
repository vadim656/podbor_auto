<template>
  <div class="relative h-full z-[10]">
    <swiper
      :slidesPerView="'auto'"
      :spaceBetween="10"
      :loop="true"
      :pagination="{
        clickable: true
      }"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false
      }"
       :speed="600" 
       :parallax="true"
      class="mySwiper"
    >
    <div slot="container-start" class="parallax-bg" :style="{'background-image': 'url(http://perfect-podbor.ru/api/wp-content/uploads/2021/11/peeww.webp)'}" data-swiper-parallax="-3%"></div>
      <swiper-slide>
        <PSliderItemOne/>
      </swiper-slide>
      <swiper-slide>
        <PSliderItemTwo/>
      </swiper-slide>
       <swiper-slide>
        <PSliderItemThree/>>
      </swiper-slide>

      
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation, Parallax } from 'swiper'

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation, Parallax])


import PSliderItemOne     from './p-Slider-Item-One.vue'
import PSliderItemTwo     from './p-Slider-Item-Two.vue'
import PSliderItemThree   from './p-Slider-Item-Three.vue'


export default {
  components: {
    Swiper,
    SwiperSlide,
    PSliderItemOne,
    PSliderItemTwo,
    PSliderItemThree
},

}
</script>
<style>

.parallax-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 130%;
  height: 100%;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide {
  width: 80%;
}

.swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  background-color: #1A1D57;
}</style
>>
