<template>
  <div
    class="full-width row wrap justify-center items-center content-center"
    style="height: 100vh"
  >
    <q-card class="col-11 col-sm-6 col-md-5 self-center">
      <q-card-section>
        <div class="text-h5 q-mt-sm q-mb-xs">Warning</div>
        <p>You dont have right to access</p>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat to="/">Back to home</q-btn>
        <q-btn flat @click="goToLogin">To login</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'Forbidden',
  methods: {
    goToLogin() {
      this.$store.dispatch('logout');
    }
  }
};
</script>

<style scoped></style>
