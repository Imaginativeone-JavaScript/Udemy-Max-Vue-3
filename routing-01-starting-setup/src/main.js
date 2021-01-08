import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'; // 1, 5

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue'; // 7
import UsersList from './components/users/UsersList.vue'; // 10
import TeamMembers from './components/teams/TeamMembers.vue';

const router = createRouter({     // 2
  history: createWebHistory(),    // 4
  routes: [                       // 3
    { path: '/teams', component: TeamsList }, // 6, 8
    { path: '/users', component: UsersList }, // 9
    { path: '/teams/:teamId', component: TeamMembers } // order matters /teams/new needs to be abv
  ],
  linkActiveClass: 'active' // router-link-active is the default, update styling
});

// Where do the routes load/render the components?

const app = createApp(App)

app.use(router); // 11

app.mount('#app');
