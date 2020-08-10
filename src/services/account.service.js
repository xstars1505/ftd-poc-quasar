import axios from 'axios';
import store from '@/store';
import router from '@/router';
import i18n from '@/i18n';

export default {
  fetch() {
    return axios.get('ftd-uaa/api/v1/me');
  },

  retrieveAccount() {
    return new Promise(resolve => {
      this.fetch()
        .then(response => {
          store.commit('authenticate');
          const account = response.data;
          if (account) {
            store.commit('authenticated', account);
            i18n.locale = account.lang_key;
            if (sessionStorage.getItem('requested-url')) {
              router.replace(sessionStorage.getItem('requested-url'));
              sessionStorage.removeItem('requested-url');
            } else {
              router.replace('/');
            }
          } else {
            store.commit('logout');
            router.push('/login');
            sessionStorage.removeItem('requested-url');
          }
          resolve(true);
        })
        .catch(() => {
          store.commit('logout');
          router.push('/login');
          resolve(false);
        });
    });
  },

  hasAnyAuthorityAndCheckAuth(authorities) {
    if (typeof authorities === 'string') {
      authorities = [authorities];
    }

    if (!this.authenticated || !this.userAuthorities) {
      const token =
        localStorage.getItem('authenticationToken') ||
        sessionStorage.getItem('authenticationToken');
      if (!store.getters.account && !store.getters.logon && token) {
        return this.retrieveAccount();
      } else {
        router.push('/login');
        return new Promise(resolve => {
          resolve(false);
        });
      }
    }

    for (let i = 0; i < authorities.length; i++) {
      if (this.userAuthorities.includes(authorities[i])) {
        return new Promise(resolve => {
          resolve(true);
        });
      }
    }

    router.push('/forbidden');
    return new Promise(resolve => {
      resolve(false);
    });
  },

  get authenticated() {
    return store.getters.authenticated;
  },

  get userAuthorities() {
    return store.getters.account['roles'];
  }
};
