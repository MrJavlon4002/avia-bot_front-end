<script lang="ts">
import { useNewsStore } from '@/stores/news_data'
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      news_data: [] as any,
      main_news_data: [] as any[],
      search: '',
      searched_data: [] as any[],
    };
  },
  async created() {
    try {
      const data = await useNewsStore().taking_data() as any[];
      this.news_data = data;
      this.main_news_data = data.slice(0, 6);
    } catch (error) {
      console.error("Failed to load data:", error);
    }
  },
  watch: {
    search: 'Searching'
  },
  methods: {
    async Searching() {

      if (this.search == '') {
        this.searched_data = [];
        return;
      }

      const searchTerm = this.search.trim().toLowerCase();
      this.searched_data = this.news_data.filter((item: { title: string; }) => {
        return item.title.toLowerCase().includes(searchTerm);
      });
    }
  },
})
</script>



<template>
  <div v-if="!news_data.length" class="w-full h-[100vh] overflow-hidden flex justify-center items-center">
    <img class="w-[50%] md:w-[30%] animate-pulse" src="../assets/images/Main Logo.jpg" alt="">
  </div>
  <div v-else class="pt-[120px]  px-[10%] h-auto lg:h-[100vh] flex flex-col gap-10">
    <div>
      <form class=" lg:w-[60%] w-full mx-auto ">
        <div class="relative">
          <div class=" hidden absolute inset-y-0 start-0 md:flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-darkGreen dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" v-model="search" id="default-search"
            class="text-black outline-none block w-full p-2 md:p-3 md:ps-10 text-sm border border-mainGreen rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..." required />
        </div>
      </form>
    </div>


    <div v-if="!search" class="NEWS relative flex flex-col md:grid md:w-full md:grid-cols-3 gap-5">
      <RouterLink :to="`/News/${item.id}`" :key="item" v-for="item of main_news_data" class="cursor-pointer h-[130px]"
        :style="{ backgroundImage: `url(${item.image})` }">
        <div
          class=" text-white px-[5%] transition-[.3s] text-xl absolute pt-[100px] opacity-1 left-0 w-full bottom-[-500%] bg-gradient-to-t from-black to-transparent flex items-end pb-5">
          <h1 class="">{{ item.title }}</h1>
          
        </div>
      </RouterLink>
    </div>

    <div v-if="search" class="w-full min-h-10 flex flex-col gap-5">
      <RouterLink :to="`/News/${item.id}`" v-for="item in searched_data" :key="item.id"
        class="flex flex-col gap-5 sm:flex-row justify-between px-10 py-5 bg-mainGreen shadow-xl hover:shadow-md transition-[.3s] sm:items-center rounded text-white">
        <div class="flex flex-col gap-2">
          <p class="text-lg">{{ item.title }}</p>
        </div>
        <div class="flex gap-5">
          <button type="button"
            class="w-full items-center rounded-md bg-red px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lightRed  transition-[.5s] flex justify-center">
            O'chirish
          </button>
        </div>
      </RouterLink>
    </div>

  </div>

</template>

<style lang="scss">
.NEWS {
  >a {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    flex: 130px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 150%;
    transition: .3s;
  }

  >a:hover {
    background-size: 170% !important;
  }

  >a:hover div {
    opacity: 1;
    bottom: 0;

    h1 {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
>a:hover button {
  top: 10px;
}

  >a:nth-child(7n + 1) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
    height: 280px;

    >div {
      margin-top: 100px;
      font-size: 30px;
      line-height: 30px;
      text-align: justify;
      color: #eaeaea;
    }
  }

  >a:nth-child(n+2) {

    >div {
      font-size: 20px;
      line-height: 25px;
      text-align: justify;
    }
  }

  >a:nth-child(n+4) {
    height: 300px;
  }
}
</style>