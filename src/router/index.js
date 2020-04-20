import Vue from 'vue'
import VueRouter from 'vue-router'
import compare from '../views/compare.vue'
import home from '../views/home.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/home',
    name: 'home',
    component: home,
    props: true

  }, {
    path: '/compare',
    name: 'compare',
    component: compare,
    props: true
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
