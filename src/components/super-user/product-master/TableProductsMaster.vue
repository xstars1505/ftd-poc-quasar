<template>
  <q-table
    :data="data"
    :columns="columns"
    color="primary"
    row-key="name"
    :loading="loading"
  >
    <template v-slot:body-cell-edit="props">
      {{ test(props) }}
      <q-td class="text-center" :props="props">
        <q-btn
          flat
          round
          icon="edit"
          :to="{ name: 'ProductsMasterDetail', params: { id: props.row.id } }"
        />
      </q-td>
    </template>
  </q-table>
</template>

<script>
export default {
  name: 'TableProductsMaster',
  data: () => ({
    loading: false,

    columns: [
      {
        name: 'productNo',
        required: true,
        label: 'Product Id',
        align: 'left',
        field: 'productNo'
      },
      {
        name: 'productName',
        align: 'center',
        label: 'Product Name',
        field: 'productName'
      },
      {
        name: 'productNameEN',
        align: 'center',
        label: 'Product Name (EN)',
        field: 'productNameEN'
      },
      {
        name: 'unitPrice',
        align: 'center',
        label: 'Unit Price (円)',
        field: 'unitPrice'
      },
      {
        name: 'sku',
        align: 'center',
        label: 'SKU',
        field: 'sku'
      },
      {
        name: 'inventory',
        align: 'center',
        label: 'Inventory Quantity',
        field: 'inventory'
      },
      {
        name: 'processId',
        align: 'center',
        label: 'Process Id',
        field: 'processId'
      },
      { name: 'edit', label: 'Edit', align: 'center', field: 'protein' }
    ],
    data: []
  }),
  created() {
    this.fetchData();
  },
  methods: {
    test(d) {
      console.log(d);
    },
    fetchData() {
      const mock = [
        {
          id: 1,
          productNo: 'PM00001',
          productName: 'Frozen Yogurt',
          productNameEN: 'Frozen Yogurt',
          unitPrice: 100,
          sku: '1214as44',
          inventory: 24,
          processId: 'P0001'
        }
      ];
      Promise.resolve(mock).then(data => (this.data = data));
    }
  }
};
</script>

<style scoped></style>
