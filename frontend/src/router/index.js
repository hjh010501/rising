import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Chat from '@/components/service/chat'
import Login from '@/components/user/Login'
import Register from '@/components/user/Register'
import store from '../store'

const requireAuth = () => (from, to, next) => {
  if (store.getters.isAuthenticated) return next()
  next('/login')
}

const localtokencheck = () => (from, to, next) => {
  if (!store.getters.isAuthenticated) return next()
  next('/')
}
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      beforeEnter: requireAuth()
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      beforeEnter: requireAuth()
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: localtokencheck()
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
