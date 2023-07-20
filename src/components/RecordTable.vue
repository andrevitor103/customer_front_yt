<template>
     <td>{{ customer.name }}</td>
        <td>{{ customer.email }}</td>
        <td>{{ customer.document }}</td>
        <td>
          <v-btn color="black" @click="edit(index)">
            <v-icon color="white darken-2" class="edit-btn">edit</v-icon>
          </v-btn>
        </td> 
</template>

<script lang="js">
    export default {
        name: 'RecordTable',
        data() {
            return {
                customer: {
                    'name': 'andrevitor103',
                    'email': 'andrevitor103@gmail.com',
                    'document': '9999999999'
                }
            }
        }
    }
</script>