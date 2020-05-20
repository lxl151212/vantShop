import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const router = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/home/index'), // 路由懒加载
    meta: {
      keepAlive: false // keep-alive 标识
    }
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('@/views/home/detail'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/orderConfirm',
    name: 'orderConfirm',
    component: () => import('@/views/order/confirm'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/basic',
    name: 'basic',
    component: () => import('@/views/basic/index'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/payment',
    name: 'payment',
    component: () => import('@/views/order/payment'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/addBank',
    name: 'addBank',
    component: () => import('@/views/order/addBank'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/addBankInfo',
    name: 'addBankInfo',
    component: () => import('@/views/order/addBankInfo'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/addBankInfo',
    name: 'addBankInfo',
    component: () => import('@/views/order/addBankInfo'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/orderList',
    name: 'orderList',
    component: () => import('@/views/order/list'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/orderDetail',
    name: 'orderDetail',
    component: () => import('@/views/order/detail'),
    meta: {
      keepAlive: false
    }
  }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // 如果你是 history模式 需要配置vue.config.js publicPath
    // base: '/app/',
    scrollBehavior: () => ({ y: 0 }),
    routes: router
  })

export default createRouter()
