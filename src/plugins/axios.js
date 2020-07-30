import Vue from "vue";
import axios from "axios";
import router from "../router";

axios.interceptors.request.use(function(config) {
  // default options
  //  Loading.show();
  console.log("sss");
  const token =
    localStorage.getItem("jhi-authenticationToken") ||
    sessionStorage.getItem("jhi-authenticationToken");
  if (token) {
    if (!config.headers) {
      config.headers = {};
    }
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401 || error.response.status === 403) {
      localStorage.removeItem("jhi-authenticationToken");
      sessionStorage.removeItem("jhi-authenticationToken");
      router.push("/login");
    }

    return Promise.reject(error);
  }
);

Vue.prototype.axios = axios;
