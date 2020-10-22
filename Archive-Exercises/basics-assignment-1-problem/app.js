// Connect Vue to the HTML code
// Step 01: Create a Vue app
const app = Vue.createApp({

  data() {
    return {
      name: 'Doug Franklin',
      age: 52,
      datum1: 'String A',
      datum2: 'String B',
      imageLink: 'https://vuejs.org'
    }
  },
  methods: {
    favoriteNumber() {
      const randomNumber = Math.random();
      return randomNumber;
    },
    futureAge() {
      return this.age + 5;
    }
  }

});

app.mount('#assignment');
