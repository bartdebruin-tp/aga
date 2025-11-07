<template>
<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a :href="globalData.url" class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <img :src="globalData.logo" :alt="globalData.name" class="w-10"/>
        <span class="ml-3 text-xl">{{ globalData.name }}</span>
      </a>
      <NavBar />
    
    <a :href="data.button.link" class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      {{ data.button.text }}
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </a>
  </div>
</header>
</template>

<script setup lang="ts">
  import NavBar from './NavBar.vue';
  import type { HeaderData, GlobalData } from '../types/data';

  defineProps<{
    data: HeaderData;
    globalData: GlobalData;
  }>();
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
