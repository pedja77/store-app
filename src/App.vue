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

export default {
  name: 'app',
  components: {
    AppCustomers,
    AppProducts,
    Navbar
  }
}
</script>


