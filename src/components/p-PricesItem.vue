<template>
  <div
    class="flex flex-col justify-between h-[400px] lg:h-[600px] px-10 bg-[rgba(26,31,34,0.5)] backdrop-blur-[10px] rounded"
  >
    <img
      src="../assets/Noise.png"
      :alt="items_data.img"
      class="object-cover object-center w-full  top-0 left-0 h-full opacity-[20%] absolute z-[0]"
    />
    <div class="flex pt-2 z-[10]">
      <div class="text-[24px] font-bold uppercase text-white">
       {{ items_data.acf.title_name }}
      </div>
    </div>
    <div class="flex flex-col justify-start z-[10]">
      <ul>
        <li>
         
        </li>
        <li>
          {{ items_data.content.rendered.replace(/(\<(\/?[^>]+)>)/g, '') }}
        </li>
      </ul>
    </div>
    <div class="flex flex-col items-center pb-4 z-[10]">
      <span class="text-[24px] font-bold uppercase">
        от {{ items_data.acf.price_service.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }} руб.
      </span>
      <button
        class="mx-10 px-6 py-4 bg-gradient-to-r from-[#303483] bg-[#1B1E58] hover:bg-[#303483] text-white mt-4 rounded"
      >
        Заказать диагностику
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items_data: {
      type: Object,
      default() {
            return {}
        }
    }
  }
}
</script>

<style></style>
