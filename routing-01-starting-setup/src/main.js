import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'; // 1, 5

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue'; // 7
import UsersList from './components/users/UsersList.vue'; // 10
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';

import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({     // 2
  history: createWebHistory(),    // 4
  routes: [                       // 3
    { path: '/', redirect: '/teams' },
    { 
      name: 'teams',
      path: '/teams', 
      components: {
        default: TeamsList, 
        footer: TeamsFooter,
      }, 
      children: [
        { name: 'team-members', path: ':teamId', component: TeamMembers, props: true },
      ]
    },
    { 
      path: '/users', 
      components: { 
        default: UsersList, 
        footer: UsersFooter
      }
    }, // 9
    { path: '/:notFound(.*)', component: NotFound } // Regex, catchall route
  ],
  linkActiveClass: 'active' // router-link-active is the default, update styling
});

// Where do the routes load/render the components?

const app = createApp(App)

app.use(router); // 11

app.mount('#app');
