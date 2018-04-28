<template>
  <div class="container">
      <div v-if="product.qty">
         <p>Product title: {{ product.title }}</p>
        <p>Available quantity: {{ product.qty }}</p>
        <h3>Buy this product</h3>
        <form>
              <div class="form-group">
                <label for="customer">Select customer: </label>
                <select id="customer" v-model="selectedCustomer">
                  <option value=""></option>
                  <option 
                    v-for="customer in customers" 
                    :key="customer.id" :value="customer">
                    {{ customer.firstName + ' ' + customer.lastName }}
                  </option>
                </select>
              </div>
          <button class="btn btn-success" @click="confirm">Confirm</button>
          <router-link class="btn btn-warning" to="/products">Cancel</router-link>

        </form>
        <div class="alert alert-warning" role="alert" v-if="missingCustomer">
            You must select customer before confirmation.
        </div>
      </div>
      <div v-else>
          <h3>Out of stock</h3>
          <router-link class="btn btn-warning" to="/products">Back to the products page</router-link>
      </div>
  </div>
</template>

<script>
import { productService } from '../utils/ProductService'
import { customerService } from '../utils/CustomerService'

export default {
    data() {
        return {
            product: productService.get(this.$route.params.id),
            customers: customerService.list(),
            selectedCustomer: '',
            missingCustomer: false
        }
    },
    methods: {
        confirm() {
            if (!this.selectedCustomer) {
                this.missingCustomer = true
                return 
            }
            console.log(this.selectedCustomer)
            this.missingCustomer = false
            productService.decrementQty(this.product.id)
            customerService.addProduct(this.product, this.selectedCustomer.id)
        }
    }
}
</script>

<style>

</style>
