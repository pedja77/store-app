import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AppCustomers from './pages/AppCustomers'
import AppProducts from './pages/AppProducts'
import AppLatestPurchases from './pages/AppLatestPurchases'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/customers'},
  { path: '/customers', component: AppCustomers },
  { path: '/products', component: AppProducts },
  { path: '/customers/:id', component: AppLatestPurchases}
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
