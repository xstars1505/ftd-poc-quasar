<template>
  <div>
    <div class="flex justify-between">
      <label class="text-h6">Product master</label>
      <q-btn
        label="add"
        color="primary"
        :to="{ name: 'ProductsMasterDetail', params: { id: 'new' } }"
      />
    </div>

    <FilterProductsMaster />
    <TableProductsMaster />
  </div>
</template>

<script>
import FilterProductsMaster from '@/components/super-user/product-master/FilterProductsMaster';
import TableProductsMaster from '@/components/super-user/product-master/TableProductsMaster';
export default {
  name: 'SUProductsMaster',
  components: { TableProductsMaster, FilterProductsMaster }
};
</script>

<style scoped></style>
