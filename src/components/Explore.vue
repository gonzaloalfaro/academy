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
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>

    <v-item-group class="mt-5">
      <v-row>
        <v-col
          v-for="(genre, index) in filterGenres"
          :key="index"
          cols="12"
          xs="12"
          sm="4"
          md="3"
        >
          <v-item v-slot:default>
            <router-link :to="{ name: 'playlist', params: { id: genre.name } }">
              <v-card dark height="120">
                <v-img height="120" :src="genre.picture_xl"  class="align-center shadow">
                  <v-scroll-y-transition>
                    <div class="headline text-center">
                      {{ genre.name }}
                    </div>
                  </v-scroll-y-transition>
                </v-img>
              </v-card>
            </router-link>
          </v-item>
        </v-col>
      </v-row>
    </v-item-group>
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
    ...mapState(["genres"]),
    ...mapGetters(["filterGenres"])
  },
  methods: {
    ...mapMutations(["filtering"]),
    ...mapActions(["getGenres"])
  },
  created() {
    this.getGenres();
  }
};
</script>

<style lang="sass" scoped>
a
  text-decoration: none

.shadow:hover 
  opacity: 0.9

</style>
