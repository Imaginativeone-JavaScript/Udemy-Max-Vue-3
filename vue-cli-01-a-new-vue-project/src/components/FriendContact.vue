<template>
  <!-- See main.js for Component Registration -->
  <li>
    <!-- <h2>{{ name }} {{ friendIsFavorite ? '(Favorite)' : '' }}</h2> -->
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
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
    data() {
      return {
        detailsAreVisible: false,
        // friendIsFavorite replaced by Parent Code
        // The isFavorite prop comes from the Parent
        // friendIsFavorite: this.isFavorite,
      }
    },
    methods: {
      toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
      },
      toggleFavorite() {
        // this.friendIsFavorite = !this.friendIsFavorite;
        this.$emit('toggle-favorite', this.id);
        // Every additional argument serves as emitted data
        // Added 'id' prop in props
        // Need a corresponding bound :id="friend.id" in parent
        // console.log('toggle-favorite $emitted!');
        // console.dir(this);
        // Listen to this in the Parent Component
      }
    }
  };
</script>
