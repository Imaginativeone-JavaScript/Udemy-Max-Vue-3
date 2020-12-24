import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'; // 1, 5

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue'; // 7

const router = createRouter({     // 2
  history: createWebHistory(),    // 4
  routes: [                       // 3
    { path: '/teams', component: TeamsList }, // 6, 8
    { path: '/users', component: UsersList } // 9
  ]
});

const app = createApp(App)

app.use(router); // 10

app.mount('#app');
