Vue.createApp({
  data() {
    return {
      goals: [], // list of goals, key/value pair
      enteredValue: '' // See the Directive on the html page
    };
  },
  methods: {
    addGoal() { // addGoal() is triggered whenever the Button is clicked
                // <button v-on:click="addGoal">Add Goal</button> Button Directive
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    }
  }
}).mount('#app'); // This line applies this Vue app to the <div id="app">...</div> (with the id selector)

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);