import { createApp } from 'vue';

import App       from './App.vue';
import BaseBadge from './components/BaseBadge.vue';

const app = createApp(App);

app.component('base-badge', BaseBadge); // Used in BadgeList and UserInfo, keep Global

app.mount('#app');
