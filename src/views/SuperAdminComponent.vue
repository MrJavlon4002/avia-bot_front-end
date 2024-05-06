<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      active_input: false,
      new_admin: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    open_new_admin_form() {
      this.active_input = true;
    },
    add_new_admin() {
      if (this.new_admin.email == '' || this.new_admin.password == ''){
        return
      }
      this.active_input = false;
      this.new_admin.email = '';
      this.new_admin.password = '';
    }
  },
})
</script>

<template>
  <div class=" flex flex-col gap-10 py-[100px] px-[10%]">
    <h1>Admin Paneliga xush kelibsiz.</h1>
    <div class=" flex flex-col gap-5">
      <div
        class=" flex flex-col gap-5 sm:flex-row justify-between px-10 py-5 bg-mainGreen shadow-xl hover:shadow-md transition-[.3s] sm:items-center rounded text-white">
        <div class="flex flex-col gap-2">
          <p class=" text-lg">someone@gmail.com</p>
          <p class=" text-sm">someone123</p>
        </div>
        <div class="flex gap-5">
          <button type="button"
            class="w-full items-center rounded-md bg-red px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lightRed  transition-[.5s] flex justify-center">
            O'chirish
          </button>
        </div>
      </div>
      <button v-if="!active_input" @click="open_new_admin_form" class=" bg-lightGreen text-mainGreen px-5 py-5 rounded"><span class=" text-darkGreen">+</span> Yangi Admin qo'shish</button>
      <form v-else class="flex flex-col gap-5 p-5 ring-1 ring-mainGreen rounded">
        <div class="col-span-full">
          <label for="new-email" class="block text-sm font-medium leading-6">Yangi Admin E-mailini kiriting</label>
          <div class="mt-2">
            <input required type="email" v-model="new_admin.email" id="new-email" class="block w-full rounded-md border-0 py-1.5 px-3 shadow-sm ring-1 ring-inset ring-mainGreen outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-darkGreen sm:text-sm sm:leading-6">
          </div>
        </div>
        <div class="col-span-full">
          <label for="new-password" class="block text-sm font-medium leading-6">Yangi Admin parolini kiriting</label>
          <div class="mt-2">
            <input required type="password" v-model="new_admin.password" id="new-password" class="block w-full rounded-md border-0 py-1.5 px-3 shadow-sm ring-1 ring-inset ring-mainGreen outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-darkGreen sm:text-sm sm:leading-6">
          </div>
        </div>
        <button type="button" @click="add_new_admin"
            class="w-full items-center rounded-md bg-mainGreen px-3 py-5 text-md font-semibold text-white shadow-sm hover:bg-darkGreen  transition-[.5s] flex justify-center">
            Qo'shish
          </button>
      </form>
    </div>
  </div>
</template>
