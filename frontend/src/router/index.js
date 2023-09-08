import Vue from 'vue'
import Router from 'vue-router'
import index from '@/General/Views/index'
import MainDashboard from '@/General/Views/MainDashboard'
import CommunityDashboard from '@/General/Views/CommunityDashboard'
import AdminDashboard from '@/General/Views/AdminDashboard'

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
      name: 'MainDashboard',
      component: MainDashboard
    },
    {
      path: '/communityDash',
      name: 'CommunityDashboard',
      component: CommunityDashboard
    },
    {
      path: '/adminDash',
      name: 'AdminDashboard',
      component: AdminDashboard
    }
  ]
})
