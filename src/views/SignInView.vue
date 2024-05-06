<script setup lang="ts">
import LoginComponent from '@/views/LoginComponent.vue';

</script>
<template>
    <div class="flex flex-col lg:flex-row h-[100vh] px-[10%]  bg-white justify-center lg:justify-between  items-center gap-5">
        <div class="hidden lg:block lg:w-[50%] text-mainGreen text-center">
            <h1 class="text-5xl">Welcome to <b>ChatBot</b></h1>
            <p class="mt-3 text-xl">Your virtual assistant who will help you in any matter</p>
        </div>
        <LoginComponent></LoginComponent>
        
    </div>
</template>
