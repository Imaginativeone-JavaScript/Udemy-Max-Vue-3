import { createApp } from 'vue';

import App       from './App.vue';
import BaseBadge from './components/BaseBadge.vue';
import BaseCard  from './components/BaseCard.vue';

const app = createApp(App);

app.component('base-badge', BaseBadge); // Used in BadgeList and UserInfo, keep Global
app.component('base-card', BaseCard);

app.mount('#app');
