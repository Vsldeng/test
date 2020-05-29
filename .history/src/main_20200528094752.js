import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'

import './assets/css/global.css'

Vue.config.productionTip = false

Vue.prototype.$http = axios

// 配置请求的根路径

axios.defaults.baseURL = 'http://timemeetyou.com:8889/api/private/v1/'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
