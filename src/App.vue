<template>
  <div style="background-color: #1A1F22;" >
    
    <pHeader/>
    <PMainScreen />
    <PExamination/>
    <PPrices/>
    <section class=" h-full px-8">
      <div class="flex w-full">
        <PBenefits />
      </div>
    </section>
    <PFooter/>
  </div>
</template>

<script>
import PBenefits from './components/p-Benefits.vue'
import PMainScreen from './components/p-MainScreen.vue'
import pHeader from './components/p-Header.vue'
import PExamination from './components/p-Examination.vue'
import PPrices from './components/p-Prices.vue'
import PFooter from './components/p-Footer.vue'

export default {
  components: {
    PBenefits,
    PMainScreen,
    pHeader,
    PExamination,
    PPrices,
    PFooter,
  }
}
</script>

<style>


body {
    font-family: 'Oswald', sans-serif !important;
    letter-spacing: 0.07em;
}


</style>
