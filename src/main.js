// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import router from './router'
import router from './router/pagerouter.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入axios，并加到原型链中
import axios from 'axios';
Vue.prototype.$axios = axios;
import QS from 'qs';
Vue.prototype.$qs = QS;
axios.defaults.timeout = 5000; // 请求超时
Vue.config.productionTip = false;
Vue.use(ElementUI);

//定义一个请求拦截器
axios.interceptors.request.use(function(config){
 alert("afdasf");
  config.headers["x-auth"]="aaaaaaaaaa";
  return config
})
//定义一个响应拦截器
axios.interceptors.response.use(function(config){

  return config
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<app></app>'
})
