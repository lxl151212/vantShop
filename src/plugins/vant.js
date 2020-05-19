// 按需全局引入 vant组件
import Vue from 'vue'
import {
  Button,
  List,
  Cell,
  Tabbar,
  TabbarItem,
  Progress,
  Collapse,
  CollapseItem,
  ShareSheet,
  Swipe,
  SwipeItem,
  Tab,
  Tabs,
  CountDown
} from 'vant'
Vue.use(Button)
Vue.use(Cell)
Vue.use(List)
Vue.use(ShareSheet)
Vue.use(Progress)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(CountDown)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Tab).use(Tabs)
