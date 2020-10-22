const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {

    add(incrementor) {
      this.counter += incrementor;
    },

    reduce(decementor) {
      this.counter -= decementor;
    }

  }
});

app.mount('#events');
