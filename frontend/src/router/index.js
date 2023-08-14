import Vue from 'vue'
import Router from 'vue-router'
import index from '@/General/Views/index'
import MainDashboard from '@/General/Views/MainDashboard'
import CommunityDashboard from '@/General/Views/CommunityDashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/mainDash',
      name: 'Main Dashboard',
      component: MainDashboard
    },
    {
      path: '/communityDash',
      name: 'Community Dashboard',
      component: CommunityDashboard
    }
  ]
})
