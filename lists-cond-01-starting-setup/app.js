const app = Vue.createApp({
  data() {
    // Thanks to v-if, the <p> is GONE, <!-- v-if placeholder -->
    return { 
      enteredGoalValue: '',
      goals: []
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
      this.logGoals();
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
      console.log('Attempted to remove goal');
    },
    logGoals() {
      console.log(this.goals);
    }
  }
});

app.mount('#user-goals');
