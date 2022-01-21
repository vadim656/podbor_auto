<template>
  <div class="h-screen text-white mt-20">
    <div class="container mx-auto w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 w-full gap-4 justify-between">
        <div class="flex flex-col gap-4 px-8 lg:px-0">
          <h3 class="font-bold text-[36px] uppercase">Контакты Perfect-Auto</h3>
          <span>Свяжитесь c нами удобныс для вас способом</span>
          <div class="flex flex-col gap-4">
            <span>Часы работ: 10-18</span>
            <span>Контакты: +7(905)475-68-88</span>
          </div>

        </div>
        <div class="w-full px-8 lg:px-0 lg:w-1/3 left-0">
          <FormTelega/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FormTelega from '../components/UI/FormTelega.vue'
export default {
  components: {FormTelega}
}
</script>

<style>
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
