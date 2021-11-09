<template>
  <div style="background-color: #1A1F22;" >
    <pHeader/>
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
import pHeader from './components/p-Header.vue'

export default {
  components: {
    PBenefits,
    PMainScreen,
    pHeader
  }
}
</script>

<style>


body {
    font-family: 'Oswald', sans-serif !important;
    letter-spacing: 0.05em;
}
</style>
