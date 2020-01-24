import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        ClientID: "7c362e3454874180b3563814b5d27350",
        ClientSecret: "7574400f18604e2ca1a9b20bdc91b857",
        AccessToken: "",
        tracks: [],
        track: [],
        playlists: [],
        playlist: [],
        artists: [],
        artist: [],
        tracklist: [],
        genres: [],
        info: [],
        searching: ''
    },
    getters: {
        filterGenres(state) {
            let filter = []
            for (const item of state.genres) {
                if (item.name.indexOf(state.searching) >= 0) {
                    filter.push(item)
                }
            }
            return filter
        }
    },
    mutations: {
        addGenres(state, genres) {
            state.genres = genres;
        },
        filtering(state, payload) {
            state.searching = payload
        },
        addCharts(state, payload) {
            state.tracks = payload.tracks.data
            state.artists = payload.artists.data
            state.playlists = payload.playlists.data
        },
        addPlaylist(state, payload) {
            state.playlist = payload
            state.tracks = payload.tracks.data
        },
        addArtist(state, payload) {
            state.artist = payload
        },
        addTracklist(state, payload) {
            state.tracklist = payload.data
        }

    },
    actions: {
        //Get list of genders (all)
        async getGenres({ commit }) {
            try {
                const response = await axios.get(`/https://api.deezer.com/genre`);
                commit("addGenres", response.data.data)
            } catch (error) {
                error
            }
        },

        //Get	returns the best lists (all)
        async getCharts({ commit }) {
            try {
                const response = await axios.get(`/https://api.deezer.com/chart`)
                commit('addCharts', response.data)
            } catch (error) {
                error
            }
        },

        //Get information about the API in the current country
        async getInfo({ state }) {
            try {
                const response = await axios.get(`/https://api.deezer.com/infos`)
                state.info = response.data
            } catch (error) {
                error
            }
        },

        //Get returns a track (id)
        async getTrack({ state }, id) {
            try {
                const response = await axios.get(`/https://api.deezer.com/track/${id}`)
                state.track = response.data
            } catch (error) {
                error
            }
        },

        //Get returns a playlist (id)
        async getPlaylist({ commit }, id) {
            try {
                const response = await axios.get(`/https://api.deezer.com/playlist/${id}`)
                commit('addPlaylist', response.data)
            } catch (error) {
                error
            }
        },

        //Get returns a playlist (id)
        async getArtist({ commit }, id) {
            try {
                const response = await axios.get(`/https://api.deezer.com/artist/${id}`)
                commit('addArtist', response.data)
                const tracklist = await axios.get(`/${response.data.tracklist}`)
                commit('addTracklist', tracklist.data)
            } catch (error) {
                error
            }
        },

    },
    modules: {}
});