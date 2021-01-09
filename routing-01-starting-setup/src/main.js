import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'; // 1, 5

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue'; // 7
import UsersList from './components/users/UsersList.vue'; // 10
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({     // 2
  history: createWebHistory(),    // 4
  routes: [                       // 3
    { path: '/', redirect: '/teams' },
    { 
      name: 'teams',
      path: '/teams', component: TeamsList, 
      children: [
        // { path: '/teams/:teamId', component: TeamMembers, props: true },
        { name: 'team-members', path: ':teamId', component: TeamMembers, props: true },
      ]
    },
    { path: '/users', component: UsersList }, // 9
    // { path: '/:notFound(.*)', redirect: '/teams' } // Regex, catchall route
    { path: '/:notFound(.*)', component: NotFound } // Regex, catchall route
  ],
  linkActiveClass: 'active' // router-link-active is the default, update styling
});

// Where do the routes load/render the components?

const app = createApp(App)

app.use(router); // 11

app.mount('#app');
