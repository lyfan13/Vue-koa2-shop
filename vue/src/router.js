import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Detail from './views/Detail.vue'
import Buy from './views/Buy.vue'
import Cart from './views/Cart.vue'
import Member from './views/Member.vue'
import Submit from './views/Submit'
import Login from './views/Login'
import Address from './views/Address'
import Search from './views/Search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/buy/:id',
      name: 'buy',
      component: Buy
    },
    {
      path:'/cart',
      name:'cart',
      component:Cart
    },
    {
      path:'/member',
      name:'member',
      component:Member
    },
    {
      path:'/submit',
      name:'submit',
      component:Submit
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/address',
      name:'address',
      component:Address
    },
    {
      path:'/Search',
      name:'search',
      component:Search
    }
  ]
})
