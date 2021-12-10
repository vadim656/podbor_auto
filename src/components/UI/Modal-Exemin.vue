<template>
  <div class="modal-backdrop px-20">
    <div class="modal rounded-2xl ">
      <header class="modal-header text-[black]">
        <slot name="header">
          Список как я понял
        </slot>
        <!-- <button
          type="button"
          class="btn-close"
          @click="close"
        >
          x
        </button> -->
      </header>

      <section class="modal-body text-[black] rounded-2xl">
        <slot name="body" class="">
          Текст
        </slot>
       </section>

      <footer class="modal-footer text-[black]">
        <button
          type="button"
          class="btn-green bg-gradient-to-r from-[#303483] bg-[#1B1E58] px-4 py-2 text-white rounded"
          @click="close"
        >
          Закрыть
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999999;
  }

  .modal {
    background: #FFFFFF;
    overflow-x: auto;
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
    flex-direction: column;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 40px 20px;
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