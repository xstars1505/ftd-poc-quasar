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
    logout(state) {
      state.userIdentity = null;
      state.authenticated = false;
      localStorage.removeItem('authenticationToken');
      sessionStorage.removeItem('authenticationToken');
      router.push('/login');
    }
  },
  actions: {
    logout({ commit }) {
      axios.post('auth/logout', {}).then(
        () => commit('logout'),
        () => {}
      );
    }
  }
};
