<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="text-white">
    <div class="max-w-7xl mx-auto py-12  sm:px-6 lg:py-4 mb-4">
      <div class="lg:grid lg:grid-cols-1 lg:gap-8 lg:items-center">
        <h2 class="text-3xl font-extrabold text-center sm:text-left   sm:text-4xl px-4">
          Отзывы реальных клиентов
        </h2>
        <div
          class="mt-8 grid grid-cols-1 p-4 sm:p-0 sm:grid-cols-2 gap-2 md:grid-cols-3 lg:mt-0 lg:grid-cols-2"
        >
          <div
          v-for="item in items"
          :key="item.id"
            class="col-span-1 flex justify-center bg-gray-50 rounded overflow-hidden"
          >
            <img
              class=" object-cover w-full"
              :src="item.acf.reviews_img.url"
              alt="Workcation"
            />
          </div>

          <div>
            <div class="mt-8 sm:flex">
              <div class="rounded-md shadow">
                <a
                  href="https://www.avito.ru/user/6c26b34b44dc63ac6dfc971283d857d4/profile?id=2032976953&src=item&page_from=from_item_card&iid=2032976953"
                  target="_black"
                  class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-[#303483] bg-[#1B1E58]"
                >
                  Посмотреть на Авито
                </a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="https://uslugi.yandex.ru/profile/PerfectAuto-365370?afterWorkerPage=0&isPromotion=1&occupationId=%2Fraznoe&specId=%2Fraznoe%2Favtoekspertiza&text=%D0%B0%D0%B2%D1%82%D0%BE%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80"
                  target="_black"
                  class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[#303483] bg-indigo-100 hover:bg-indigo-200"
                >
                  Посмотреть на Яндекс.Услуги
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      items: []
    }
  },
  created () {
    axios
      .get('http://perfect-podbor.ru/api/wp-json/wp/v2/posts/?categories=12', {})
      .then(response => {
        this.items = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>
