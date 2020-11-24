<template>
  <!-- See main.js for Component Registration -->
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsAreVisible">
    <!-- <ul> -->
      <li><strong>Phone:</strong>{{ friend.phone }}</li>
      <li><strong>Email:</strong>{{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
  export default {
    data() {
      return {
        detailsAreVisible: false,
        friend: {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "(410) 123-4567",
          email: "manuel@localhost.com"
        }
      }
    },
    methods: {
      toggleDetails() {
        // Learning Opportunity
        // this.detailsAreVisible = !detailsAreVisible; // Error, missing 'this'
        this.detailsAreVisible = !this.detailsAreVisible;
        // console.log(this.detailsAreVisible);
      }
    }
  };
</script>
