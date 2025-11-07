

<template>
  <GalleryComponent :data="gallery" />
</template>

<script setup lang="ts">
import GalleryComponent from './../components/GalleryComponent.vue';
import galleryData from './../data/gallery-12-oktober.json';
import type { GalleryData } from '../types/data';

const gallery = galleryData as GalleryData;
</script>

<style scoped>

</style>
