<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-12 mx-auto flex flex-wrap">
      <div class="flex w-full mb-20 flex-wrap">
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
          {{ data.title }}
        </h1>
        <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">{{ data.description }}</p>
      </div>
      <div class="flex flex-wrap md:-m-2 -m-1">
        <div class="flex flex-wrap w-1/2">
          <div 
            v-for="(image, index) in leftColumnImages" 
            :key="index"
            :class="['md:p-2 p-1', image.size === 'large' ? 'w-full' : 'w-1/2']"
          >
            <img :alt="image.alt" class="w-full object-cover h-full object-center block" :src="image.src">
          </div>
        </div>
        <div class="flex flex-wrap w-1/2">
          <div 
            v-for="(image, index) in rightColumnImages" 
            :key="index"
            :class="['md:p-2 p-1', image.size === 'large' ? 'w-full' : 'w-1/2']"
          >
            <img :alt="image.alt" class="w-full h-full object-cover object-center block" :src="image.src">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { GalleryData } from '../types/data';

const props = defineProps<{
  data: GalleryData;
}>();

// Split images into left and right columns (first 3 on left, rest on right)
const leftColumnImages = computed(() => props.data.images.slice(0, 3));
const rightColumnImages = computed(() => props.data.images.slice(3));
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
