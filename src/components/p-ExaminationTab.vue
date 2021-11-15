<template>
  <div
    :class="{
      'flex w-full justify-between my-4': variant === 'horizontal',
    }"
  >
    
    <ul
      class="list-none p-1.5 rounded-lg text-center overflow-auto whitespace-nowrap w-1/2 flex flex-wrap"
    >
      <li
        v-for="(tab, index) in tabList"
        :key="index"
        class="px-4 p-8 rounded-lg w-1/2"
        :class="{
          'text-blue-600 bg-white shadow-xl': index + 1 === activeTab,
          'text-white': index + 1 !== activeTab,
        }"
      >
        <label
          :for="`${_uid}${index}`"
          v-text="tab"
          class="cursor-pointer block"
        />
        <input
          :id="`${_uid}${index}`"
          type="radio"
          :name="`${_uid}-tab`"
          :value="index + 1"
          v-model="activeTab"
          class="hidden"
        />
      </li>
    </ul>
    <template v-for="(tab, index) in tabList">
      <div
        :key="index"
        v-if="index + 1 === activeTab"
        class="flex-grow bg-white rounded-lg shadow-xl p-4 text-[red]"
      >
        <slot :name="`tabPanel-${index + 1}`" />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    tabList: {
      type: Array,
      required: true,
    },
    variant: {
      type: String,
      required: false,
      default: () => "horizontal",
      validator: (value) => ["horizontal"].includes(value),
    },
  },
  data() {
    return {
      activeTab: 1,
    };
  },
};
</script>