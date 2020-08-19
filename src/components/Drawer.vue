<template>
  <q-drawer
    v-model="drawer"
    show-if-above
    :mini="miniState"
    :mini-to-overlay="enableMiniState"
    :width="200"
    :breakpoint="599"
    bordered
  >
    <div class="logo absolute-top">
      <router-link to="/">
        <a
          :class="
            'logo__link ' + (enableMiniState && miniState ? 'logo__small' : '')
          "
        ></a>
      </router-link>
    </div>

    <q-scroll-area class="scroll-area">
      <MenuList :menus="menus" :mini-state="miniState" />
    </q-scroll-area>
  </q-drawer>
</template>

<script>
import MenuList from '@/components/MenuList';
import { Authorities } from '@/constants/app.constants';

export default {
  name: 'Drawer',
  components: { MenuList },
  data: () => ({
    drawer: false,
    miniState: true,
    enableMiniState: false,
    menus: []
  }),
  watch: {
    $route() {
      if (this.enableMiniState) {
        this.miniState = true;
      }
    }
  },
  created() {
    this.getSidebarByRole();
    this.handleWindowResize();
    window.addEventListener('resize', () => {
      this.handleWindowResize();
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', () => {});
  },
  methods: {
    async getSidebarByRole() {
      const sidebarType =
        this.$store.getters.roles &&
        this.$store.getters.roles.includes(Authorities.SUPER_USER)
          ? 'SUSidebar'
          : 'EUSidebar';
      this.menus = await import(`@/constants/sidebar.constant`).then(
        constant => constant[sidebarType]
      );
    },
    handleWindowResize() {
      const width = document.documentElement.clientWidth;
      if (width < 600) {
        this.enableMiniState = false;
        this.miniState = false;
      } else {
        this.enableMiniState = true;
        this.miniState = true;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.logo {
  padding: 16px 0;
  height: 55px;

  &__link {
    display: block;
    background: url('../assets/logo-full.svg') 20px center no-repeat;
    background-size: contain;
    height: 35px;
    transition: all ease-in-out 0.3s;
  }

  &__small {
    background-image: url('../assets/logo-small.svg');
    background-position: 13px center;
  }
}
.scroll-area {
  height: calc(100% - 55px);
  margin-top: 55px;
}
</style>
