<template>
  <q-select borderless v-model="$i18n.locale" :options="langs">
    <template v-slot:selected-item="scope">
      <div class="flex items-center">
        <img class="flag q-mr-sm" :src="`/images/flags/${scope.opt}.png`" />
        {{ scope.opt.toUpperCase() }}
      </div>
    </template>
    <template v-slot:option="scope">
      <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
        <q-item-section avatar>
          <img class="flag" :src="`/images/flags/${scope.opt}.png`" />
        </q-item-section>
        <q-item-section>
          {{ scope.opt.toUpperCase() }}
        </q-item-section>
      </q-item>
    </template></q-select
  >
</template>

<script>
export default {
  name: "LocaleSelection",
  data: () => ({
    langs: []
  }),
  created() {
    const locales = require.context(
      "@/locales",
      true,
      /[A-Za-z0-9-_,\s]+\.json$/i
    );
    locales.keys().forEach(key => {
      const matched = key.match(/([A-Za-z0-9-_]+)\./i);
      if (matched && matched.length > 1) {
        this.langs.push(matched[1]);
      }
    });
  }
};
</script>

<style scoped>
.flag {
  width: 40px;
}
</style>
