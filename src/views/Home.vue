<template>
  <div style="background-color: #1A1F22;">
    <!-- <div class="header lg:block hidden">
      <div class="progress-container">
        <div class="progress-bar" id="myBar"></div>
        <div></div>
      </div>
    </div> -->
    <PMainScreen />
    
    <!-- <PPrices /> -->
    <section id="examination">
      <PExamination />
    </section>
    
    <section>
      <PLiked/>
    </section>
    <section class=" h-full px-8 ">
      <div class="flex w-full">
        <PBenefits />
      </div>
    </section>
    <section class=" h-full my-8" >
      <PReport/>
    </section>
    <section class=" sm:my-8  sm:py-8 flex-col flex  sm:flex-row sm:gap-4 slider-footer justify-center items-center sm:justify-around h-full w-full mx-auto container">
      <PNewItemThree
      class="m-2 border border-[rgba(196,196,196,0.2)]"
      />
      
      <PNewItemTwo
      class="m-2 border border-[rgba(196,196,196,0.2)]"
      />
      <PNewItemOne
      class="m-2 border border-[rgba(196,196,196,0.2)]"
      />
      
    </section>
    <section>
      <PTesty/>
    </section>
    
    <!-- <section class="h-full px-8 flex justify-center h-[400px] pb-8">
      <PForm />
    </section> -->

  </div>
</template>

<script>
import PBenefits from '/src/components/p-Benefits.vue'
import PMainScreen from '/src/components/p-MainScreen.vue'
import pHeader from '/src/components/p-Header.vue'
import PExamination from '/src/components/p-Examination.vue'
// import PPrices from '/src/components/p-Prices.vue'
import PForm from '/src/components/p-Form.vue'
import PLiked from '/src/components/p-Liked.vue'
import PReport from '/src/components/p-Report.vue'
import PNewItemOne from '/src/components/p-New-Item-One.vue'
import PNewItemTwo from '/src/components/p-New-Item-Two.vue'
import PNewItemThree from '/src/components/p-New-Item-Three.vue'
import PTesty from '/src/components/p-Testy.vue'



export default {
  components: {
    PBenefits,
    PMainScreen,
    pHeader,
    PExamination,
    PForm,
    PLiked,
    PReport,
    PNewItemOne,
    PNewItemThree,
    PNewItemTwo,
    PTesty
},
}
</script>

<style>
body {
  font-family: 'Oswald', sans-serif !important;
  letter-spacing: 0.07em;
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

.slider-footer .slide{
  display: block !important;
}

</style>
