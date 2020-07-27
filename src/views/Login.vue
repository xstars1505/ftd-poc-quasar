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
              v-model="name"
              label="Username*"
              hint="Username"
              lazy-rules
              :rules="[val => (val && val.length > 0) || 'Required']"
            />

            <q-input
              type="password"
              v-model="age"
              label="Passwords*"
              lazy-rules
              :rules="[val => (val && val.length > 0) || 'Required']"
            />

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
export default {
  name: "Login",
  data() {
    return {
      name: null,
      age: null,

      accept: false
    };
  },

  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first"
        });
      } else {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted"
        });
      }
    },
    onReset() {
      this.name = null;
      this.age = null;
      this.accept = false;
    }
  }
};
</script>

<style scoped></style>
