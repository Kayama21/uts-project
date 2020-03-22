import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jaket from '../views/Jaket.vue'
import Sweater from '../views/Sweater.vue'
import Celana from '../views/Celana.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: About
  },
  {
    path: '/jaket',
    name: 'Jaket',
    component: Jaket
  },
  {
    path: '/sweater',
    name: 'Sweater',
    component: Sweater
  },
  {
    path: '/celana',
    name: 'Celana',
    component: Celana
  }
]

const router = new VueRouter({
  routes
})

export default router
