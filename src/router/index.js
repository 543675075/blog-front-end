import Vue from 'vue'
import VueRouter from 'vue-router'

import Blog from './blog'
import backStage from './back-stage'

Vue.use(VueRouter)



const routes = [
  ...Blog,
  ...backStage
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// 路由守卫，检查token
router.beforeEach( (to, from, next) =>{
  const token = sessionStorage.getItem('token')
  if(to.path != '/admin') return next()
  if(!token) return next('/login')
  next()
})


export default router
