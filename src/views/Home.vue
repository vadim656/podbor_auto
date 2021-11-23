<template>
  <div style="background-color: #1A1F22;" >
    
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
import PBenefits from '/src/components/p-Benefits.vue'
import PMainScreen from '/src/components/p-MainScreen.vue'
import pHeader from '/src/components/p-Header.vue'
import PExamination from '/src/components/p-Examination.vue'
import PPrices from '/src/components/p-Prices.vue'
import PFooter from '/src/components/p-Footer.vue'
import PForm from '/src/components/p-Form.vue'

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