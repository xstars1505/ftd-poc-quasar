<template>
  <q-item clickable v-ripple :to="to">
    <q-item-section avatar>
      <q-icon :name="icon"
        ><q-tooltip
          anchor="center right"
          self="center left"
          :offset="[10, 10]"
          >{{ label }}</q-tooltip
        ></q-icon
      >
    </q-item-section>
    <q-item-section>
      {{ label }}
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    to: {
      type: [String, Object],
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped></style>
