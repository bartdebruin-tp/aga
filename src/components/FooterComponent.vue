<template>
  <footer class="text-gray-600 body-font">
    <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a :href="globalData.url" class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <img :src="globalData.logo" :alt="globalData.name" class="w-10"/>
        <span class="ml-3 text-xl">{{ globalData.name }}</span>
      </a>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a 
          v-for="(social, index) in data.social" 
          :key="social.name"
          :href="social.url"
          :class="['text-gray-500', index > 0 ? 'ml-3' : '']"
          :aria-label="social.name"
        >
          <svg v-if="social.icon === 'facebook'" fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
          <svg v-else-if="social.icon === 'instagram'" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
      </span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { FooterData, GlobalData } from '../types/data';

defineProps<{
  data: FooterData;
  globalData: GlobalData;
}>();
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
