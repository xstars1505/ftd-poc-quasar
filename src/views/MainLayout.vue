<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header" @click.prevent.stop="hideDrawer">
      <q-btn
        class="drawer-button"
        flat
        @click.prevent.stop="toggleDrawer"
        round
        dense
        icon="menu"
      />

      <div class="flex">
        <LocaleSelection />
        <ProfileButton />
      </div>
    </q-header>

    <Drawer ref="drawer" />

    <q-page-container @click.prevent.stop="hideDrawer">
      <q-page padding>
        <p>This is home page</p>
        <router-view />
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
  methods: {
    toggleDrawer() {
      const width = document.documentElement.clientWidth;
      if (width < 600) {
        this.$refs.drawer.drawer = !this.$refs.drawer.drawer;
      } else if (width >= 600 && width < 1024) {
        this.$refs.drawer.miniState = false;
        this.$refs.drawer.enableMiniState = true;
      } else {
        this.$refs.drawer.miniState = !this.$refs.drawer.miniState;
        this.$refs.drawer.enableMiniState = !this.$refs.drawer.enableMiniState;
      }
    },
    hideDrawer() {
      const width = document.documentElement.clientWidth;
      if (width >= 600 && width < 1024 && !this.$refs.drawer.miniState) {
        this.$refs.drawer.miniState = true;
      }
    }
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

.drawer-button {
  color: #8392a5;
}
</style>
