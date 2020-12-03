<template>
  <div>
    <the-header></the-header>
    <!-- <TheHeader /> -->
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <active-goals v-if="selectedComponent==='active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent==='manage-goals'"></manage-goals>
  </div>
</template>

<script>
import TheHeader from   './components/TheHeader.vue'; // Moved from main.js (Global) to App.vue (Local)
// import BadgeList from   './components/BadgeList.vue';
// import UserInfo  from   './components/UserInfo.vue';
// import CourseGoals from './components/CourseGoals.vue'
import ActiveGoals from './components/ActiveGoals.vue'
import ManageGoals from './components/ManageGoals.vue'

export default {
  // components: { 'the-header': TheHeader }, // TheHeader Component moved to local registration
  // components: { TheHeader: TheHeader }, // TheHeader Component moved to local registration
  components: { 
    TheHeader, 
    // BadgeList, 
    // UserInfo,
    // CourseGoals,
    ActiveGoals,
    ManageGoals
  }, // TheHeader Component moved to local registration
  
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.setSelectedComponent = cmp;
      console.log('You just selected a component')
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>