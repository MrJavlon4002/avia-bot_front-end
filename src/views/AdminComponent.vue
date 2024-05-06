<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      imageUrl: '',
      new_item: {
        title: '',
        text: '',
        image: null,
        time: '',
      },
    }
  },
  methods: {
    onChange(e) {
      const file = e.target.files[0]
      this.new_item.image = file
      this.imageUrl = URL.createObjectURL(file)
      this.getTime()
    },
    getTime() {
      const date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      this.new_item.time = (`${day}-${month}-${year}`);
      console.log(this.new_item.time);
      
    }
  },
})
</script>

<template>
  <form action="">
    <div class=" flex flex-col gap-10 py-[100px] px-[10%]">

      <!-- Title -->
      <div class="flex flex-col">
        <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm font-medium leading-6">Sarlovhani kiriting</label>
          <div class="mt-2">
            <input type="text" required v-model="new_item.title" name="first-name" id="first-name" autocomplete="given-name"
              class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 outline-none ring-inset ring-mainGreen placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-darkGreen sm:text-sm sm:leading-6">
          </div>
        </div>
      </div>

      <!-- Text -->
      <div class="col-span-full">
        <label for="text" class="block text-sm font-medium leading-6 text-gray-900">Yangilik matnini kiriting</label>
        <div class="mt-2">
          <textarea id="text" required v-model="new_item.text" name="about" rows="20"
            class="p-[10px] block w-full rounded-md border-0 outline-none py-1.5 shadow-sm ring-1 ring-inset ring-darkGreen focus:ring-2 focus:ring-inset focus:ring-darkGreen sm:text-sm sm:leading-6"></textarea>
        </div>
      </div>


      <!-- Image Reciever -->
      <div class="col-span-full">
        <label for="cover-photo" class="block text-sm font-medium leading-6">Rasmni kiriting</label>
        <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <div class="text-center">
            <svg class="mx-auto h-12 w-12 text-mainGreen" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                clip-rule="evenodd" />
            </svg>
            <div class="mt-4 flex text-sm leading-6 ">
              <label for="image-upload"
                class="relative text-mainGreen cursor-pointer rounded-md bg-white font-semibold focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-darkGreen">
                <span class=" text-mainGreen">Upload a file</span>
                <input id="image-upload" accept="image/jpeg" @change=onChange name="image" type="file" class="sr-only">
              </label>
              <p class="pl-1">or drag and drop</p>
            </div>
            <p class="text-xs leading-5">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      </div>

      <img v-if="imageUrl" :src="imageUrl" class="uploading-image" />

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" class="text-lg font-semibold leading-6 text-gray-900">Cancel</button>
        <button type="submit"
          class="rounded-md bg-mainGreen px-5 py-2 text-lg font-semibold text-white shadow-sm hover:bg-mainGreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mainGreen">Save</button>
      </div>
    </div>
  </form>
</template>