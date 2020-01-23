<template>
  <v-container>
    <v-card>
      <v-container>
        <v-row justify="center">
          <v-col cols="auto" xs="12" sm="12" md="4" align="center">
            <v-card class="mx-auto" max-width="250" raised shaped>
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
                max-height="250"
              ></v-img>
            </v-card>
            <v-row justify="center" class="mt-5">
              <v-icon medium color="dark darken-2">mdi-heart-outline</v-icon>
              <!-- <v-icon medium color="dark darken-2">mdi-heart</v-icon> -->
              <div class="mx-2"></div>
              <v-icon medium color="dark darken-2">mdi-sort-variant</v-icon>
            </v-row>
            <v-row justify="center" class="mt-3">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="title">
                    {{ track.title }}
                  </v-list-item-title>
                  <v-list-item-subtitle
                    v-for="(contributor, index) in track.contributors"
                    :key="index"
                  >
                    {{ contributor.name }} .
                  </v-list-item-subtitle>
                  <v-list-item-subtitle class="title">
                    Release date: {{ track.release_date }}
                  </v-list-item-subtitle>
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
                  <tr>
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
                    <td>{{ track.title }}</td>
                    <td>{{ track.duration }}</td>
                    <v-spacer></v-spacer>
                    <td>
                      <a :href="track.link" target="_blank">
                        <v-btn icon color="success lighten-2">
                          <v-icon medium color="success">mdi-spotify</v-icon>
                        </v-btn>
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
  name: "Track",
  data: () => ({}),
  computed: {
    ...mapState(["track"])
  },
  methods: {
    ...mapActions(["getTrack"])
  },
  created() {
    this.getTrack(this.$route.params.id);
  }
};
</script>

<style lang="sass" scoped>
    a
      text-decoration: none
</style>
