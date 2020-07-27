// import axios from "axios";
// import store from "@/store";
// import VueRouter from "vue-router";
// import TranslationService from "@/locale/translation.service";
//
// class AuthService {
//   init() {
//     this.retrieveProfiles();
//   }
//
//   retrieveProfiles() {
//     axios.get("management/info").then(res => {
//       if (res.data && res.data.activeProfiles) {
//         store.commit(
//           "setRibbonOnProfiles",
//           res.data["display-ribbon-on-profiles"]
//         );
//         store.commit("setActiveProfiles", res.data["activeProfiles"]);
//       }
//     });
//   }
//
//   retrieveAccount() {
//     return new Promise(resolve => {
//       axios
//         .get("api/account")
//         .then(response => {
//           store.commit("authenticate");
//           const account = response.data;
//           if (account) {
//             store.commit("authenticated", account);
//             if (store.getters.currentLanguage !== account.langKey) {
//               store.commit("currentLanguage", account.langKey);
//             }
//             if (sessionStorage.getItem("requested-url")) {
//               this.router.replace(sessionStorage.getItem("requested-url"));
//               sessionStorage.removeItem("requested-url");
//             }
//           } else {
//             store.commit("logout");
//             this.router.push("/");
//             sessionStorage.removeItem("requested-url");
//           }
//           this.translationService.refreshTranslation(
//             store.getters.currentLanguage
//           );
//           resolve(true);
//         })
//         .catch(() => {
//           store.commit("logout");
//           resolve(false);
//         });
//     });
//   }
//
//   hasAnyAuthorityAndCheckAuth(authorities) {
//     if (typeof authorities === "string") {
//       authorities = [authorities];
//     }
//
//     if (!this.authenticated || !this.userAuthorities) {
//       const token =
//         localStorage.getItem("jhi-authenticationToken") ||
//         sessionStorage.getItem("jhi-authenticationToken");
//       if (!store.getters.account && !store.getters.logon && token) {
//         return this.retrieveAccount();
//       } else {
//         return new Promise(resolve => {
//           resolve(false);
//         });
//       }
//     }
//
//     for (let i = 0; i < authorities.length; i++) {
//       if (this.userAuthorities.includes(authorities[i])) {
//         return new Promise(resolve => {
//           resolve(true);
//         });
//       }
//     }
//
//     return new Promise(resolve => {
//       resolve(false);
//     });
//   }
//
//   get authenticated() {
//     return store.getters.authenticated;
//   }
//
//   get userAuthorities() {
//     return store.getters.account.authorities;
//   }
// }
//
// export default new AuthService();
