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
import ForgotPassword from '../views/ForgotPassword.vue'
import Rules from '../views/Rules.vue'
import Torrentpedia from '../views/Torrentpedia.vue'
import Ads from '../views/Ads.vue'
import RandomDistributtion from '../views/RandomDistributtion.vue'
import Distributtions from '../views/Distributtions.vue'
import News from '../views/News.vue'
import Concurs from '../views/Concurs.vue'
import QAndA from '../views/QAndA.vue'
import Support from '../views/Support.vue'
import ForRights from '../views/ForRights.vue'
import ForProviders from '../views/ForProviders.vue'
import ForPress from '../views/ForPress.vue'
import ConditionUsability from '../views/ConditionUsability.vue'

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
  {
    path: '/forgot',
    name: 'ForgotPassword',
    component: ForgotPassword  
  },
  {
    path: '/usability',
    name: 'ConditionUsability',
    component: ConditionUsability
  },
  {
    path: '/for/press',
    name: 'ForPress',
    component: ForPress
  },
  {
    path: '/for/providers',
    name: 'ForProviders',
    component: ForProviders
  },
  {
    path: '/ads',
    name: 'Ads',
    component: Ads
  },
  {
    path: '/concurs',
    name: 'Concurs',
    component: Concurs
  },
  {
    path: '/distributions',
    name: 'Distributtions',
    component: Distributtions
  },
  {
    path: '/random',
    name: 'RandomDistributtion',
    component: RandomDistributtion
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/support',
    name: 'Support',
    component: Support
  },
  {
    path: '/qa',
    name: 'QAndA',
    component: QAndA
  },
  {
    path: '/rules',
    name: 'Rules',
    component: Rules
  },
  {
    path: '/for/rights',
    name: 'ForRights',
    component: ForRights
  },
  
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
