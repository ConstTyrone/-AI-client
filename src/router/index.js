import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SeriousMod from '@/components/SeriousMod.vue'
import AdvanceMod from '@/components/AdvanceMod.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/SeriousMod',
    name: 'SeriousMod',
    component: SeriousMod
  },
  {
    path:'/AdvanceMod',
    name:'AdvanceMod',
    component: AdvanceMod
  }
]

const router = new VueRouter({
  routes
})

export default router
