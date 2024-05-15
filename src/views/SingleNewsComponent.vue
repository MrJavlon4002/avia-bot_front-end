<script lang="ts">
import { useNewsStore } from '@/stores/news_data'
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      item_data: {
        title: '',
        publishedAt: '',
        image: '',
        text: '',
      },
    };
  },
  async created() {
    try {
      const data = await useNewsStore().taking_data() as any[];
      const itemID = Number(this.$route.params.id)
      this.item_data = {
        image: data[itemID-1].image,
        title: data[itemID-1].title,
        publishedAt: this.formattedDate(data[itemID-1].created_at) ,
        text: data[itemID-1].text || '',
      };
    } catch (error) {
      console.error("Failed to load data:", error);
    }
  },
  methods: {
    formattedDate(created_at: string) {
      const date_array = created_at.split('-');
      
      return `${date_array[2].split('T')[0]}. ${date_array[1]}. ${date_array[0]}`
    }
  }
})
</script>

<template>
  <div v-if="item_data.title == ''" class="w-full h-[100vh] flex justify-center items-center">
    <img class="w-[50%] md:w-[30%] animate-pulse" src="../assets/images/Main Logo.jpg" alt="">
  </div>
  <div v-else class="pb-[120px]  flex flex-col gap-10">
    <div class="h-[30vh] md:h-[50vh] overflow-hidden flex items-center justify-center">
      <img :src="item_data.image" class=" w-full" alt="">
    </div>
    <div class="px-[10%] text-justify font-serif flex flex-col gap-8">
      <h1 class="text-3xl">{{ item_data.title }}</h1>
      <p class=" text-lg">{{ item_data.publishedAt }}</p>
      <p v-html="item_data.text">
      </p>
    </div>
  </div>
</template>


<style lang="scss">
  
</style>