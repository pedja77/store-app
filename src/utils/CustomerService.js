const customers = [
    { id: 1, firstName: 'Pera', lastName: 'Joe', email: 'p@p.p', products: []},
    { id: 2, firstName: 'Samantha', lastName: 'Fish', email: 's@p.p', products: []},
    { id: 3, firstName: 'Jimmy', lastName: 'Hendrix', email: 'h@p.p', products: []},
    { id: 4, firstName: 'Joey', lastName: 'Ramone', email: 'r@p.p', products: []},
    { id: 6, firstName: 'Joe', lastName: 'Strummer', email: 'js@p.p', products: []},
    { id: 7, firstName: 'Franci', lastName: 'Blaskovic', email: 'b@p.p', products: []}
]

let nextId = 8


export default class CustomerService {

    list() {
        return customers
    }

    deleteCustomer(customer) {
        customers.splice(customers.indexOf(customer), 1)
    }

    addCustomer(customer) {
        customer.id = nextId
        customers.push(customer)
        nextId++
    }

    get(id) {
        return customers.find(customer => id == customer.id)
    }
}

export const customerService = new CustomerService()