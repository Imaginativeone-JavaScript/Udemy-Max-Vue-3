import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'; // 1, 5

import App from './App.vue';

const router = createRouter({   // 2
  history: createWebHistory(),  // 4
  routes: []                    // 3
});

const app = createApp(App)

app.mount('#app');
