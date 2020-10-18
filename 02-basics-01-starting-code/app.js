// Connect Vue to the HTML code
// Step 01: Create a Vue app
const app = Vue.createApp({
  
});
// console.log(app);

// Which part of the HTML code should be controlled by the Vue app?
// mount();
// I get an error if the Vue instance doesn't have an object parameter.
app.mount('#user-goal'); // String; CSS selector of the HTML element