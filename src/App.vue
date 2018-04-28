<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import AppCustomers from './pages/AppCustomers.vue'
import AppProducts from './pages/AppProducts.vue'
import Navbar from './components/Navbar.vue'
import AppLatestPurchases from './pages/AppLatestPurchases.vue'
import AppProduct from './pages/AppProduct'

export default {
  name: 'app',
  components: {
    AppCustomers,
    AppProducts,
    Navbar,
    AppLatestPurchases,
    AppProduct
  }
}
</script>


