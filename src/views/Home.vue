<template>
  <component :is="usedComponent" />
</template>

<script>
import SUHome from '@/views/super-user/SUHome';
import EUHome from '@/views/end-user/EUHome';
import { Authorities } from '@/constants/app.constants';

export default {
  name: 'Home',
  components: { SUHome, EUHome },
  computed: {
    usedComponent() {
      return this.$store.getters.roles &&
        this.$store.getters.roles.includes(Authorities.SUPER_USER)
        ? 'SUHome'
        : 'EUHome';
    }
  }
};
</script>

<style scoped></style>
