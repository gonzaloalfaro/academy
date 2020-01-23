<template>
  <v-container>
    <v-sheet class="mx-auto" elevation="8">
      <p class="headline font-weight-bold px-6 pt-6">Top tracks</p>
      <v-slide-group v-model="modelone" class="px-6" center-active show-arrows>
        <v-slide-item v-for="(track, index) in tracks" :key="index">
          <router-link
            :to="{ name: 'track', params: { id: `${track.id}` } }"
          >
            <v-hover v-slot:default="{ hover }">
              <v-card class="ma-4" height="200" width="200">
                <v-img :src="track.album.cover_medium" height="200px">
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out blue-grey darken-4 v-card--reveal headline white--text"
                      style="height: 100%"
                    >
                      {{ track.title }}
                    </div>
                  </v-expand-transition>
                </v-img>
              </v-card>
            </v-hover>
          </router-link>
        </v-slide-item>
      </v-slide-group>

      <p class="headline font-weight-bold px-6 pt-6">Top playlists</p>
      <v-slide-group v-model="modeltwo" class="px-6" center-active show-arrows>
        <v-slide-item v-for="(playlist, index) in playlists" :key="index">
          <router-link
            :to="{ name: 'playlist', params: { id: `${playlist.id}` } }"
          >
            <v-hover v-slot:default="{ hover }">
              <v-card class="ma-4" height="200" width="200">
                <v-img :src="playlist.picture_xl" height="200px">
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out blue-grey darken-4 v-card--reveal headline white--text"
                      style="height: 100%"
                    >
                      {{ playlist.title }}
                    </div>
                  </v-expand-transition>
                </v-img>
              </v-card>
            </v-hover>
          </router-link>
        </v-slide-item>
      </v-slide-group>

      <p class="headline font-weight-bold px-6 pt-6">Top artists</p>
      <v-slide-group v-model="modeltwo" class="px-6" center-active show-arrows>
        <v-slide-item v-for="(artist, index) in artists" :key="index">
          <router-link
            :to="{ name: 'artist', params: { id: `${artist.id}` } }"
          >
            <v-hover v-slot:default="{ hover }">
              <v-card class="ma-4" height="200" width="200">
                <v-img :src="artist.picture_xl" height="200px">
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out blue-grey darken-4 v-card--reveal headline white--text"
                      style="height: 100%"
                    >
                      {{ artist.name }}
                    </div>
                  </v-expand-transition>
                </v-img>
              </v-card>
            </v-hover>
          </router-link>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Welcome",
  data: () => ({
    modelone: null,
    modeltwo: null,
    model: null
  }),
  computed: {
    ...mapState(["tracks", "playlists", "artists"])
  },
  methods: {
    ...mapActions(["getCharts"])
  },
  created() {
    this.getCharts();
  }
};
</script>

<style lang="sass" scoped>
.v-card--reveal
  align-items: center
  bottom: 0
  justify-content: center
  opacity: 0.8
  position: absolute
  width: 100%
</style>
