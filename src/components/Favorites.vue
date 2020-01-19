<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="6" class="mx-auto">
        <v-card shaped>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title v-text="favorites"></v-card-title>
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-bookmark</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>

        <v-simple-table class="mt-5">
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            <div v-if="favorite.length <= 0"> 
              <p color="white" class="text-center mt-2">No favorite songs</p> 
            </div>
            <tr v_else v-for="fav in favorite" :key="fav.id">
              <td><v-icon medium color="dark">mdi-play-circle</v-icon></td>
              <td> {{ fav.track.name }} </td>
              <td> <span v-for="artist in fav.track.artists" :key="artist.id"> {{ artist.name }}. </span></td>
                
              <td> {{ fav.track.duration_ms }} </td>
              <td><v-icon medium color="error">mdi-delete-sweep</v-icon></td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-col>

      <v-col cols="12" xs="12" sm="12" md="6">
      </v-col>
    </v-row>
    <pre>
      {{  }}
    </pre>
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "Dashboard",

  data: () => ({
    favorites: "Me favorite music"
  }),
  computed: {
    ...mapState(['playlists', 'favorite'])
  },
  methods: {
    ...mapMutations(['addFavorite']),
    ...mapActions(['getPlaylists'])
  }
  
};
</script>
