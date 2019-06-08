import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'


import "chart.js";
import "hchs-vue-charts";
import axios from 'axios';
import VueAxios from 'vue-axios';
 
Vue.use(VueAxios, axios);
Vue.use(window.VueCharts);
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
