// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import Axios from '../config/axios'
import http from 'http'
import lodash from 'lodash'
import './styles/styles.scss'
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
Vue.prototype.axios = axios;
Vue.use(ElementUI); // 用法：安装Vue.js插件，必须有install方法
Vue.use(Axios);

Vue.prototype.$http = http;
Vue.prototype._ = lodash;
Vue.config.productionTip = false;
console.log('process.env', process.env);
export default new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
