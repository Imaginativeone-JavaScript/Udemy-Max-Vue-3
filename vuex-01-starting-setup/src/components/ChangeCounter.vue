<template>
  <button @click="addOne">Add 1</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      console.log('ChangeCounter.vue');
      // this.$store.state.counter++;
      this.$store.commit('increment'); // The mutation is defined in main.js
    }
  }
}
</script>