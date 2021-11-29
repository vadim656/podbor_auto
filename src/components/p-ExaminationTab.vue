<template>
  <div
    :class="{
      'grid sm:grid-cols-[2fr,1fr] grid-cols-1 gap-8 justify-items-end justify-between sm:justify-center mb-4 w-full':
        variant === 'horizontal'
    }"
  >
    <ul
      class="list-none  rounded-lg text-center overflow-auto whitespace-nowrap mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4"
    >
      <li
        v-for="(tab, index) in tabList"
        :key="index"
        class="rounded-lg max-w-[320px] lg:max-w-[420px]  flex justify-between sm:justify-center items-center h-[90px] overflow-hidden"
        :class="{
          'text-white bg-gradient-to-r from-[#303483] bg-[#1B1E58] shadow-xl':
            index + 1 === activeTab,
          'text-[#1A1F22] bg-white  cursor-pointer': index + 1 !== activeTab
        }"
      >
        <img
          class="hidden sm:block w-full h-[90px] w-[100px] lg:w-[250px] object-center object-cover rounded-lg"
          :src="tab.acf.img_tab"
          :for="`${index}`"
          :alt="tab.acf.img_tab"
        />
        <label
          :for="`${index}`"
          v-text="tab.title.rendered"
          class="cursor-pointer flex items-center justify-center w-[250px] h-[90px]  flex-shrink-1 px-4"
        />
        <router-link 
        class="block lg:hidden flex justify-center items-center pr-1 bg-[#2F3382] text-white h-full w-[150px]"
        to="/">
          
            <!-- <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg> -->
          <span class="text-[12px]">Подробнее</span>
        </router-link>
        <input
          :id="`${index}`"
          type="radio"
          :value="index + 1"
          v-model="activeTab"
          class="hidden w-full h-full"
        />
      </li>
    </ul>
    <template v-for="(tab, index) in tabList">
      <div
        :key="index"
        v-if="index + 1 === activeTab"
        class="lg:flex flex flex-col  bg-white rounded-lg shadow-xl  text-[#1A1F22]  w-full lg:w-full h-full mx-auto hidden"
      >
        <img class="rounded-t-lg" :src="tab.acf.img_desc" alt="" />
        <span class="mt-4 p-4">
          {{ tab.content.rendered.replace(/(\<(\/?[^>]+)>)/g, '') }}
        </span>

        <slot :name="`tabPanel-${index + 1}`" />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    tabList: {
      type: Object,
      required: false,
      default: () => 'Пусто'
    },
    variant: {
      type: String,
      required: false,
      default: () => 'horizontal',
      validator: value => ['horizontal'].includes(value)
    }
  },
  data () {
    return {
      activeTab: 1
    }
  }
}
</script>
