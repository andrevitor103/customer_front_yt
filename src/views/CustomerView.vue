<template id="CustomerView">
  <div id="users-table">
    <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="name"
            :rules="nameRules"
            :counter="10"
            label="Name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            :counter="10"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="document"
            :rules="documentRules"
            label="Document"
            required
          ></v-text-field>
        </v-col>
        <v-btn type="submit" block class="mt-2" @click.prevent="addCustomer">Salvar</v-btn>
      </v-row>
    </v-container>
  </v-form>
    <v-table>
    <thead>
      <tr class="remove-line">
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
        class="remove-line"
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
import CustomerService from '../services/CustomerService';

export default {
  name: 'CustomerView',
  data() {
    return {
      customerService: ref(new CustomerService()),
      valid: false,
      name: '',
      document: '',
      email: '',
      nameRules: [
        value => {
          if (value) return true

          return 'Name is required.'
        },
        value => {
          if (value?.length <= 10) return true

          return 'Name must be less than 10 characters.'
        },
      ],
      emailRules: [
        value => {
          if (value?.length <= 10) return true

          return 'E-mail is requred.'
        }
      ],
      documentRules: [
        value => {
          if (value?.length <= 10) return true

          return 'Document is requred.'
        }
      ]
    }
  },
  methods: {
    edit(index) {
      alert(`editando linha: ${index+1}`);
    },
    addCustomer() {
      if (!this.valid) {
        return
      }
      this.customerService.addCustomer(this.name, this.email, this.document)
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

  .remove-line > th {
    border-bottom: 0px !important;
}
 
 thead tr:hover, tbody tr:hover {
  background-color:  rgb(216, 247, 220);
 }

 .edit-btn:hover {
  color: rgb(4, 128, 0) !important;
 }

</style>

