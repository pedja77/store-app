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
                <th>Change quantity</th>
                <th>&nbsp;</th>
            </thead>
            <tr v-for="product in products" :key="product.id">
                <td>{{ product.title }}</td>
                <td>{{ product.qty }}</td>
                <td>
                    <button class="btn btn-link" @click="incrementQty(product.id)">+</button>
                    <button class="btn btn-link" @click="decrementQty(product.id)" v-if="product.qty > 0">-</button>
                </td>
                <td><router-link :to="'/products/' + product.id">Buy this product</router-link></td>
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
    },
    methods: {
        incrementQty(id) {
            productService.incrementQty(id)
        },
        decrementQty(id) {
            productService.decrementQty(id)
        }
    }
}
</script>