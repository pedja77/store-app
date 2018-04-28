import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AppCustomers from './pages/AppCustomers'
import AppProducts from './pages/AppProducts'
import AppLatestPurchases from './pages/AppLatestPurchases'
import AppProduct from './pages/AppProduct'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/customers'},
  { path: '/customers', component: AppCustomers },
  { path: '/products', component: AppProducts },
  { path: '/customers/:id', component: AppLatestPurchases},
  { path: '/products/:id', component: AppProduct}
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
