<template>
  <div
    :class="{
      'grid sm:grid-cols-[3fr,2fr] grid-cols-1 gap-8 justify-items-end justify-between sm:justify-center mb-4 w-full':
        variant === 'horizontal'
    }"
  >
    <ul
      class=" pl-8 sm:pl-0 w-full list-none  rounded-lg sm:text-center  whitespace-nowrap flex flex-wrap sm:grid sm:grid-cols-1 lg:grid-cols-3 gap-4 m-1"
    >
      <li
        v-for="(tab, index) in tabList"
        :key="index"
        class="rounded-lg  hidden sm:flex justify-between sm:justify-center w-full min-w-[250px] items-center h-[90px] overflow-hidden "
        :class="{
          'text-white  shadow-xl border-2 border-[#2F3381]':
            index + 1 === activeTab,
          'border border-white  cursor-pointer': index + 1 !== activeTab
        }"
      >
        <!-- <img
          class="hidden sm:block w-full h-[90px] w-[100px] lg:w-[250px] object-center object-cover rounded-lg"
          :src="tab.acf.img_tab"
          :for="`${index}`"
          :alt="tab.acf.img_tab"
        /> -->
        <label
          :for="`${index}`"
          v-text="tab.title.rendered"
          class="cursor-pointer flex items-center justify-center w-300px sm:w-[350px] h-[90px]  flex-shrink-1 px-4 cursor-pointer"
        />
        <!-- <router-link 
        class="block lg:hidden flex justify-center items-center pr-1 bg-[#2F3382] text-white h-full w-[150px]"
        to="/">
          <span class="text-[12px]">Подробнее</span>
        </router-link> -->
        <input
          :id="`${index}`"
          type="radio"
          :value="index + 1"
          v-model="activeTab"
          class="hidden w-full h-full cursor-pointer"
        />
      </li>
      <li v-for="(tab, index) in tabList"
        :key="index"
        class="flex sm:hidden flex-wrap border  sm: py-2 px-4 rounded">
        <span> {{ tab.title.rendered }}</span>

      </li>
    </ul>
    <template v-for="(tab, index) in tabList">
      <div
        :key="index"
        v-if="index + 1 === activeTab"
        class="lg:flex flex flex-col  bg-white rounded-lg shadow-xl  text-[#1A1F22]  w-full lg:w-full h-full mx-auto hidden cursor-pointer"
      >
        <img class="rounded-t-lg h-[200px] w-full object-cover flex-grow" :src="tab.acf.img_tab" alt="" />
        <span class="mt-4 p-4 flex-shrink">
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
  },
  
}
</script>
