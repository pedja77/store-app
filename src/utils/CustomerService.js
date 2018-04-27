const customers = [
    { id: 1, firstName: 'Pera', lastName: 'Joe', email: 'p@p.p', purchasedProducts: []},
    { id: 2, firstName: 'Samantha', lastName: 'Fish', email: 's@p.p', purchasedProducts: []},
    { id: 3, firstName: 'Jimmy', lastName: 'Hendrix', email: 'h@p.p', purchasedProducts: []},
    { id: 4, firstName: 'Joey', lastName: 'Ramone', email: 'r@p.p', purchasedProducts: []},
    { id: 5, firstName: 'Jello', lastName: 'Biafra', email: 'b@p.p', purchasedProducts: []},
    { id: 6, firstName: 'Joe', lastName: 'Strummer', email: 'js@p.p', purchasedProducts: []},
    { id: 7, firstName: 'Franci', lastName: 'Blaskovic', email: 'b@p.p', purchasedProducts: []}
]


export default class CustomerService {

    list() {
        return customers
    }

    deleteCustomer(customer) {
        customers.splice(customers.indexOf(customer), 1)
    }
}

export const customerService = new CustomerService()