import axios from 'axios';
import store from '@/store';
import i18n from '@/i18n';

export default {
  fetch() {
    return axios.get('ftd-uaa/api/v1/me');
  },

  async identity(authorities) {
    let account =
      store.getters.account ||
      (await this.fetch().then(response => response.data));
    if (account) {
      store.commit('authenticated', account);
      i18n.locale = account.lang_key;
      if (authorities.length) {
        for (let i = 0; i < authorities.length; i++) {
          if (account.roles.includes(authorities[i])) {
            return Promise.resolve();
          }
        }
      } else {
        return Promise.resolve();
      }
      return Promise.resolve('/forbidden');
    } else {
      store.commit('logout');
      return Promise.reject();
    }
  }
};
