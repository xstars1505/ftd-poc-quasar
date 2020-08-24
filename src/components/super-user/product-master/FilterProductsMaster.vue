<template>
  <q-card class="q-my-lg">
    <q-card-section>
      <div class="row">
        <div class="col">
          <q-input
            class="q-ma-sm"
            outlined
            v-model="params.id"
            label="Product Id"
          />
          <q-input
            class="q-ma-sm"
            outlined
            v-model="params.id"
            label="Product Id"
          />
          <q-input
            class="q-ma-sm"
            outlined
            v-model="params.id"
            label="Product Id"
          />
          <q-input
            class="q-ma-sm"
            outlined
            v-model="params.id"
            label="Product Id"
          />
        </div>
        <div class="col">
          <q-input
            class="q-ma-sm"
            outlined
            v-model="params.unitPrice"
            label="Unit Price"
          />
          <q-input
            class="q-ma-sm"
            outlined
            v-model="params.unitPrice"
            label="Unit Price"
          />
          <q-input
            class="q-ma-sm"
            outlined
            v-model="params.unitPrice"
            label="Unit Price"
          />
          <q-input
            class="q-ma-sm"
            outlined
            v-model="params.unitPrice"
            label="Unit Price"
          />
        </div>
      </div>
    </q-card-section>

    <q-card-actions align="center">
      <q-btn label="Clear" />
      <q-btn color="primary" label="Search" />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: 'FilterProductsMaster',
  data: () => ({
    params: {
      id: '',
      unitPrice: '',
      name: ''
    }
  })
};
</script>

<style scoped></style>
