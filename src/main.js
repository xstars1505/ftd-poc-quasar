import Vue from 'vue';
import './plugins/axios';
import App from './App.vue';
import router from './router';
import './quasar';
import store from './store';
import AccountService from './services/account.service';
import i18n from './i18n';
import '@/filters';
import '@/directives';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next('/not-match');
  }

  const authorities = to.meta && to.meta.authorities;
  if (authorities) {
    AccountService.identity(authorities).then(
      url => {
        if (url === '/forbidden') {
          sessionStorage.setItem('requested-url', to.fullPath);
        }
        next(url);
      },
      () => next(false)
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
}).$mount('#app');
