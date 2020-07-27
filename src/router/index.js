import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

// router.beforeEach((to, from, next) => {
//   if (!to.matched.length) {
//     next("/not-found");
//   }
//
//   if (to.meta && to.meta.authorities && to.meta.authorities.length > 0) {
//     accountService
//       .hasAnyAuthorityAndCheckAuth(to.meta.authorities)
//       .then(value => {
//         if (!value) {
//           sessionStorage.setItem("requested-url", to.fullPath);
//           next("/forbidden");
//         } else {
//           next();
//         }
//       });
//   } else {
//     // no authorities, so just proceed
//     next();
//   }
// });
