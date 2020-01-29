<template>
  <v-container>
    <v-toolbar>
      <!-- <v-form @submit.prevent="filtering(search)"> -->
      <v-text-field
        flat
        hide-details
        label="Search"
        prepend-icon="mdi-magnify"
        single-line
        color="blue-grey darken-4"
        v-model="search"
        @keyup="filtering(search)"
      ></v-text-field>
      <!-- </v-form> -->
      <v-btn icon @click="clearSearch()">
        <v-icon>mdi-notification-clear-all</v-icon>
      </v-btn>
    </v-toolbar>

    <v-row class="fill-height mt-5" align="center">
      <template v-for="(top, index) in filterTops">
        <v-col :key="index" cols="12" xs="6" sm="4" md="3">
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto" color="grey lighten-4">
              <v-img :src="top.album.cover_xl">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out cyan darken-3 v-card--reveal headline white--text text-center"
                    style="height: 100%;"
                  >
                    {{ top.title }}
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text class="pt-2" style="position: relative;">
                <v-btn
                  absolute
                  text 
                  color="transparent"
                  fab
                  x-small
                  right
                  top
                >
                  <aplayer
                    :audio="{
                      name: top.title,
                      artist: top.artist.name,
                      url: top.preview,
                      cover: top.album.cover_small
                    }"
                    mini
                  />
                </v-btn>

                <div class="font-weight blue-grey--text title">
                  {{ top.title }}
                </div>
                <h3 class="font-weight-light cyan--text subtitle-1">
                  {{ top.artist.name }}
                </h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Explore",
  data: () => ({
    search: ""
  }),
  computed: {
    ...mapState(["tops"]),
    ...mapGetters(["filterTops"])
  },
  methods: {
    ...mapMutations(["filtering", "clearSearching"]),
    ...mapActions(["getTops"]),
    clearSearch() {
      this.search = "";
      this.clearSearching();
    }
  },
  created() {
    this.getTops();
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

  .aplayer.aplayer-narrow .aplayer-body, .aplayer.aplayer-narrow .aplayer-pic
    height: 50px !important
    width: 50px !important
    border-radius: 50%

  .aplayer.aplayer-narrow
    width: 50px
    border-radius: 50%
</style>
