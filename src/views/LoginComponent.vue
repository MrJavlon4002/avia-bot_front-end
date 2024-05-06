<script setup lang="ts">

</script>

<template>
  <div class="relative bg-white w-[100%] lg:w-[450px] h-[500px]">
    <div class="brights">
      <div class="bright bg-mainGreen"></div>
      <div class="bright bg-mainGreen"></div>
    </div>


    <div
      class="absolute bg-white shadow-2xl rounded-3xl w-full h-full flex flex-col mt-10 lg:mt-0 justify-center px-6 py-12">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="text-center text-2xl lg:text-4xl leading-9 tracking-wider text-mainGreen">Sign In</h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6 flex flex-col gap-2 lg:gap-5" action="#" method="POST">
          <div>
            <label for="email"
              class="block text-sm lg:text-base font-extralight tracking-wider leading-6 text-gray-900">Email
              address</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" required
                class="block w-full rounded-md border-0 py-1 lg:py-2.5 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset ring-mainGreen focus:ring-mainGreen focus:bg-mainGreen text-white" />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password"
                class="block text-sm lg:text-base font-extralight tracking-wider leading-6 text-gray-900">Password</label>
            </div>
            <div class="mt-2">
              <input id="password" name="password" type="password" autocomplete="current-password" required
                class="block w-full rounded-md border-0 py-1 lg:py-2.5 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 ring-mainGreen focus:ring-inset focus:ring-mainGreen focus:bg-mainGreen text-white sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <button type="submit"
              class="flex w-full cursor-pointer justify-center rounded-md bg-mainGreen py-3 lg:py-4 px-3 text-base lg:text-xl font-semibold leading-6 shadow-sm hover:bg-[#238547df] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mainGreen text-white">Sign
              in</button>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<style lang="scss">
.brights {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;

  .bright {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    transform: translate(-50%, 0%);
    filter: blur(50px);
    color: #b4ffd3;
  }

  .bright:nth-child(1) {
    top: -25px;
    right: -75px;
  }


  .bright:nth-child(2) {
    bottom: -25px;
    left: 25px;
  }
}</style>