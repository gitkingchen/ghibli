import Vue from "vue";

import "normalize.css/normalize.css"; // A modern alternative to CSS resets
import "@/styles/reset.css";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/zh-CN"; // lang i18n

import "@/styles/index.scss"; // global css
import App from "./App";
import router from "./router";
import store from "./store";
// import $ from "jquery";
// import echarts from "echarts";


import "@/icons"; // icon
import "@/permission"; // permission control

//挂载全局
//import echarts from 'echarts'
//Vue.prototype.$echarts = echarts
//访问方式：this.$echarts.init()

Vue.config.productionTip = false;

Vue.use(ElementUI, { locale });

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});