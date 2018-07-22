/**
 * 入口JS
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import loading from './common/images/loading.gif'

import './mock/mockServer'    // 加载mockServer即可
import './filters'                        //   加载过滤器

//   注册全局组件标签
Vue.component(Button.name, Button)      //  <mt-button></mt-button>
Vue.use(VueLazyload, {          //   内部自定义一个指令Lazy
  loading
})

new Vue({
  el : '#app',
  render : h => h(App),
  router,     //   使用上vue-router
  store,       //   使用上vuex
})
