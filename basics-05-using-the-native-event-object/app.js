const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    
    outputFullname() {

      if(this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Franklin';
    },

    setName(event, lastName) {
      // this.name = event.target.value + ' ' + lastName;
      this.name = event.target.value;
    },
    resetInput() {
      this.name = '';
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  }
});

app.mount('#events');
