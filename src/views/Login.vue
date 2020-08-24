<template>
  <div class="row full-width wrap justify-center items-center content-center">
    <div class="col-12 col-sm-8 col-lg-6">
      <div class="row justify-center items-center" style="height: 100vh">
        <div class="col-md-7 gt-sm flex justify-center q-px-lg">
          <div class="image-container">
            <img src="../assets/logo-full.svg" alt="logo" />
          </div>
        </div>

        <div class="col-10 col-sm-7 col-md-5 q-px-md-lg">
          <q-form @submit="onSubmit">
            <div class="text-center q-pb-lg lt-md">
              <img
                class="logo-header"
                src="../assets/logo-full.svg"
                alt="logo-full"
              />
            </div>

            <div class="q-pb-sm">
              <label>Username</label>
              <q-input
                outlined
                dense
                lazy-rules
                v-model="username"
                placeholder="Enter username"
                :rules="[val => (val && val.length > 0) || 'Required']"
              />
            </div>

            <div class="q-pb-sm">
              <div class="flex justify-between items-center">
                <label>Password</label>
                <router-link to="/forgot-password" class="q-link">
                  <span>Forgot password</span>
                </router-link>
              </div>
              <q-input
                outlined
                dense
                lazy-rules
                v-model="password"
                type="password"
                placeholder="Enter password"
                :rules="[val => (val && val.length > 0) || 'Required']"
              />
            </div>

            <q-checkbox v-model="rememberMe" label="Remember me" dense />

            <q-btn
              class="block full-width q-mt-lg"
              label="Sign in"
              type="submit"
              color="primary"
            />
          </q-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    username: null,
    password: null,
    rememberMe: false
  }),
  methods: {
    onSubmit() {
      this.$store.dispatch('login', {
        username: this.username,
        password: this.password,
        rememberMe: this.rememberMe
      });
    }
  }
};
</script>

<style scoped lang="scss">
.logo-header {
  width: 200px;
}
.image-container {
  width: 450px;
}
</style>
