# Standard Operating Procedure for Making a Vue App

## Create the global Vue Instance
- Vue Instance

  - const app = Vue.**createApp**({});

## Create the HTML Mount Point
```javascript
// Which part of the HTML code should be controlled by the Vue app?
// mount();
// I get an error if the Vue instance doesn't have an object parameter.
app.mount('#user-goal'); // String; CSS selector of the HTML element
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue Basics</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
    <script src="https://unpkg.com/vue@next" defer></script>
    <script src="app.js" defer></script>
  </head>
  <body>
    <header>
      <h1>Vue Course Goals</h1>
    </header>
    <!-- Mount Point Is Here -->
    <section id="user-goal">
      <h2>My Course Goal</h2>
      <!-- <p>{{ courseGoal }}</p> -->
      <!-- <p v-html="outputGoal()">{{ outputGoal() }}</p> -->
      <p>{{ outputGoal() }}</p>
      <!-- v-bind, and other dynamic values added with Directives -->
      <p>Learn more <a v-bind:href="vueLink">about Vue</a></p>
    </section>
  </body>
</html>
```

## Create the data() Function
  - data() {} - This is a function.

## Create the methods: {} JavaScript Object Property
  - methods: {} - This is an object property, filled with functions, that can connect to data properties using this.dataProperty.

## Fill in the data() Function
  ```javaScript
  data() { // This must be "data"; always returns an object.
    return {
      datum1: 'String A',
      datum2: 'String B',
      vueLink: 'https://vuejs.org'
    };
  }, 
  ```

  ## Fill in the methods: {} JavaScript Object Property
  ```javascript
  methods: { // These functions are all custom
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        // return 'Learn Vue!';
        return this.datum1;
      } else {
        // return 'Master Vue!';
        return this.datum2;
      }
    }
  }
  ```

  ## Interpolate Data Strings Where Needed on the HTML Page

  ## Computed Properties