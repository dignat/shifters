import Vue from 'vue'
import App from './App.vue'
import {store} from "@/store/store";
import VueJSModal from "vue-js-modal";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false
Vue.use(VueJSModal);
Vue.use(VueMaterial);
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
