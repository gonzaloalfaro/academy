<template>
  <v-container>
    <v-card>
      <v-tabs
        background-color="white"
        color="deep-purple accent-4"
        right
        v-model="tabs"
      >
        <v-tab>Tracks</v-tab>
        <v-tab>Playlists</v-tab>

        <v-tabs-items v-model="tabs">
          <v-tab-item>
            <v-container fluid>
              <v-simple-table class="mt-5">
                <thead>
                  <tr></tr>
                </thead>
                <tbody>
                  <tr v-for="index in 10" :key="index">
                    <td>
                      <v-icon medium color="dark">mdi-play-circle</v-icon>
                    </td>
                    <td>My favorite track</td>
                    <td>My favorite artist</td>

                    <td>03:30</td>
                    <td>
                      <v-icon medium color="dark">mdi-delete-sweep</v-icon>
                    </td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-container>
          </v-tab-item>
          <v-tab-item>
            <v-container fluid>
              <v-item-group>
                <v-row>
                  <v-col
                    v-for="n in 7"
                    :key="n"
                    cols="12"
                    xs="12"
                    sm="4"
                    md="3"
                  >
                    <v-hover v-slot:default="{ hover }">
                      <v-card
                        
                        :elevation="hover ? 12 : 2"
                        :class="{ 'on-hover': hover }"
                      >
                        <v-img
                          src="http://lorempixel.com/output/nightlife-q-c-640-480-5.jpg"
                          height="200px"
                          class="onhover align-end"
                        >
                          <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn
                              :class="{ 'show-btns': hover }"
                              icon
                            >
                              <v-icon
                                :class="{ 'show-btns': hover }"
                                large
                              >
                                mdi-play-circle
                              </v-icon>
                            </v-btn>
                          </v-card-actions>
                        </v-img>
                        <v-card-title>
                          My playlist
                        </v-card-title>
                        <v-card-subtitle>
                          51 tracks 
                        </v-card-subtitle>
                      </v-card>
                    </v-hover>
                  </v-col>
                </v-row>
              </v-item-group>
            </v-container>
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
    </v-card>

  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Favorites",
  data: () => ({
    tabs: null
  }),
  computed: {
    ...mapState(["trackFavorites"])
  },
  
};
</script>

<style lang="sass" scoped>

  .show-btns 
    color: rgb(6, 141, 6) !important

</style>
