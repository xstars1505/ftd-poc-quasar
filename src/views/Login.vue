<template>
  <div
    class="full-width row wrap justify-center items-center content-center"
    style="height: 100vh"
  >
    <q-card class="col-11 col-sm-8 col-md-5 self-center">
      <q-card-section>
        <div class="q-pa-md">
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input
              v-model="username"
              label="User name*"
              lazy-rules
              :rules="[val => (val && val.length > 0) || 'Required']"
            />

            <q-input
              type="password"
              v-model="password"
              label="Passwords*"
              lazy-rules
              :rules="[val => (val && val.length > 0) || 'Required']"
            />

            <q-checkbox v-model="rememberMe" label="Remember me" />

            <div class="flex justify-end">
              <q-btn label="Submit" type="submit" color="primary" />
              <q-btn
                label="Reset"
                type="reset"
                color="primary"
                flat
                class="q-ml-sm"
              />
            </div>
          </q-form>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import axios from "axios";
import AccountService from "@/services/account.service";

export default {
  username: "Login",
  data() {
    return {
      username: null,
      password: null,
      rememberMe: false
    };
  },
  methods: {
    onSubmit() {
      axios
        .post("auth/login", {
          username: this.username,
          password: this.password,
          rememberMe: this.rememberMe
        })
        .then(data => {
          const token = data.data.access_token;
          if (this.rememberMe) {
            localStorage.setItem("authenticationToken", token);
          } else {
            sessionStorage.setItem("authenticationToken", token);
          }
          AccountService.retrieveAccount();
        });
    },
    onReset() {
      this.username = null;
      this.password = null;
      this.rememberMe = false;
    }
  }
};
</script>

<style scoped></style>
