<template>
  <q-btn-dropdown color="primary" flat :outline="false">
    <template v-slot:label>
      <div class="row items-center no-wrap">
        <q-icon left name="account_circle" />
        <div class="text-center">
          {{ accountName }}
        </div>
      </div>
    </template>

    <q-list>
      <q-item clickable v-close-popup @click="logout">
        <q-item-section avatar>
          <q-icon name="exit_to_app" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Log out</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script>
export default {
  name: 'ProfileButton',
  computed: {
    accountName() {
      return this.$store.getters.account && this.$store.getters.account.name;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    }
  }
};
</script>

<style scoped></style>
