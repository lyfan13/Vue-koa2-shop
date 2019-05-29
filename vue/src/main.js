import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//设置不同设备之间的默认样式
import './assets/styles/reset.css'
import { Dialog, SwipeCell, Checkbox, SubmitBar, Card, Sku, GoodsActionMiniBtn, GoodsActionBigBtn, GoodsAction, Badge, BadgeGroup, NoticeBar, Cell, Icon, CellGroup, Search, Tabbar, TabbarItem, PullRefresh, Stepper, Tab, Tabs, Button, Row, Col, Swipe, SwipeItem, Lazyload, List, Field, NavBar, Toast } from 'vant'

Vue.use(Dialog).use(SwipeCell).use(Checkbox).use(SubmitBar).use(Card).use(Sku).use(GoodsActionMiniBtn).use(GoodsAction).use(GoodsActionBigBtn).use(Badge).use(BadgeGroup).use(Cell).use(NoticeBar).use(Icon).use(Search).use(CellGroup).use(Tabbar).use(TabbarItem).use(Stepper).use(PullRefresh).use(Tab).use(Tabs).use(Field).use(NavBar).use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload).use(List)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if ((to.name == "member" || to.name == "submit" || to.name == "address") && !store.state.loginStatus.token) {
    Toast.fail('请先登录')
    next({ name: 'login' })
  } else if (to.name == "login" && store.state.loginStatus.token) {
    Toast.success('已经登录！')
    next({ name: 'home' })
  } else { next() }
})
// router.afterEach((to, from) => {
//   switch (to.name) {
//     case "home":
//       store.state.bottomBarActive = 0
//       break
//     case "detail":
//       store.state.bottomBarActive = 1
//       break
//     case "cart":
//       store.state.bottomBarActive = 2
//       break
//     case "login":
//       store.state.bottomBarActive = 3
//       break
//   }
// })