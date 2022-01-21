<template>
  <div>
    <form>
      <div class="mb-6">
        <label for="" class="block mb-2 text-sm font-medium  "
          >Вам номер телефона {{ formTel }}</label
        >
        <input
          v-model="formTel"
          type="number"
          class="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-[#1A1F22]"
          placeholder="+7"
          required
        />
      </div>
      <div class="mb-6">
        <label for="" class="block mb-2 text-sm font-medium  "
          >Ваше имя {{ nameForm }}</label
        >
        <input
          v-model="nameForm"
          type="text"
          class="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-[#1A1F22]"
          placeholder="Имя"
          required
        />
      </div>
      <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
          <input
            id="remember"
            aria-describedby="remember"
            type="checkbox"
            class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 "
            required
          />
        </div>
        <div class="ml-3 text-sm">
          <label for="remember" class="font-medium  dark:text-gray-300"
            >Соглашаюсь на обработку данных</label
          >
        </div>
      </div>
      <button
        @click="upTelegram"
        type="submit"
        class="bg-gradient-to-r from-[#303483] bg-[#1B1E58] text-[14px] lg:text-[18px]  py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
      >
        Отправить
      </button>
    </form>

    <div class="w-ful flex justify-start mt-10">
      <p class="mr-4">Или напишите нам</p>
      <SocialTelegram class="mr-4" />
      <SocialInsta class="mr-4" />
      <SocialButton class="mr-4" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import SocialTelegram from './SocialTelegram.vue'
import SocialInsta from './SocialInsta.vue'
import SocialButton from './SocialButton.vue'

export default {
  data () {
    return {
      nameForm: '',
      formTel: ''
    }
  },
  components: {
    SocialTelegram,
    SocialInsta,
    SocialButton
  },
  methods: {
    upTelegram () {
      axios
        .post(
          'https://api.telegram.org/bot2144548623:AAGx0ZOfE2p3y73TjSmf16P65LpFCKgxw4Y/sendMessage',
          {
            chat_id: '-617277433',
            text:
              'Имя' +
              ' / ' +
              this.nameForm +
              ' / ' +
              'Телефон' +
              ' / ' +
              this.formTel
          }
        )
        .then(function (response) {
          console.log(response)
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>

<style></style>
