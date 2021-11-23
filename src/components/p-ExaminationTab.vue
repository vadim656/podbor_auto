<template>
  <div
    :class="{
      'flex w-full flex-col justify-between my-4': variant === 'horizontal'
    }"
  >
    <ul
      class="list-none  rounded-lg text-center overflow-auto whitespace-nowrap m-auto justify-between  flex flex-wrap "
    >
      <li
        v-for="(tab, index) in tabList"
        :key="index"
        class="rounded-lg w-[500px] flex justify-center items-center h-[90px]  mt-4 overflow-hidden"
        :class="{
          'text-white bg-gradient-to-r from-[#303483] bg-[#1B1E58] shadow-xl':
            index + 1 === activeTab,
          'text-[#1A1F22] bg-white  cursor-pointer': index + 1 !== activeTab
        }"
      >
        <img
          class="w-full  h-[90px] max-w-[250px] object-center object-cover rounded-lg"
          :src="tab.acf.img_tab"
          :for="`${id}${index}`"
          :alt="tab.acf.img_tab"
        />
        <label
          :for="`${id}${index}`"
          v-text="tab.title.rendered"
          class="cursor-pointer flex items-center justify-center w-[250px] h-[90px]  flex-shrink-1 px-4"
        />
        <input
          :id="`${id}${index}`"
          type="radio"
          :name="`${id}-tab`"
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
        class="flex-grow bg-white rounded-lg shadow-xl p-4 text-[#1A1F22] w-full mt-10"
      >
        {{ tab.content.rendered.replace(/(\<(\/?[^>]+)>)/g, '')  }}
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
      required: false
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
    };
  },
 
}
</script>
