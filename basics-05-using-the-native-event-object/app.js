const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullname: ''
    };
  },

  watch: {
    // name(newValue, oldValue) {
    //   this.fullname = newValue + ' ' + this.lastName;
    // },
    // lastName(value) {
    //   this.fullname = this.name + ' ' + value;
    // }
  },

  computed: {

    fullName() { // Going to use this like a data method

      if(this.name === '') {
        return '';
      }
      // return this.name + ' ' + 'Franklin';
      return this.name + ' ' + this.lastName;

    }

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
