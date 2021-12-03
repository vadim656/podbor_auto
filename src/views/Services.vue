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
        v-for="service in services"
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
            {{ service.acf.service_name }}
          </h3>
          <dl class="my-2 flex-grow flex flex-col justify-between">
            <dt class="sr-only">Title</dt>
            <dd class="text-gray-500 text-[12px] sm:text-[14px] mb-4">
              {{ service.acf.service_cat }}
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
                href="https://t.me/foxsisss"
                target="_blank"
                class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
              >
                <svg
                  fill="#9CA3AF"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="w-5 h-5 text-gray-400"
                >
                  <path
                    d="M 20.302734 2.984375 C 20.013769 2.996945 19.748583 3.080055 19.515625 3.171875 C 19.300407 3.256634 18.52754 3.5814726 17.296875 4.0976562 C 16.06621 4.61384 14.435476 5.2982348 12.697266 6.0292969 C 9.2208449 7.4914211 5.314238 9.1361259 3.3125 9.9785156 C 3.243759 10.007156 2.9645852 10.092621 2.65625 10.328125 C 2.3471996 10.564176 2.0039062 11.076462 2.0039062 11.636719 C 2.0039062 12.088671 2.2295201 12.548966 2.5019531 12.8125 C 2.7743861 13.076034 3.0504903 13.199244 3.28125 13.291016 C 3.9563403 13.559857 6.0424892 14.392968 6.9492188 14.755859 C 7.2668647 15.707799 8.0129251 17.950071 8.1875 18.501953 L 8.1855469 18.501953 C 8.3275588 18.951162 8.4659791 19.243913 8.6582031 19.488281 C 8.7543151 19.610465 8.8690398 19.721184 9.0097656 19.808594 C 9.0637596 19.842134 9.1235454 19.868148 9.1835938 19.892578 C 9.191962 19.896131 9.2005867 19.897012 9.2089844 19.900391 L 9.1855469 19.894531 C 9.2029579 19.901531 9.2185841 19.911859 9.2363281 19.917969 C 9.2652427 19.927926 9.2852873 19.927599 9.3242188 19.935547 C 9.4612233 19.977694 9.5979794 20.005859 9.7246094 20.005859 C 10.26822 20.005859 10.601562 19.710938 10.601562 19.710938 L 10.623047 19.695312 L 12.970703 17.708984 L 15.845703 20.367188 C 15.897113 20.439837 16.308174 20.998047 17.261719 20.998047 C 17.829844 20.998047 18.280978 20.718791 18.568359 20.423828 C 18.855741 20.128866 19.034757 19.82706 19.115234 19.417969 L 19.115234 19.414062 L 19.115234 19.412109 C 19.171124 19.121728 21.931641 5.265625 21.931641 5.265625 L 21.925781 5.2890625 C 22.01148 4.9067181 22.036735 4.5369631 21.935547 4.1601562 C 21.834358 3.7833495 21.561271 3.4156252 21.232422 3.2226562 C 20.903572 3.0296874 20.591699 2.9718046 20.302734 2.984375 z M 19.908203 5.1738281 C 19.799749 5.7182284 17.343164 18.059965 17.183594 18.878906 L 14.328125 16.240234 C 13.59209 15.559749 12.44438 15.535812 11.679688 16.181641 L 10.222656 17.414062 L 11 14.375 C 11 14.375 16.362547 8.9468594 16.685547 8.6308594 C 16.945547 8.3778594 17 8.2891719 17 8.2011719 C 17 8.0841719 16.939781 8 16.800781 8 C 16.675781 8 16.506016 8.1197812 16.416016 8.1757812 C 15.267511 8.8918132 10.350132 11.694224 7.96875 13.048828 C 7.8792978 12.995267 7.7913128 12.939666 7.6933594 12.900391 C 6.9119785 12.587666 5.4101276 11.985551 4.53125 11.634766 C 6.6055146 10.76177 10.161156 9.2658083 13.472656 7.8730469 C 15.210571 7.142109 16.840822 6.4570977 18.070312 5.9414062 C 19.108158 5.5060977 19.649538 5.2807035 19.908203 5.1738281 z M 17.152344 19.023438 C 17.152344 19.023438 17.154297 19.023438 17.154297 19.023438 C 17.154234 19.023761 17.152444 19.03095 17.152344 19.03125 C 17.154024 19.022709 17.151187 19.029588 17.152344 19.023438 z"
                  />
                </svg>
                <span class="ml-3">Telegram</span>
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
    fetch('http://perfect-podbor.ru/api/wp-json/wp/v2/posts/?categories=11&per_page=30')
      .then(response => response.json())
      .then(data => (this.services = data))
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
