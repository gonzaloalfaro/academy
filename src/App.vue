<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
//import Home from "./components/Home";

export default {
  name: "App",

  components: {
    //Home
  },

  data: () => ({
    //
    drawer: null,
    items: [
      { title: "Home", icon: "mdi-home" },
      { title: "About", icon: "mdi-compass" }
    ]
  })
};
</script>
