import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const authState = new Vuex.Store({
  state: {
    token: localStorage.getItem("token") || ""
  },
  getters: {
    authorized: state => !!state.token
  }
});
