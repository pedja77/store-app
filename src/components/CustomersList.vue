<template>
    <div>
        <ul class="list-unstyled">
            <li class="list-unstyled-item" 
                v-for="(customer, key) in customers" 
                :key="customer.id">
                {{ customer.firstName }} {{ customer.lastName }} <a href="#" @click="deleteCustomer(customer)">
                    <small style="color: red">Delete</small>
                </a>
            </li>
        </ul>
    </div>
  
</template>

<script>
import { customerService } from '../utils/CustomerService'

export default {
    data() {
        return {
            customers: customerService.list()
        }
    },
    methods: {
        deleteCustomer(customer) {
            customerService.deleteCustomer(customer)
        }
    }
}
</script>


