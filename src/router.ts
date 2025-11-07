import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/home.vue';
import Contact from './pages/contact.vue';
import Photos from './pages/photos.vue';
import Location from './pages/location.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/locatie', name: 'Locatie', component: Location },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/fotos', name: 'Photos', component: Photos },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
