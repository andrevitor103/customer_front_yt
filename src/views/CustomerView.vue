<template id="CustomerView">
  <div id="users-table">
    <FormComponent @add-customer="addCustomer" />
    <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Email
        </th>
        <th class="text-left">
          Document
        </th>
        <th class="text-left">
          #
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(customer, index) in customerService.customers"
        :key="index"
      >
        <td>{{ customer.name }}</td>
        <td>{{ customer.email }}</td>
        <td>{{ customer.document }}</td>
        <td>
          <v-btn color="black" @click="edit(index)">
            <v-icon color="white darken-2" class="edit-btn">edit</v-icon>
          </v-btn>
        </td> 
      </tr>
    </tbody>
  </v-table>
  </div>
</template>

<script>

import { ref } from 'vue';
import FormComponent from '../components/Form.vue';
import CustomerService from '../services/CustomerService';

export default {
  name: 'CustomerView',
  components: {
    FormComponent
  },
  data() {
    return {
      customerService: ref(new CustomerService())
    }
  },
  methods: {
    edit(index) {
      alert(`editando linha: ${index+1}`);
    },
    addCustomer(filter) {
      console.log({ 'filter': filter })
      this.customerService.addCustomer(filter.name, filter.email, filter.document)
    },
    loadCustomers() {
      this.customerService.loadCustomers()
    }
  },
  created() {
    this.loadCustomers()
  }
}
</script>

<style scoped>

#users-table {
  width: 100%;
  display: block;
  margin: 0 auto;
}

 thead tr:hover, tbody tr:hover {
  background-color:  rgb(216, 247, 220);
 }

 .edit-btn:hover {
  color: rgb(4, 128, 0) !important;
 }

</style>

