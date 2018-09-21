import Vue from 'vue'
import App from './App.vue'
import {store} from './store';
import moment from 'moment'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

Vue.config.productionTip = false

let app;
if (!app) {
       app = new Vue({
       el: '#app',
       store,
       render: h => h(App)
  })
}