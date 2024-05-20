<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router'

export default defineComponent({
  data() {
    return {
      role: "admin",
      openNav: true,
    }
  },
  methods: {
    toggleNav() {
      this.openNav = !this.openNav
    },
    closeNav() {
      this.openNav = true
    }
  }
});
</script>

<template>
  <nav class="absolute top-0 bg-silver shadow-xl font-medium text-xl text-mainGreen transition-[.3s] left-0 w-full flex items-center h-20 px-[10%] justify-between">
    <RouterLink @click="closeNav" class="flex font-bold text-3xl gap-2 items-center" to="/">Bojxona <img class=" w-[50px]" src="../assets/images/Airplan Icon.png" alt=""></RouterLink>
    <div class="LINKS lg:top-0 transition-[.3s] flex lg:relative lg:h-auto lg:bg-[transparent] lg:flex-row lg:gap-16 items-center justify-center flex-col lg:w-auto w-full fixed top-0 left-0 h-full z-10  bg-white" :class="{ ' top-[-100%]': openNav }">

      <RouterLink @click="closeNav" to="/" class="hover:text-darkGreen transition-[.3s]">Yangiliklar</RouterLink>

      <RouterLink @click="closeNav" to="/chatbot" class="hover:text-darkGreen transition-[.3s]">Chat Bot</RouterLink>
      
      <RouterLink @click="closeNav" v-if="!role" to="/login" class="flex gap-2.5 items-center hover:text-darkGreen transition-[.3s]">Login <i class="fa-solid fa-arrow-right-to-bracket text-2xl"></i></RouterLink>
      
      <RouterLink @click="closeNav" v-if="role == 'admin' || role == 'superadmin'" to="/admin" class="flex gap-2.5 items-center hover:text-darkGreen transition-[.3s]">Yangilik yozish <i class="fa-solid fa-file-lines text-2xl"></i></RouterLink>
      
      <RouterLink @click="closeNav" v-if="role == 'superadmin'" to="/superadmin" class="flex gap-2.5 items-center hover:text-darkGreen transition-[.3s]">Admin Panel <i class="fa-solid fa-user text-2xl"></i></RouterLink>
      
      <RouterLink @click="closeNav" v-if="role" to="/login" class="flex gap-2.5 items-center hover:text-darkGreen transition-[.3s]">Log Out <i class="fa-solid fa-arrow-right-from-bracket text-2xl"></i></RouterLink>
    </div>
    <div class="buttons lg:hidden relative z-30">
      <button v-if="openNav" @click="toggleNav"><i class="fa-solid fa-bars"></i></button>
      <button v-else @click="toggleNav"><i class="fa-solid fa-x"></i></button>
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