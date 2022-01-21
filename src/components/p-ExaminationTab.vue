<template>
  <div
    :class="{
      'grid sm:grid-cols-[3fr,2fr] grid-cols-1 gap-8 justify-items-end justify-between sm:justify-center mb-4 w-full':
        variant === 'horizontal'
    }"
  >
    <ul
      class=" pl-3 sm:pl-0 w-full list-none  rounded-lg sm:text-center  whitespace-nowrap flex flex-wrap sm:grid sm:grid-cols-1 lg:grid-cols-3 gap-4 m-1"
    >
      <li
        v-for="(tab, index) in tabList"
        :key="index"
        class="rounded-lg  flex flex-wrap justify-between sm:justify-center sm:min-w-[250px] sm:items-center sm:h-[90px] overflow-hidden "
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
          class="cursor-pointer flex items-center justify-center sm:min w-300px sm:w-[350px] sm:h-[90px]  flex-shrink-1 py-2 px-4 sm:px-4 cursor-pointer text-[12px] sm:text-[18px]"
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
    </ul>
    <template v-for="(tab, index) in tabList">
      <div
        :key="index"
        v-if="index + 1 === activeTab"
        class="lg:flex flex flex-col   bg-white rounded-lg shadow-xl  text-[#1A1F22]  w-[calc(100%-20px)] lg:w-full h-full mx-auto cursor-pointer"
      >
        <img
          class="sm:rounded-t-lg rounded-b-lg h-[200px] w-full object-cover flex-grow sm:order-first order-last"
          :src="tab.acf.img_tab"
          alt=""
        />
        <span 
        v-html="tab.content.rendered"
        class="mt-1 sm:mt-4 p-4 flex-shrink text-[14px] sm:text-[14px]" 
        >
         
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
