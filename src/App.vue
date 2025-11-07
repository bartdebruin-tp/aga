
<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import globalDataImport from './data/global.json';
import headerDataImport from './data/header.json';
import footerDataImport from './data/footer.json';
import type { GlobalData, HeaderData, FooterData } from './types/data';

const globalData = globalDataImport as GlobalData;
const headerData = headerDataImport as HeaderData;
const footerData = footerDataImport as FooterData;
</script>



<template>
  <HeaderComponent :data="headerData" :global-data="globalData" />  
  <router-view />
  <FooterComponent :data="footerData" :global-data="globalData" />
</template>

<style scoped>

</style>
