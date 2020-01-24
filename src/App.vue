<template>
  <v-app>
    <v-sheet height="100%" class="overflow-hidden" style="position: relative;">
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Ruben Peñarrieta</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-sheet>

    <div>
      <v-app-bar color="dark accent-4" dark app class="justify-space-between">
        <v-img src="./assets/spotify.svg" max-height="45" max-width="45" />
        
        <v-autocomplete
          cache-items
          class="mx-4"
          flat
          hide-no-data
          hide-details
          label="Busqueda"
          solo-inverted
          
        ></v-autocomplete>
       
        <v-btn color="dark" @click.stop="drawer = !drawer">Login</v-btn>
      </v-app-bar>
    </div>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
// import Login from "./components/Login";

export default {
  name: "App",

  components: {
    // HelloWorld
    // Login
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
