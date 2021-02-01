import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
 export const store = new Vuex.Store({
     state: {
         modalVisibility: false,
         mapPickupVisibility: false,
         mapDropVisibility: false
     },
     mutations: {
         hideModal(state) {
             state.modalVisibility = state.modalVisibility === false;

         },
         hideMapPickUp(state) {
             state.mapPickupVisibility = state.mapPickupVisibility === false;
         },
         hideDropUp(state) {
             state.mapDropVisibility = state.mapDropVisibility === false;
         }
         },
     actions: {
         hideModal({commit}) {
             commit('hideModal');
         },
         hideMapPickUp({commit}) {
             commit('hideMapPickUp');
         },
         hideDropUp({commit}) {
             commit('hideDropUp');
         }
     }
 })
