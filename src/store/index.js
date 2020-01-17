import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ClientID: '7c362e3454874180b3563814b5d27350',
    ClientSecret: '7574400f18604e2ca1a9b20bdc91b857',
    AccessToken: 'BQBXt0iUwIaKYdkqFevI6u9H3LlZPw71Fjb1RoWslZTXr4Q597xSXlVgK8jwaO0cShIXK2NcWWw0urcukAK22V0phdqmm6DrK-NU76FCYkLGRZk87NzdJF_BY2Crm5GuZBPUoTC24DNS_efA6-rNjS-hvuk_PXuK_BpAB2hEMpd_ebojLQrTXpeiVJomamu5ge31CkrDxqkVOEuHLeixyBTyK1ILB_5gJjPYBMTwj8pv_mxlHu12YQ1j3jEpl12VcoEHIxsS9fS5jdNqMc8VpwX1EtjRuw',
    PlaylistID: '37i9dQZEVXbJqfMFK4d691',
    tracks: {},
    favorite: []
  },
  mutations: {
    addFavorite(state, music) {
      state.favorite.push(music)
    },
    addTracks(state, tracks) {
      state.tracks = tracks
    }
  },
  actions: {
    // async requestToken(){
    //   try {
    //     const response = await axios({
    //                       url: 'https://accounts.spotify.com/api/token',
    //                       method: 'post',
    //                       params: {
    //                         grant_type: 'client_credentials'
    //                       },
    //                       headers: {
    //                         'Accept':'application/json',
    //                         'Content-Type': 'application/x-www-form-urlencoded'
    //                       },
    //                       auth: {
    //                         username: '7c362e3454874180b3563814b5d27350',
    //                         password: '7574400f18604e2ca1a9b20bdc91b857'
    //                       }
    //                     })
    //     console.log(response);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    async getTracks({commit, state}) {
     try {
        const response = await axios.get(`https://api.spotify.com/v1/playlists/${state.PlaylistID}/tracks`, {
                        headers: { "Authorization": "Bearer " + state.AccessToken} 
                        });
        commit('addTracks', response.data) 
     } catch (error) {
       error
     } 
    }

  },
  modules: {
  }
})
