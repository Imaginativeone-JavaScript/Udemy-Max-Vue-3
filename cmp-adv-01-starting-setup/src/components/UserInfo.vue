<template>
  <base-card>
    <!-- <header> -->
    <template v-slot:df-header>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </template> 
    <!-- </header> -->
    <!-- Define the default slot on purpose -->
    <template v-slot:default>
      <p>{{ infoText }}</p>
    </template>
  </base-card>
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>
