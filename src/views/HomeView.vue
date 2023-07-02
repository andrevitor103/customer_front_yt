<template>
  <main>   
    <div class="card">
        <DataTable :value="customers" tableStyle="min-width: 50rem" editMode="row" dataKey="email" tableClass="editable-cells-table">
            <Column field="name" header="nome"></Column>
            <Column field="email" header="email"></Column>
            <Column field="document" header="documento"></Column>
            <Column  header="" :rowEditor="true" style="width: 10%; min-width: 8rem" bodyStyle="text-align:center"></Column>
        </DataTable>
    </div>
  </main>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      customers: [
        {
          'name': 'André Vitor',
          'email': 'andrevitor103@gmail.com',
          'document': '999.999.99-99',
        },
      ]
    }
  },
  methods: {}
}
</script>

<style scoped>
</style>
