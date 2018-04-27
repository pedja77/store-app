<template>
  <div class="container">
      <h2>Products</h2>
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
  </div>
</template>

<script>
import { productService } from '../utils/ProductService'

export default {
    data() {
        return {
            products: productService.getProducts()
        }
    }
}
</script>