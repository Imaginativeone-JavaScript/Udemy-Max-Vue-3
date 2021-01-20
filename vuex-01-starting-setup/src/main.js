import { createApp } from 'vue';
import { createStore } from 'vuex'; // One store per app

import App from './App.vue';

// $store; state
const store = createStore({

  state() {
    return {
      counter: 0
    }; // a bit like data() in a component
  }

});

const app = createApp(App);

app.use(store);
app.mount('#app');
