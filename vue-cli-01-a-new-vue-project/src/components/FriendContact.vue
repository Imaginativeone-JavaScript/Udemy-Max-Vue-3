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
    // props: [
    //   'name',
    //   'phoneNumber',
    //   'emailAddress',
    //   'isFavorite' // New Prop
    // ],
    props: {
      name: {
        type: String,
        required: true
      },
      phoneNumber: {
        type: String,
        required: true
      },
      emailAddress: {
        type: String,
        required: true
      },
      isFavorite: {
        type: String,
        required: false,
        default: '0', // could also be a function() {}
        validator: function(value) {
          console.log('value', value);
          return value === '1' || value === '0'
        }
      }
    },
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
