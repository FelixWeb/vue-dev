import Vue from 'vue'
import App from './App.vue'

import VueRouter from "vue-router";
import VueResource from 'vue-resource'

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-default/index.css'


import './style.css'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI, { locale })


import first from './component/first.vue'
import second from './component/second.vue'
import index from './component/default.vue'
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/first',
      component: first
    },
    {
      path: '/second',
      component: second
    }
  ]
})
new Vue({
  el: '#app',
  router:router,  
  render: h => h(App)
})
