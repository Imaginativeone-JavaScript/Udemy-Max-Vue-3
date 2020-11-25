<template>
  <!-- See main.js for Component Registration -->
  <li>
    <h2>{{ name }} {{ isFavorite == 1 ? '(Favorite)' : '' }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsAreVisible">
    <!-- <ul> -->
      <li><strong>Phone:</strong> {{ phoneNumber  }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
  export default {
    props: [
      'name',
      'phoneNumber',
      'emailAddress',
      'isFavorite' // New Prop
    ],
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
        this.detailsAreVisible = !this.detailsAreVisible;
      },
      toggleFavorite() {
        
      }
      // Not Allowed, unexpected mutation
      // toggleFavorite() {
      //   if (this.isFavorite === '1') {
      //     this.isFavorite = '0';
      //   } else {
      //     this.isFavorite = '1';
      //   }
      // }
    }
  };
</script>
