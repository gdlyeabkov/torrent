import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import PM from '../views/PM.vue'
import Profile from '../views/Profile.vue'
import MyMessages from '../views/MyMessages.vue'
import Distribution from '../views/Distribution.vue'
import Register from '../views/Register.vue'
import Agreement from '../views/Agreement.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/pm',
    name: 'PM',
    component: PM
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/messages',
    name: 'MyMessages',
    component: MyMessages
  },
  {
    path: '/distribution',
    name: 'Distribution',
    component: Distribution
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/agreement',
    name: 'Agreement',
    component: Agreement
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
