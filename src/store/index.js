import { createStore } from "vuex";

export default createStore({
  state: {
    username: null,
    accessToken: null,
  },
  mutations: {
    setUser(state, username) {
      state.username = username;
    },
    setToken(state, accessToken) {
      state.accessToken = accessToken;
    },
  },
  actions: {},
  modules: {},
  getters: {
    isLoggedIn(state) {
      return !!state.accessToken;
    },
  },
});
