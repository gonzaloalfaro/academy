<template>
  <v-container>
    <v-card>
      <v-container>
        <v-row justify="center">
          <v-col cols="auto" xs="12" sm="12" md="4" align="center">
            <v-card class="mx-auto" max-width="250" raised shaped>
              <v-img
                :src="playlist.picture_xl"
                max-height="250"
              ></v-img>
            </v-card>
            <v-row justify="center" class="mt-5">
              <v-icon medium color="dark darken-2">mdi-heart-outline</v-icon>
              <!-- <v-icon medium color="dark darken-2">mdi-heart</v-icon> -->
              <div class="mx-2"></div>
              <v-icon medium color="dark darken-2">mdi-sort-variant</v-icon>
              <div class="mx-2"></div>
              <a :href="playlist.link" target="_blank">
                <v-icon medium color="success">mdi-spotify</v-icon>
              </a>
            </v-row>
            <v-row justify="center" class="mt-3">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="title">
                    {{ playlist.title }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-row>
          </v-col>

          <v-col cols="auto" xs="12" sm="12" md="8">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr></tr>
                </thead>
                <tbody>
                  <tr v-for="(track, index) in tracks" :key="index">
                    <td>
                      <v-btn icon color="dark lighten-2">
                        <v-icon large color="dark"
                          >mdi-play-circle-outline</v-icon
                        >
                        <!-- <v-icon large color="dark">mdi-play-circle</v-icon> -->
                      </v-btn>
                    </td>
                    <td>
                      <v-btn icon color="dark lighten-2">
                        <v-icon medium color="dark">mdi-heart-outline</v-icon>
                        <!-- <v-icon medium color="dark">mdi-heart</v-icon> -->
                      </v-btn>
                    </td>
                    <td> {{ track.title }} </td>
                    <td> {{ track.artist.name }} </td>
                    <td> {{ track.duration }} </td>
                    <td>
                      <a :href="track.link" target="_blank">
                        <v-icon medium color="success">mdi-spotify</v-icon>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Playlist",
  data: () => ({}),
  computed: {
    ...mapState(["playlist", "tracks"])
  },
  methods: {
    ...mapActions(["getPlaylist"])
  },
  created() {
    this.getPlaylist(this.$route.params.id);
  }
};
</script>

<style lang="sass" scoped>
    a
      text-decoration: none
</style>
