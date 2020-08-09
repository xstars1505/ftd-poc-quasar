<template>
  <q-page class="flex flex-center">
    <q-btn color="primary" label="primary"></q-btn>
    <q-btn color="secondary" label="secondary"></q-btn>
    <img alt="Quasar logo" src="../assets/logo.png" />
    {{ msg }}
  </q-page>
</template>

<style></style>

<script>
export default {
  name: "HelloWorld",
  props: ["msg"]
};
</script>
