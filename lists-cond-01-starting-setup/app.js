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
    logGoals() {
      console.log(this.goals);
    }
  }
});

app.mount('#user-goals');
