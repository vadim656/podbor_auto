<template>
  <div
    class="bg-[#1F1A20] sticky w-full h-20 top-0 bg-mor mx-auto z-50 flex justify-center items-center"
  >
    <div
      class="container flex justify-between items-center text-white px-2 lg:px-0"
    >
      <div class="text-[20px] lg:text-[36px] font-bold uppercase">
        <img 
        class="max-h-[70px]"
        :src="img" alt="" />
      </div>
      <div>
        +7 (962) 406-00-13
      </div>
      <div class="flex flex-col h-full justify-center cursor-pointer">
        <span class="w-12 rounded h-1 bg-gray-100"></span>
        <span class="w-10 h-1 rounded bg-gray-100 mt-1"></span>
        <span class="w-8 h-1 rounded bg-gray-100 mt-1"></span>
      </div>
    </div>
    <!-- /.container -->
  </div>
  <div class="header lg:block hidden">
    <div class="progress-container">
      <div class="progress-bar" id="myBar"></div>
      <div></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      img: null,
      errors: []
    }
  },
  created () {
    axios
      .get('http://perfect-podbor.ru/api/wp-json/acf/v3/posts/2')
      .then(response => {
        this.img = response.data.acf.logo_header
      })

      .catch(e => {
        this.errors.push(e)
      })
  },
  components: {},
  mounted () {
    window.onscroll = function () {
      myFunction()
    }

    function myFunction () {
      var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop
      var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      var scrolled = (winScroll / height) * 100
      document.getElementById('myBar').style.height = scrolled + '%'
      // console.log(scrolled)
    }
  }
}
</script>

<style>
.bg-mor {
  box-shadow: 0px 2px 40px 10px rgba(0, 0, 0, 0.42);
}

.header {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 50px;
  z-index: 999999;
  width: 8px;
  height: 50%;
  background-color: transparent;
}

.progress-container {
  width: 8px;
  height: 100%;
  background: transparent;
}

.progress-bar {
  height: 100%;
  background: #04aa6d;
  width: 8px;
}
</style>
