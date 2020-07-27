<template>
  <q-layout view="HHh Lpr lFf">
    <q-header class="header">
      <q-input
        v-model="text"
        dense
        borderless
        placeholder="Search"
        class="custom-search"
      >
        <template v-slot:prepend>
          <q-icon class="search-icon" name="search" />
        </template>
      </q-input>
    </q-header>

    <q-page-container>
      <p>home</p>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      text: "",
      miniState: false,
      leftDrawerOpen: true
    };
  }
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #fff;
  height: 60px;
  padding: 0 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(72, 94, 144, 0.16);
}

.search-icon {
  stroke-width: 2.5px;
  margin-right: 10px;
  color: #8392a5;
}
</style>
