<template>
  <div class="modal-backdrop px-4 sm:px-20 w-full h-full">
    <div class="modal rounded-2xl w-full max-w-[600px]">
      <section class="modal-body text-[#212121] rounded-2xl">
        <div
          class="text-[#212121] text-[14px] bg-scroll overflow-y-auto h-[400px]"
          v-html="info"
        ></div>
        <div class=" flex flex-col sm:hidden">
          <div class="flex justify-center animate-bounce pb-2 pt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </section>

      <footer class="modal-footer text-[#212121] flex justify-center">
        <button
          type="button"
          class="btn-green bg-gradient-to-r from-[#303483] bg-[#1B1E58] w-[80%] max-w-[280px] px-4 py-2 text-white rounded"
          @click="close"
        >
          Закрыть
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Modal',
  methods: {
    close () {
      this.$emit('close')
    }
  },
  data () {
    return {
      info: ''
    }
  },
  created () {
    axios
      .get('http://perfect-podbor.ru/api/wp-json/wp/v2/posts/314', {})
      .then(response => {
        this.info = response.data.acf.modalka
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999999;
}

.modal {
  background: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  border-radius: 8px;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
}

.modal-body {
  position: relative;
  padding: 20px  20px 0 20px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  background: transparent;
}
</style>
