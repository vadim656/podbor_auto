<template>
  <form class="w-full max-w-sm" method="POST" @submit.prevent="submit">
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label
          class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          for="inline-full-name"
        >
          Ваше имя
        </label>
      </div>
      <div class="md:w-2/3">
        <input
          required
          v-model="name"
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="inline-full-name"
          type="text"
          placeholder="Имя"
        />
      </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label
          required
          class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          for="inline-password"
        >
          Телефон
        </label>
      </div>
      <div class="md:w-2/3">
        <input
          v-model="tel"
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="inline-password"
          type="tel"
          placeholder="+7"
        />
      </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3"></div>
      <label class="md:w-2/3 block text-gray-500 font-bold">
        <input class="mr-2 leading-tight" required="required" type="checkbox" />
        <span class="text-sm">
          Согласен на обработку данных.
        </span>
      </label>
    </div>
    <div class="md:flex md:items-center">
      <div class="md:w-1/3"></div>
      <div class="md:w-2/3">
        <button
          @click="submit"
          class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="button"
        >
          Sign Up
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      name: '',
      errors: [],
      tel: '',
      //   TG BOT CONFIG
      //   token: '2144548623:AAGx0ZOfE2p3y73TjSmf16P65LpFCKgxw4Y',
      chatID: '1016837453'
    }
  },
  methods: {
    submit () {
      let fullMessege = this.name + ' ' + this.tel

      console.log(fullMessege)
      const url =
        'https://api.telegram.org/bot2144548623:AAGx0ZOfE2p3y73TjSmf16P65LpFCKgxw4Y/sendMessage?chat_id=1016837453'

      axios
        .post(url, {
          chat: this.chatID,
          text: fullMessege
        })
        .then(response => (this.fullMessege = response.data.id))

        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>

<style></style>
