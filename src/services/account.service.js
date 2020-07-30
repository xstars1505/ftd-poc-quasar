import axios from "axios";
import store from "@/store";
import router from "@/router";

const SERVER_API_URL = "https://api.ftd-dev.nals.vn/";

export default {
  fetch() {
    return axios.get(SERVER_API_URL + "ftd-uaa/api/v1/me");
  },

  retrieveAccount() {
    return new Promise(resolve => {
      this.fetch()
        .then(response => {
          store.commit("authenticate");
          const account = response.data;
          if (account) {
            store.commit("authenticated", account);
            if (sessionStorage.getItem("requested-url")) {
              router.push(sessionStorage.getItem("requested-url"));
              sessionStorage.removeItem("requested-url");
            } else {
              router.push("/");
            }
          } else {
            store.commit("logout");
            router.push("/login");
            sessionStorage.removeItem("requested-url");
          }
          resolve(true);
        })
        .catch(() => {
          store.commit("logout");
          resolve(false);
        });
    });
  },

  hasAnyAuthorityAndCheckAuth(authorities) {
    if (typeof authorities === "string") {
      authorities = [authorities];
    }

    if (!this.authenticated || !this.userAuthorities) {
      const token =
        localStorage.getItem("jhi-authenticationToken") ||
        sessionStorage.getItem("jhi-authenticationToken");
      if (!store.getters.account && !store.getters.logon && token) {
        return this.retrieveAccount();
      } else {
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

    return new Promise(resolve => {
      resolve(false);
    });
  },

  get authenticated() {
    return store.getters.authenticated;
  },

  get userAuthorities() {
    return store.getters.account["roles"];
  }
};
