import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import "./quasar";
import store from "./store";
import AccountService from "./services/account.service";
import i18n from "./i18n";

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next("/not-match");
  }

  if (to.meta && to.meta.authorities && to.meta.authorities.length > 0) {
    AccountService.hasAnyAuthorityAndCheckAuth(to.meta.authorities).then(
      value => {
        if (!value) {
          // sessionStorage.setItem("requested-url", to.fullPath);
          // if (
          //   localStorage.getItem("authenticationToken") ||
          //   sessionStorage.getItem("authenticationToken")
          // ) {
          //   next("/forbidden");
          //   return;
          // } else {
          //   next("/login");
          // }
        } else {
          next();
        }
      }
    );
  } else {
    // no authorities, so just proceed
    next();
  }
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
