<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.$store.dispatch("logged_user");
    this.$store.dispatch("viewConfigData");
    this.$store.dispatch("viewUserData");
    this.$store.dispatch("viewGaleries");
  },
};
</script>
