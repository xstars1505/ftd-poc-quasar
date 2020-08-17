<template>
  <component :is="usedComponent" />
</template>

<script>
import SUHome from '@/views/super-user/SUHome';
import EUHome from '@/views/end-user/EUHome';

export default {
  name: 'Home',
  components: { SUHome, EUHome },
  computed: {
    usedComponent() {
      const role =
        (this.$store.getters.account && this.$store.getters.account.roles) ||
        [];
      return role.includes('ROLE_AGENCY') ? 'SUHome' : 'EUHome';
    }
  }
};
</script>

<style scoped></style>
