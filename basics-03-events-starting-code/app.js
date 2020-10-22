const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {

    submitForm() {
      alert('Submitted!');
    },

    setName(event) { // 'event' is given by the browser
      this.name = event.target.value;
    },

    add(incrementor) {
      this.counter += incrementor;
    },

    reduce(decementor) {
      this.counter -= decementor;
    }

  }
});

app.mount('#events');
