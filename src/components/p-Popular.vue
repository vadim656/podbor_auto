<template>
  <div class="grid grid-cols-[2fr,3fr] container mx-auto gap-4">
    <div class="grid grid-cols-1 justify-items-end grid-rows-2 gap-4">
      <div class="bord w-[400px] col-end-auto rounded-lg overflow-hidden bg-gray text-white flex justify-center items-center">
          <span class="uppercase text-2xl font-bold"> Популярные услуги</span>
         
    </div>
      <div class="bord  rounded-lg overflow-hidden w-full">
        <span>Смотреть</span>
        <button>Смотреть все услуги</button>
      </div>
    </div>
    <div class="grid grid-cols-2 grid-rows-[250px,250px] gap-4">
      <div
        class="col-span-2 relative flex justify-center items-center rounded-lg overflow-hidden cursor-pointer"
      >
        <div class="w-full h-full bg-[rgba(31,26,32,.7)] absolute z-2 "></div>
        <img
          class="img-responsive object-cover max-h-[250px] w-full z-1"
          src="../assets/image/01.jpeg"
          alt=""
        />
        <div class="absolute w-full h-full flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="#fff"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
          <router-link to="/" class="ml-8 text-white z-3 uppercase text-2xl">Подбор б/у авто</router-link>
        </div>

        <router-link to="/"></router-link>
      </div>
      <div
        class="relative flex justify-center items-center rounded-lg overflow-hidden cursor-pointer"
      >
        <div class="w-full h-full bg-[rgba(31,26,32,.7)] absolute z-2 "></div>
        <img
          class="img-responsive object-cover max-h-[250px] w-full"
          src="../assets/image/02.jpg"
          alt=""
        />
        <div class="absolute w-full h-full flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="#fff"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
          <router-link to="/" class="ml-8 text-white z-3 uppercase text-2xl">Диагностика автомобиля</router-link>
        </div>
      </div>
      <div
        class="relative flex justify-center items-center rounded-lg overflow-hidden cursor-pointer "
      >
        <div class="w-full h-full bg-[rgba(31,26,32,.7)]  absolute z-2 "></div>
        <img
          class="img-responsive object-cover max-h-[250px] w-full"
          src="../assets/image/03.jpg"
          alt=""
        />
       <div class="absolute w-full h-full flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="#fff"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
          <router-link to="/" class="ml-8 text-white z-3 uppercase text-2xl">Юридическая помощь</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
