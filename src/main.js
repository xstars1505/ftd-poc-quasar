import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import "./quasar";
import store from "./store";
import AccountService from "./services/account.service";

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next();
  }

  if (to.meta && to.meta.authorities && to.meta.authorities.length > 0) {
    AccountService.hasAnyAuthorityAndCheckAuth(to.meta.authorities).then(
      value => {
        if (!value) {
          sessionStorage.setItem("requested-url", to.fullPath);
          if (localStorage.getItem("jhi-authenticationToken")) {
            next("/forbidden");
          } else {
            next();
          }
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
  render: h => h(App)
}).$mount("#app");
