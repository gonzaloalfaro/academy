import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ApplicationID: "392024",
    SecretKey: "b22f394bc4cb275f93c7ed60aa6c77e8",
    tracks: [],
    track: [],
    playlists: [],
    playlist: [],
    artists: [],
    artist: [],
    tracklist: [],
    tops: [],
    info: [],
    searching: ""
  },
  getters: {
    filterTops(state) {
      let filter = [];
      for (const item of state.tops) {
        let name = item.title.toLowerCase();
        if (name.indexOf(state.searching) >= 0) {
          filter.push(item);
        }
      }
      return filter;
    },
    
  },
  mutations: {
    addTops(state, payload) {
      state.tops = payload.data;
    },
    filtering(state, payload) {
      state.searching = payload.toLowerCase();
    },
    clearSearching(state) {
      state.searching = ""
    },
    addCharts(state, payload) {
      state.tracks = payload.tracks.data;
      state.artists = payload.artists.data;
      state.playlists = payload.playlists.data;
    },
    addTrack(state, payload) {
      state.track = payload;
    },
    addPlaylist(state, payload) {
      state.playlist = payload;
      state.tracks = payload.tracks.data;
    },
    addArtist(state, payload) {
      state.artist = payload;
    },
    addTracklist(state, payload) {
      state.tracklist = payload.data;
    }

  },
  actions: {
    //Get list of top tracks (100)
    async getTops({ commit }) {
      try {
        const response = await axios.get(`/https://api.deezer.com/chart/0/tracks?limit=100`);
        commit("addTops", response.data);  
      } catch (error) {
        error;
      }
    },

    //Get	returns the best lists (all)
    async getCharts({ commit }) {
      try {
        const response = await axios.get(`/https://api.deezer.com/chart/`);
        commit("addCharts", response.data);
      } catch (error) {
        error;
      }
    },

    //Get information about the API in the current country
    async getInfo({ state }) {
      try {
        const response = await axios.get(`/https://api.deezer.com/infos/`);
        state.info = response.data;
      } catch (error) {
        error;
      }
    },

    //Get returns a track (id)
    async getTrack({ commit }, id) {
      try {
        const response = await axios.get(
          `/https://api.deezer.com/track/${id}/`
        );
        commit("addTrack", response.data);
      } catch (error) {
        error;
      }
    },

    //Get returns a playlist (id)
    async getPlaylist({ commit }, id) {
      try {
        const response = await axios.get(
          `/https://api.deezer.com/playlist/${id}/`
        );
        commit("addPlaylist", response.data);
      } catch (error) {
        error;
      }
    },

    //Get returns a playlist (id)
    async getArtist({ commit }, id) {
      try {
        const response = await axios.get(
          `/https://api.deezer.com/artist/${id}/`
        );
        commit("addArtist", response.data);
        const tracklist = await axios.get(`/${response.data.tracklist}`);
        commit("addTracklist", tracklist.data);
      } catch (error) {
        error;
      }
    },

    //Get search track, playlist, artist
    async getSearch({ commit }, item) {
      try {
        const response = await axios.get(
          `/https://api.deezer.com/search/${item.track}?q=${item.param}/`
        );
        commit("addTracklist", response.data);
      } catch (error) {
        error;
      }
    }
  },
  modules: {}
});
