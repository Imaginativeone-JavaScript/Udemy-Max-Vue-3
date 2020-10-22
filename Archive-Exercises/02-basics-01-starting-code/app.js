// Connect Vue to the HTML code
// Step 01: Create a Vue app
const app = Vue.createApp({
  data() { // This must be "data"; always returns an object.
    return {
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB: 'Master Vue and Build Amazing Apps!',
      vueLink: 'https://vuejs.org'
    };

  }, 
  methods: { // This objects are all custom
    outputGoal() {
      const randomNumber = Math.random();

      if (randomNumber < 0.5) {
        // return 'Learn Vue!';
        return this.courseGoalA;
      } else {
        // return 'Master Vue!';
        return this.courseGoalB;
      }

    }
  }
});
// console.log(app);

// Which part of the HTML code should be controlled by the Vue app?
// mount();
// I get an error if the Vue instance doesn't have an object parameter.
app.mount('#user-goal'); // String; CSS selector of the HTML element