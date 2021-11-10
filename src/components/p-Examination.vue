<template>
  <section class="flex  justify-center  items-center text-white">
    <div class="container py-8 mt-8 h-full ">
      <div class="w-full flex justify-center h-20">
        <h3 class="text-[36px] font-bold uppercase ">Что мы проверяем</h3>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div
          class="flex p-4"
          v-for="item in items"
          :key="item.id"
        > 
        <div class="w-1/6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
        </div>
        

        <div class="flex flex-col">
            <h3 class="text-[24px] font-bold uppercase">{{ item.title.rendered }}</h3>
            <p>{{ item.content.rendered.replace("<p>", '').replace("</p>", '') }}</p>
            <p>{{ item.id }}</p>
        </div>
          
        </div>
        <div
          class="flex p-4"
          v-for="item in items"
          :key="item.id"
        > 
        <div class="w-1/6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
        </div>
        

        <div class="flex flex-col">
            <h3 class="text-[24px] font-bold uppercase">{{ item.title.rendered }}</h3>
            <p>{{ item.content.rendered.replace("<p>", '').replace("</p>", '') }}</p>
            <p>{{ item.id }}</p>
        </div>
          
        </div>
        <!-- /.flex -->
      </div>
      <div class="w-full flex justify-center ">
          <a class="border-dotted-[#fff] border-b" href="">Как мы работаем</a>
      </div>
    </div>
    <!-- /.container -->
  </section>

  
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      items: [],
      errors: []
    }
  },
  created () {
    axios
      .get('http://perfect-podbor.ru/api/wp-json/wp/v2/posts/?categories=4')
      .then(response => {
        this.items = response.data
      })

      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style></style>
