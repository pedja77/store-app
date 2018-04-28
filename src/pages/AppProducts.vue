<template>
  <div class="container">
      <h2>Products</h2>
      <form>
          <input type="text" placeholder="Filter products" v-model="searchTerm"/> 
      </form>
       <table>
            <thead>
                <th>Product Name</th>
                <th>Quantity</th>
            </thead>
            <tr v-for="product in products" :key="product.id">
                <td>{{ product.title }}</td>
                <td>{{ product.qty }}</td>
            </tr>
        </table>
        {{ filterProducts }}
  </div>
</template>

<script>
import { productService } from '../utils/ProductService'

export default {
    data() {
        return {
            products: productService.getProducts(),
            searchTerm: ''
        }
    },
    computed: {
        filterProducts: function() {
            //console.log(this.searchTerm)
            this.products = productService.filterProducts(this.searchTerm)
        }
    }
}
</script>