<template>
    <div class="container">
        <p>Name: {{ customer.firstName }} {{ customer.lastName }}</p>
        <p>Email: {{ customer.email }}</p>
        <h3>Purchased products</h3>
        <table>
            <thead>
                <th>Product Name</th>
                <th>Quantity</th>
            </thead>
            <tr v-for="product in customer.products" :key="product.id">
                <td>{{ product.title }}</td>
                <td>{{ product.quantity }}</td>
            </tr>
        </table>
        <router-link to="/customers" class="btn btn-link">Back to customers</router-link>
    </div>
</template>

<script>
import { customerService } from '../utils/CustomerService'

export default {
    data() {
        return {
            customer: customerService.get(this.$route.params.id)
        }
    },
    created() {
        console.log(this.customer)
    }

}
</script>


