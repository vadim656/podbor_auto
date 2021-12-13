<template>
  <div class="relative h-[440px] sm:h-full z-[10]">
    <swiper
      :slidesPerView="'auto'"
      :navigation="true"
      :loop="true"
       :speed="600" 
       :centeredSlides="true"
      class="mySwiper h-[400px] sm:h-[800px] ml-1 sm:ml-0"
    >
    
      <swiper-slide class="mr-4 sm:mr-0">
        <PSliderItemOne/>
      </swiper-slide>
      <swiper-slide class="mr-4 sm:mr-0">
        <PSliderItemTwo/>
      </swiper-slide>
       <swiper-slide class="mr-4 sm:mr-0">
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
import "swiper/css/navigation"
// import Swiper core and required modules
import SwiperCore, { Autoplay,  Navigation } from 'swiper'

// install Swiper modules
SwiperCore.use([Autoplay,  Navigation])


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
  width: 100%;
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
