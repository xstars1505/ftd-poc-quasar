<template>
  <q-list padding>
    <div v-for="(menu, index) in menus" :key="index">
      <menu-item
        :label="menu.label"
        :icon="menu.icon"
        :to="menu.to"
        v-if="!menu.childMenus"
      />
      <template v-else>
        <q-separator />

        <template v-if="miniState">
          <menu-item
            :label="childMenu.label"
            :icon="childMenu.icon"
            :to="childMenu.to"
            v-for="(childMenu, index) in menu.childMenus"
            :key="index"
          />
        </template>

        <q-expansion-item v-else v-model="menu.expanded" :label="menu.label">
          <menu-item
            :label="childMenu.label"
            :icon="childMenu.icon"
            :to="childMenu.to"
            v-for="(childMenu, index) in menu.childMenus"
            :key="index"
          />
        </q-expansion-item>

        <q-separator />
      </template>
    </div>
  </q-list>
</template>

<script>
import MenuItem from '@/components/MenuItem';

export default {
  name: 'MenuList',
  components: { MenuItem },
  props: ['menus', 'miniState']
};
</script>

<style scoped></style>
