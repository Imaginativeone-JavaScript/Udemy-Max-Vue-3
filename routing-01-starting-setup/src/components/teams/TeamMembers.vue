<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <!-- I want to go to the same page with a different -->
    <!-- value for that parameter. -->
    <router-link to="/teams/t2">Go to Team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users', 'teams'],
  props: ['teamId'],
  components: {
    UserItem
  },
  data() {
    return {
      // teamName: 'Test',
      // members: [
      //   { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
      //   { id: 'u2', fullName: 'Max Schwarz', role: 'Engineer' },
      // ],
      teamName: '',
      members: []
    };
  },
  methods: {
    loadTeamMembers(teamId) { // PROBLEM: Only loadable through routing! Add props capability. (route>teamId)
                              // main.js Route config
                              // { path: '/teams/:teamId', component: TeamMembers, props: true }
                              // :teamId is now passed in as a prop
      // const teamId = route.params.teamId // available bc this component in loaded thru the router
      const selectedTeam = this.teams.find(team => team.id === teamId);
      const members = selectedTeam.members;
      const selectedMembers = [];

      for (const member of members) {
        const selectedUser = this.users.find(user => user.id === member);
        selectedMembers.push(selectedUser);
      }
      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    }
  },
  created() {
    // Access to injected data, router data in particular
    this.loadTeamMembers(this.teamId); // used to be this.$route
  },
  watch: { 
    teamId(newId) { // line 39, const teamId = this.$route.params.teamId
      this.loadTeamMembers(newId);
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>