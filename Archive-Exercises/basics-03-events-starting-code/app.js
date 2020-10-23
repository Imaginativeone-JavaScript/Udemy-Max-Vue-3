const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods: {

    submitForm() {
      alert('Submitted!');
    },

    confirmInput(event) {
      this.confirmedName = this.name;
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
