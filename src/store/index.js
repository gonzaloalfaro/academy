import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ClientID: "7c362e3454874180b3563814b5d27350",
    ClientSecret: "7574400f18604e2ca1a9b20bdc91b857",
    AccessToken: "BQCKy_EgnYFn3G2etZT847WlsbUeNz8j9A77LspY_kMeGr1EKpVJ2N3rEsFEopJw0-c3RDj7vTSYa9v5EFJtFQn2aIPzeu5RqWQCkp4x_DBO1WSMm_O9i8QDtfdZyGu0UfXa1wO9x-kHgEQ4N8-AaE6X9968MnxZZBt8tbRn60KE3W7mwLL7ImhFZ161xWOo4UPFtAqicZKcj81PbaBOnX9CJNepYzYaTfPqyJP1TrbP24RblaqtnG2ji844HG1Pke4BD0RKCe_p6sS4q2MDg-pmE-BMpA",
    PlaylistID: "37i9dQZEVXbJqfMFK4d691",
    playlists: [],
    // favorite: [],
    genres: {
      genres: []
    },
    searching: ''
  },
  getters: {
    filterGenres(state) {
      let filter = []
      for (const item of state.genres.genres) {
        if(item.indexOf(state.searching) >= 0) {
          filter.push(item)
        }
      }
      return filter
    }
  },
  mutations: {
    filtering(state, payload) {
      state.searching = payload
    },
    // addFavorite(state, music) {
    //   state.favorite.push(music);
    // },
    // addPlaylists(state, playlists) {
    //   state.playlists = playlists;
    // },
    addGenres(state, genres) {
      state.genres = genres;
    }
  },
  actions: {
    // async getPlaylists({ commit, state }) {
    //   try {
    //     const response = await axios.get(
    //       `https://api.spotify.com/v1/playlists/${state.PlaylistID}`,
    //       {
    //         headers: { Authorization: `Bearer ${state.AccessToken}` }
    //       }
    //     );
    //     commit("addPlaylists", response.data);
    //   } catch (error) {
    //     error;
    //   }
    // },

    async getGenres({ commit, state }) {
      try {
        const response = await axios.get(
          `https://api.spotify.com/v1/recommendations/available-genre-seeds`,
          { headers: { Authorization: `Bearer ${state.AccessToken}` } }
        );
        commit("addGenres", response.data)
      } catch (error) {
        error
      }
    }
    
  },
  modules: {}
});
