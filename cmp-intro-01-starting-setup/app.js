const app = Vue.createApp({
  
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '(410) 123-4567',
          email: 'manuel@localhost.com'
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '(410) 123-4568',
          email: 'julie@localhost.com'
        }
      ]
    }
  }
});

app.mount('#app');
