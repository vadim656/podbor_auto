<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class=" bg-[#1A1F22]  pb-8 min-h-screen">
    <div class="w-full text-center py-8">
      <h3 class="text-[24px] text-white lg:text-[36px] font-bold ">
        Услуги
      </h3>
    </div>
    <ul
      role="list"
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  container mx-auto px-4 sm:px-0"
    >
      <li
        v-for="service in sortedArray"
        :key="service.id"
        class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 rounded overflow-hidden anime-el"
      >
        <div class="flex-1 flex flex-col pb-8">
          <img
            v-if="service.acf.service_img.length != null"
            class="w-full h-[150px] sm:h-[250px] flex-shrink-0 mx-auto object-cover"
            :src="service.acf.service_img"
            alt=""
          />
          <h3 class="mt-6 px-2 text-[14px] sm:text-[18px]  font-bold">
            {{ service.acf.service_cat }}
          </h3>
          <dl class="my-2 flex-grow flex flex-col justify-between">
            <dt class="sr-only">Title</dt>
            <dd class="text-gray-500 text-[12px] sm:text-[14px] mb-4">
              {{ service.acf.service_name }}
            </dd>
            <dt class="sr-only">Role</dt>
            <dd class="mt-3">
              <span
                class="sm:mx-10 px-6 py-4 bg-gradient-to-r from-[#303483] bg-[#1B1E58] text-white mt-4 rounded"
                >{{ service.acf.service_price }}</span
              >
            </dd>
          </dl>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="w-0 flex-1 flex">
              <a
                href="https://api.whatsapp.com/message/RP6FT527GD6SI1"
                target="_blank"
                class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
              >
                <svg
                  width="23"
                  height="23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.3127 4.14624C17.2668 2.09546 14.5422 0.967529 11.6467 0.967529C5.67017 0.967529 0.806885 5.83081 0.806885 11.8074C0.806885 13.7166 1.30493 15.5818 2.2522 17.2273L0.714111 22.8425L6.46118 21.3337C8.04321 22.198 9.82544 22.6521 11.6418 22.6521H11.6467C17.6184 22.6521 22.5891 17.7888 22.5891 11.8123C22.5891 8.91675 21.3586 6.19702 19.3127 4.14624V4.14624ZM11.6467 20.8259C10.0256 20.8259 8.43872 20.3914 7.05688 19.571L6.72974 19.3757L3.32153 20.2693L4.22974 16.9441L4.01489 16.6023C3.11157 15.1667 2.63794 13.5115 2.63794 11.8074C2.63794 6.84155 6.68091 2.79858 11.6516 2.79858C14.0588 2.79858 16.3196 3.73608 18.0188 5.44019C19.718 7.14429 20.7629 9.40503 20.7581 11.8123C20.7581 16.783 16.6125 20.8259 11.6467 20.8259V20.8259ZM16.5881 14.0779C16.3196 13.9412 14.9866 13.2869 14.7375 13.199C14.4885 13.1062 14.3079 13.0623 14.1272 13.3357C13.9465 13.6091 13.429 14.2146 13.2678 14.4001C13.1116 14.5808 12.9504 14.6052 12.6819 14.4685C11.0901 13.6726 10.0452 13.0476 8.99536 11.2458C8.71704 10.7673 9.27368 10.8015 9.79126 9.76636C9.87915 9.58569 9.8352 9.42944 9.76685 9.29272C9.69849 9.15601 9.15649 7.823 8.93188 7.28101C8.71216 6.75366 8.48755 6.8269 8.32153 6.81714C8.16528 6.80737 7.98462 6.80737 7.80395 6.80737C7.62329 6.80737 7.33032 6.87573 7.0813 7.14429C6.83228 7.41772 6.13403 8.07202 6.13403 9.40503C6.13403 10.738 7.10571 12.0271 7.23755 12.2078C7.37427 12.3884 9.14673 15.1228 11.8665 16.2996C13.5852 17.0417 14.259 17.1052 15.1184 16.9783C15.6409 16.9001 16.72 16.324 16.9446 15.6892C17.1692 15.0544 17.1692 14.5125 17.1008 14.4001C17.0374 14.2781 16.8567 14.2097 16.5881 14.0779Z"
                    fill="gray"
                  />
                </svg>
                <span class="ml-3">WhatsApp</span>
              </a>
            </div>
            <div class="-ml-px w-0 flex-1 flex">
              <a
                href="tel:89624609644"
                class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
              >
                <PhoneIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
                <span class="ml-3">Заказать</span>
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
import { MailIcon, PhoneIcon } from '@heroicons/vue/solid'
import anime from 'animejs/lib/anime.es.js'

export default {
  components: {
    MailIcon,
    PhoneIcon
  },
  data () {
    return {
      services: []
    }
  },
  created () {
    // Simple GET request using fetch
    fetch(
      'http://perfect-podbor.ru/api/wp-json/wp/v2/posts/?categories=11&per_page=30'
    )
      .then(response => response.json())
      .then(data => (this.services = data))
  },
  //Сортировка для вывода последних записей в самый конец по "ID"
  computed: {
    sortedArray: function() {
      function compare(a, b) {
        if (a.id < b.id)
          return -1;
        if (a.id > b.id)
          return 1;
        return 0;
      }

      return this.services.sort(compare);
    }
  },
  updated () {
    var elements = document.querySelectorAll('.anime-el')
    anime({
      targets: elements,
      direction: 'alternate',
      opacity: [0, 1],
      delay: anime.stagger(50, { start: 700 }),
      loop: false,
      easing: 'easeInOutExpo'
    }),
      anime({
        targets: 'h3',
        opacity: [0, 1],
        delay: 500,
        easing: 'easeInOutExpo'
      })
  }
}
</script>
