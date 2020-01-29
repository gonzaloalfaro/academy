<template>
  <v-app>
    <div v-if="uri == '/'">
      <router-view></router-view>
    </div>
    <div v-else>
      <Navigation />
    </div>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
  name: "App",
  components: {
    Navigation
  },
  data: () => ({
    uri: window.location.pathname
  })
};
</script>

<style lang="stylus" scoped></style>
