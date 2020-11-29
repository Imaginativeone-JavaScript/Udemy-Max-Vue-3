<template>
  <!-- See main.js for Component Registration -->
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsAreVisible">
    <!-- <ul> -->
      <li><strong>Phone:</strong> {{ phoneNumber  }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
    <!-- <button @click="deleteFriend">Delete</button> -->
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
  export default {
    props: {
      id: {
        type: String,
        required: true
      },
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
        type: Boolean,
        required: false,
        default: false, // could also be a function() {}
        // validator: function(value) {
        //   console.log('value', value);
        //   return value === '1' || value === '0'
        // }
      }
    },
    emits: ['toggle-favorite', 'delete'], // Kind of an "emit map"
    data() {
      return {
        detailsAreVisible: false,
      }
    },
    methods: {
      toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
      },
      toggleFavorite() {
        this.$emit('toggle-favorite', this.id);
      },
      deleteFriend() {
        console.log('Attempted to Delete Friend');
        // this.$emit('delete');
      }
    }
  };
</script>
