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
    <section class="h-full px-8 flex justify-center h-[400px]">
      <PForm/>
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
import PForm from './components/p-Form.vue'

export default {
  components: {
    PBenefits,
    PMainScreen,
    pHeader,
    PExamination,
    PPrices,
    PFooter,
    PForm
  }
}
</script>

<style>


body {
    font-family: 'Oswald', sans-serif !important;
    letter-spacing: 0.07em;
}


</style>
