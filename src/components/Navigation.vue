<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-row justify="center" class="my-5">
          <v-col align="center">
            <v-avatar class="profile" color="grey" size="50">
              <v-img src="https://cdn0.iconfinder.com/data/icons/media-yellow/60/013_-_Playlist-512.png"></v-img>
            </v-avatar>
            <!-- <v-list-item-content>
              <v-list-item-title class="title">Marcus Obrien</v-list-item-title>
              <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
            </v-list-item-content> -->
          </v-col>
        </v-row>

        <v-list-item
          v-for="(item, i) in lists"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn @click.stop="miniVariant = !miniVariant" icon>
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <v-btn @click.stop="clipped = !clipped" icon>
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-content>
      
        <router-view></router-view>
      
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      lists: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/welcome"
        },
        {
          icon: "mdi-view-day",
          title: "Explore",
          to: "/explore"
        },
        {
          icon: "mdi-magnify",
          title: "Search",
          to: "/search"
        },
        // {
        //   icon: "mdi-tag-heart",
        //   title: "Favorites",
        //   to: "/favorites"
        // },
        {
          icon: "mdi-chart-bubble",
          title: "About",
          to: "/about"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Academy Music App"
    };
  }
};
</script>
