<template>
  <div style="background-color: #1A1F22;">
    <div
      class="bg-[#212121] sticky flex justify-between items-center w-full h-20 top-0 px-8 bg-mor text-white"
    >
      <div>
        logo
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
    <PMainScreen />
    <section class="bg-gray-100 flex px-8 mt-8 h-96">
      <div class="flex justify-center  items-center w-1/2">
        left-sec
      </div>
      <div
        class="flex  justify-center items-center w-1/2 border-l-2 border-gray-600"
      >
        right-sec
      </div>
    </section>
    <section class=" h-full px-8">
      <div class="flex w-full">
        <PBenefits />
      </div>
    </section>
  </div>
</template>

<script>
import PBenefits from './components/p-Benefits.vue'
import PMainScreen from './components/p-MainScreen.vue'
export default {
  components: {
    PBenefits,
    PMainScreen
  }
}
</script>

<style>
.bg-mor {
  box-shadow: 0px 2px 40px 10px rgba(0, 0, 0, 0.42);
}
</style>
