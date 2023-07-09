export default class CustomerService {
    customers = []

    addCustomer(name, email, document) {
      this.customers.push({name, email, document})
    }

    async getCustomers() {
      return this.customers
    }

    async loadCustomers() {
      this.customers.push(
        {
            'name': 'André Vitor',
            'email': 'andrevitor103@gmail.com',
            'document': '999.999.99-99',
          },
          {
            'name': 'André Vitor',
            'email': 'andrevitor103@gmail.com',
            'document': '999.999.99-99',
          },
          {
            'name': 'André Vitor',
            'email': 'andrevitor103@gmail.com',
            'document': '999.999.99-99',
          },
          {
            'name': 'André Vitor',
            'email': 'andrevitor103@gmail.com',
            'document': '999.999.99-99',
          },
    )
    }
}