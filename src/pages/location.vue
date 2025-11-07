<script setup lang="ts">
import HeroComponent from '../components/HeroComponent.vue';
import GalleryComponent from '../components/GalleryComponent.vue';
import heroData from '../data/hero.json';
import galleryData from '../data/gallery-12-oktober.json';
import type { HeroData, GalleryData } from '../types/data';

const hero = heroData as HeroData;
const gallery = galleryData as GalleryData;
</script>

<template>
  <HeroComponent :data="hero" />
  <GalleryComponent :data="gallery" />
</template>

<style scoped>

</style>
