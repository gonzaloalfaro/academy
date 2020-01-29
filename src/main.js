import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'

//https://aplayer.moefe.org/
import APlayer from '@moefe/vue-aplayer'
Vue.use(APlayer)

//https://vuelidate.js.org/
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

Vue.use(VueAxios, axios)

//CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')