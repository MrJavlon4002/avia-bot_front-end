<script  lang="ts">
import { defineComponent } from 'vue';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RouterLink } from 'vue-router'

export default defineComponent({
  data() {
    return {
      LogedIn: false,
    };
  },
})
</script>
<template>
  <nav class="absolute top-0 bg-silver shadow-xl font-medium text-xl text-mainGreen transition-[.3s] left-0 w-full flex items-center h-20 px-[10%] justify-between">
    <RouterLink class="flex font-bold text-3xl gap-2 items-center" to="/">Bojxona <img class=" w-[50px]" src="../assets/images/Airplan Icon.png" alt=""></RouterLink>
    <div class="LINKS flex gap-16 items-center">
      <RouterLink to="/chatbot" class="hover:text-darkGreen transition-[.3s]">Chat Bot</RouterLink>
      <RouterLink v-if="!LogedIn" to="/login" class="flex gap-2.5 items-center hover:text-darkGreen transition-[.3s]">Login <i class="fa-solid fa-arrow-right-to-bracket text-2xl"></i></RouterLink>
      <RouterLink v-if="LogedIn" to="/login" class="flex gap-2.5 items-center hover:text-darkGreen transition-[.3s]">Log Out <i class="fa-solid fa-arrow-right-from-bracket text-2xl"></i></RouterLink>
    </div>
  </nav>

</template>

<style type="scss">
  .LINKS {
    a {
      display: flex;
      align-items: center;
      position: relative;
      height: 45px;
    }
    a:before {
      z-index: 1;
      content: '';
      position: absolute;
      height: 4px;
      background: #247D48;
      width: 0;
      bottom: 0;
      left: 0;
      transition: .3s;
    }
    a:hover:before {
      width: 100%;
    }
  }
</style>