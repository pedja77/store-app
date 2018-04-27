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
        <form @submit.prevent="addCustomer(customer)">
            <div class="form-group">
                <label for="first-name">First name</label>
                <input type="text" id="first-name" name="first-name" v-model="customer.firstName"/>
            </div>
            <div class="form-group">
                <label for="last-name">Last name</label>
                <input type="text" id="last-name" name="last-name" v-model="customer.lastName"/>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" v-model="customer.email"/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
  
</template>

<script>
import { customerService } from '../utils/CustomerService'

export default {
    data() {
        return {
            customers: customerService.list(),
            customer: {}
        }
    },
    methods: {
        deleteCustomer(customer) {
            customerService.deleteCustomer(customer)
        },
        addCustomer(customer) {
            //console.log(customer)
            customerService.addCustomer(customer)
            this.customer = {}
        }
    }
}
</script>


