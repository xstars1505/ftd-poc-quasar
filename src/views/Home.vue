<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header">
      <q-btn
        class="drawer-button xs"
        flat
        @click="drawer = !drawer"
        round
        dense
        icon="menu"
      />

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
      <div class="flex">
        <LocaleSelection />
        <ProfileButton />
      </div>
    </q-header>

    <Drawer />

    <q-page-container>
      <q-page padding>
        <p>This is home page</p>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import LocaleSelection from '@/components/LocaleSelection';
import ProfileButton from '@/components/ProfileButton';
import Drawer from '@/components/Drawer';

export default {
  name: 'Home',
  components: { Drawer, ProfileButton, LocaleSelection },
  data: () => ({
    text: ''
  })
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

.drawer-button {
  color: #8392a5;
}
</style>
