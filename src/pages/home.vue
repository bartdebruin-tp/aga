<template>  
  <HeroComponent :data="heroData" />
  <GalleryComponent :data="galleryData" />
</template>

<script setup lang="ts">
import HeroComponent from '../components/HeroComponent.vue';
import GalleryComponent from '../components/GalleryComponent.vue';
import type { HeroData, GalleryData } from '../types/data';
import heroDataImport from '../data/hero.json';
import galleryDataImport from '../data/gallery-12-oktober.json';

const heroData = heroDataImport as HeroData;
const galleryData = galleryDataImport as GalleryData;
</script>

<style scoped>
</style>
