<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal"/>
    <button @click="setGoal">Set Goal</button>
    <error-alert v-if="inputIsInvalid">
      <h2>Input is Invalid!</h2>
      <p>Please enter at least a few characters...</p>
      <button @click="confirmError">Okay</button>
    </error-alert>
  </div>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
  components: {
    ErrorAlert
  },
  data() {
    return {
      inputIsInvalid: false
    }
  },
  methods: {
    setGoal() {
      // console.log('setGoal()');
      const enteredValue = this.$refs.goal.value; // See line 4
      if (enteredValue === '') {
        // alert('Input must not be empty!');
        this.inputIsInvalid = true;
      }
      // console.log('enteredValue', enteredValue);
    },
    confirmError() {
      this.inputIsInvalid = false;
    }
  }
}
</script>