<template>
  <base-container title="Vuex">
    <!-- See main.js for the Vuex Store -->
    <!-- <h3>{{ counter }}</h3> -->
    <the-counter></the-counter>
    <button @click="addOne">Add 1</button>
    <change-counter></change-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter
  },
  // computed: {
  //   counter() {
  //     return this.$store.state.counter;
  //   }
  // },
  methods: {
    addOne() {
      console.log('addOne()');
      // this.$store.state.counter = this.$store.state.counter + 1;
      this.$store.commit('increment'); // The mutation is defined in main.js
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>