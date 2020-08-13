<template>
  <q-drawer
    v-model="drawer"
    show-if-above
    :mini="miniState"
    :mini-to-overlay="enableMiniState"
    :width="200"
    :breakpoint="599"
    bordered
    v-click-outside="clickOutSide"
  >
    <div class="logo absolute-top">
      <a
        :class="
          'logo__link ' + (enableMiniState && miniState ? 'logo--small' : '')
        "
      ></a>
    </div>

    <q-scroll-area class="scroll-area">
      <q-list padding>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="menu_book" />
          </q-item-section>

          <q-item-section>
            Product catalog
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>

          <q-item-section>
            Order
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="send" />
          </q-item-section>

          <q-item-section>
            Package
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="local_shipping" />
          </q-item-section>

          <q-item-section>
            Deliveries
          </q-item-section>
        </q-item>

        <q-separator />

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="people" />
          </q-item-section>

          <q-item-section>
            Normal users
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
import ClickOutside from 'vue-click-outside';

export default {
  name: 'Drawer',
  directives: {
    ClickOutside
  },
  data: () => ({
    drawer: false,
    miniState: true,
    enableMiniState: false
  }),
  watch: {
    $route() {
      if (this.enableMiniState) {
        this.miniState = true;
      }
    }
  },
  created() {
    this.handleWindowResize();
    window.addEventListener('resize', () => {
      this.handleWindowResize();
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', () => {});
  },
  methods: {
    handleWindowResize() {
      const width = document.documentElement.clientWidth;
      if (width < 600) {
        this.enableMiniState = false;
        this.miniState = false;
      } else {
        this.enableMiniState = true;
        this.miniState = true;
      }
    },
    clickOutSide() {
      const width = document.documentElement.clientWidth;
      if (width >= 600 && width < 1024 && !this.miniState) {
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

  &--small {
    background-image: url('../assets/logo-small.svg');
    background-position: 13px center;
  }
}
.scroll-area {
  height: calc(100% - 55px);
  margin-top: 55px;
}
</style>
