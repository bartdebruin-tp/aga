<template>
<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" :alt="data.imageAlt" :src="data.image">
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        {{ data.title }}
        <br class="hidden lg:inline-block">{{ data.subtitle }}
      </h1>
      <p class="mb-8 leading-relaxed">{{ data.description }}</p>
      <div class="flex justify-center">
        <a 
          v-for="(button, index) in data.buttons" 
          :key="index"
          :href="button.link"
          :class="[
            'inline-flex border-0 py-2 px-6 focus:outline-none rounded text-lg',
            index > 0 ? 'ml-4' : '',
            button.variant === 'primary' 
              ? 'text-white bg-indigo-500 hover:bg-indigo-600' 
              : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
          ]"
        >
          {{ button.text }}
        </a>
      </div>
    </div>
  </div>
</section>
</template>

<script setup lang="ts">
import type { HeroData } from '../types/data';

defineProps<{
  data: HeroData;
}>();
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
