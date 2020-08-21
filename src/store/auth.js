import axios from 'axios';
import router from '@/router';

export const authState = {
  state: {
    userIdentity: null,
    authenticated: false
  },
  getters: {
    roles: (state, getters) => getters.account && getters.account.roles,
    account: state => state.userIdentity,
    authenticated: state => state.authenticated
  },
  mutations: {
    authenticate(state, identity) {
      state.userIdentity = identity;
      state.authenticated = true;
    },
    login(state, { token, rememberMe }) {
      if (rememberMe) {
        localStorage.setItem('authenticationToken', token);
      } else {
        sessionStorage.setItem('authenticationToken', token);
      }
      const requestedUrl = sessionStorage.getItem('requested-url') || '/';
      router.push(requestedUrl).then(
        () => {},
        () => {}
      );
      sessionStorage.removeItem('requested-url');
    },
    logout(state) {
      state.userIdentity = null;
      state.authenticated = false;
      localStorage.removeItem('authenticationToken');
      sessionStorage.removeItem('authenticationToken');
      router.push('/login');
    }
  },
  actions: {
    login({ commit }, { username, password, rememberMe }) {
      axios
        .post('auth/login', {
          username,
          password,
          rememberMe
        })
        .then(data => {
          commit('login', { token: data.data.access_token, rememberMe });
        });
    },
    logout({ commit }) {
      axios.post('auth/logout', {}).then(
        () => commit('logout'),
        () => {}
      );
    }
  }
};
