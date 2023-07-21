<template id="RecordTable">
        <td>{{ customer.name }}</td>
        <td>{{ customer.email }}</td>
        <td>{{ customer.document }}</td>
        <td>
          <v-btn color="black" @click="edit(index)">
            <v-icon color="white darken-2" class="edit-btn">edit</v-icon>
          </v-btn>
        </td> 
</template>

<script>
    export default {
        name: 'RecordTable',
        props: ['customer']
    }
</script>
