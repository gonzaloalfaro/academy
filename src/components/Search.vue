<template>
  <v-container>
    <v-toolbar>
      
        <v-text-field
          flat
          hide-details
          label="Search"
          prepend-icon="mdi-magnify"
          single-line
          color="blue-grey darken-4"
          v-model="search"
          clearable
          :error-messages="searchErrors"
          @input="$v.search.$touch()"
          @blur="$v.search.$touch()"
        ></v-text-field>

        <v-select
          single-line
          :items="items"
          class="ml-4"
          hide-details
          v-model="item"
          :error-messages="itemErrors"
          @input="$v.item.$touch()"
          @blur="$v.item.$touch()"
        ></v-select>
        <v-btn icon @click="vSearch(search, item)">
          <v-icon>mdi-send</v-icon>
        </v-btn>
    
    </v-toolbar>

    <v-row class="fill-height mt-5" align="center">
      <template v-for="(track, index) in tracklist">
        <v-col :key="index" cols="12" xs="6" sm="4" md="3" lg="2">
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto" color="grey lighten-4">
              <!-- TRACK -->
              <div v-if="track.type == 'track'">
                <v-img :src="track.album.cover_xl">
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out cyan darken-3 v-card--reveal headline white--text text-center"
                      style="height: 100%;"
                    >
                      {{ track.title }}
                    </div>
                  </v-expand-transition>
                </v-img>
                <v-card-text class="pt-2" style="position: relative;">
                  <router-link :to="{ name: 'track', params: { id: `${track.id}` } }">
                    <v-btn
                      absolute
                      color="cyan darken-4"
                      class="white--text"
                      fab
                      small
                      right
                      top
                    >
                      <v-icon>mdi-play</v-icon>
                    </v-btn>
                  </router-link>
                  <div class="font-weight blue-grey--text title">
                    {{ track.title }}
                  </div>
                  <h3 class="font-weight-light cyan--text subtitle-1">
                    {{ track.artist.name }}
                  </h3>
                </v-card-text>
              </div>

              <!-- PLAYLIST -->
              <div v-if="track.type == 'playlist'">
                <v-img :src="track.picture_medium">
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out cyan darken-3 v-card--reveal headline white--text"
                      style="height: 100%;"
                    >
                      {{ track.title }}
                    </div>
                  </v-expand-transition>
                </v-img>
                <v-card-text class="pt-6" style="position: relative;">
                  <router-link :to="{ name: 'playlist', params: { id: `${track.id}` } }">
                    <v-btn
                      absolute
                      color="cyan darken-4"
                      class="white--text"
                      fab
                      small
                      right
                      top
                    >
                      <v-icon>mdi-play</v-icon>
                    </v-btn>
                  </router-link>  
                  <div class="font-weight blue-grey--text title">
                    {{ track.title }}
                  </div>
                </v-card-text>
              </div>

              <!-- ARTIST -->
              <div v-if="track.type == 'artist'">
                <v-img :src="track.picture_medium">
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out cyan darken-3 v-card--reveal headline white--text"
                      style="height: 100%;"
                    >
                      {{ track.name }}
                    </div>
                  </v-expand-transition>
                </v-img>
                <v-card-text class="pt-6" style="position: relative;">
                  <router-link :to="{ name: 'artist', params: { id: `${track.id}` } }">
                    <v-btn
                      absolute
                      color="cyan darken-4"
                      class="white--text"
                      fab
                      small
                      right
                      top
                    >
                      <v-icon>mdi-play</v-icon>
                    </v-btn>
                  </router-link>
                  <div class="font-weight blue-grey--text title">
                    {{ track.name }}
                  </div>
                </v-card-text>
              </div>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { required } from "vuelidate/lib/validators";

export default {
  name: "Search",
  data: () => ({
    search: "",
    item: "",
    items: ["TRACK", "PLAYLIST", "ARTIST"]
  }),
  validations: {
    search: { required },
    item: { required }
  },
  computed: {
    ...mapState(["tracklist"]),
    searchErrors() {
      const errors = [];
      if (!this.$v.search.$dirty) return errors;
      !this.$v.search.required && errors.push("Enter search.");
      return errors;
    },
    itemErrors() {
      const errors = [];
      if (!this.$v.item.$dirty) return errors;
      !this.$v.item.required && errors.push("Select option.");
      return errors;
    }
  },
  methods: {
    ...mapActions(["getSearch"]),
    vSearch(search, item) {
      if (item == "TRACK") {
        this.getSearch({ track: "track", param: search });
      }
      if (item == "PLAYLIST") {
        this.getSearch({ track: "playlist", param: search });
      }
      if (item == "ARTIST") {
        this.getSearch({ track: "artist", param: search });
      }
    }
  }
};
</script>

<style lang="sass">
a
  text-decoration: none

.v-card--reveal
  align-items: center
  bottom: 0
  justify-content: center
  opacity: .8
  position: absolute
  width: 100%
</style>
