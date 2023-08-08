import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/component/Register'
import Login from '@/component/Login'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        }
    ]
})