<script setup lang="ts">
import NavbarComponent from './components/NavbarComponent.vue';
import { RouterView } from 'vue-router'
</script>

<template>
  <NavbarComponent></NavbarComponent>
  <RouterView />
</template>