<template id="FormComponent">
    <div>
        <v-form v-model="valid" validate-on="blur">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="name"
            :rules="nameRules"
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
        <v-btn type="submit" block class="mt-2" color="red" @click.prevent="addCustomer">Salvar</v-btn>
      </v-row>
    </v-container>
  </v-form>
    </div>
</template>


<script>

export default {
    name: 'FormComponent',
    emits: ['addCustomer'],
    data() {
        return {
          valid: false,
          name: '',
          document: '',
          email: '',
          emailRules: [
              value => {
              console.log('email...')
              if (value) return true

              return 'E-mail is requred.'
              }
          ],
          nameRules: [
              value => {
              console.log('nome...')
              if (value) return true

              return 'Name is required.'
              },
          ],
          documentRules: [
              value => {
                console.log('email...')
                if (value) return true

              return 'Document is requred.'
              }
          ]
        }
    },
    methods: {
      clearAll() {
        this.email = ''
        this.name = ''
        this.document = ''
      },
      addCustomer() {
        if (!this.valid) {
          return
        }
        const filter = {
          'name': this.name,
          'email': this.email,
          'document': this.document
        }
        this.clearAll()
        this.$emit('addCustomer', filter);
      }
    }
}

</script>
