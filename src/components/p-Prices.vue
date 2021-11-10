<template>
  <section class="flex  justify-center text-white h-full lg:h-[800px] mt-10 ">
    <img
      :src="img"
      :alt="img"
      class="object-cover object-center w-full h-[1400px] lg:h-[800px] absolute z-[0]"
    />
    <div
      class="container flex flex-col justify-between py-5  z-10"
    >
      <div class="w-full flex flex-col items-center justify-center">
        <h3 class="text-[36px] font-bold uppercase">Стоимость услуг</h3>
        <span class="text-[#909090] pb-2 lg:pb-0"
          >Уже подобрали более 200 авто нашим клиентам</span
        >
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-20 px-8">
       
        <div
          class="flex flex-col justify-between h-[400px] lg:h-[600px] px-10 bg-[rgba(26,31,34,0.5)] backdrop-blur-[10px] rounded"
        >
           <img
            src="../assets/Noise.png"
            :alt="img"
            class="object-cover object-center w-full  top-0 left-0 h-full opacity-[20%] absolute z-[0]"
        />
          <div class="flex pt-2 z-[10]">
            <div class="text-[24px] font-bold uppercase">
              Выездная диагностика
            </div>
          </div>
          <div class="flex flex-col justify-start z-[10]">
            <ul>
              <li>
                Проверим по 10 пунктам
              </li>
              <li>
                Проверим по 10 пунктам
              </li>
            </ul>
          </div>
          <div class="flex flex-col items-center pb-4 z-[10]">
            <span class="text-[24px] font-bold uppercase">
              2 000 руб.
            </span>
            <button
              class="mx-10 px-6 py-4 bg-gradient-to-r from-[#303483] bg-[#1B1E58] hover:bg-[#303483] text-white mt-4 rounded"
            >
              Заказать диагностику
            </button>
          </div>
        </div>
        <div
          class="flex flex-col justify-between h-[400px] lg:h-[600px] px-10 bg-[rgba(26,31,34,0.5)] backdrop-blur-[10px] rounded"
        >
           <img
            src="../assets/Noise.png"
            :alt="img"
            class="object-cover object-center w-full  top-0 left-0 h-full opacity-[20%] absolute z-[0]"
        />
          <div class="flex pt-2 z-[10]">
            <div class="text-[24px] font-bold uppercase">
              Подбор авто под ключ
            </div>
          </div>
          <div class="flex flex-col justify-start z-[10]">
            <ul>
              <li>
                Проверим по 10 пунктам
              </li>
              <li>
                Проверим по 10 пунктам
              </li>
            </ul>
          </div>
          <div class="flex flex-col items-center pb-4 z-[10]">
            <span class="text-[24px] font-bold uppercase">
             от 5 000 руб.
            </span>
            <button
              class="mx-10 px-6 py-4 bg-gradient-to-r from-[#303483] bg-[#1B1E58] hover:bg-[#303483] text-white mt-4 rounded"
            >
              Заказать диагностику
            </button>
          </div>
        </div>
        <div
          class="flex flex-col justify-between h-[400px] lg:h-[600px] px-10 bg-[rgba(26,31,34,0.5)] backdrop-blur-[10px] rounded"
        >
           <img
            src="../assets/Noise.png"
            :alt="img"
            class="object-cover object-center w-full  top-0 left-0 h-full opacity-[20%] absolute z-[0]"
        />
          <div class="flex pt-2 z-[10]">
            <div class="text-[24px] font-bold uppercase">
              Поиск авто по параметрам
            </div>
          </div>
          <div class="flex flex-col justify-start z-[10]">
            <ul>
              <li>
                Проверим по 10 пунктам
              </li>
              <li>
                Проверим по 10 пунктам
              </li>
            </ul>
          </div>
          <div class="flex flex-col items-center pb-4 z-[10]">
            <span class="text-[24px] font-bold uppercase">
              от 10 000 руб.
            </span>
            <button
              class="mx-10 px-6 py-4 bg-gradient-to-r from-[#303483] bg-[#1B1E58] hover:bg-[#303483] text-white mt-4 rounded"
            >
              Заказать диагностику
            </button>
          </div>
        </div>
      </div>
      <!-- /.g -->
    </div>
  </section>
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
        this.img = response.data.acf.imgprices
      })

      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style></style>
