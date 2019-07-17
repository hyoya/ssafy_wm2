import App from './App.vue'
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueSimplemde from 'vue-simplemde'
import VueSession from 'vue-session'
import { VueEditor } from "vue2-editor";
import axios from 'axios'
import store from './store'
import router from './router'
import './registerServiceWorker'
import 'vuetify/dist/vuetify.min.css'
Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(VueSimplemde)
Vue.use(VueSession)
Vue.use(Vuetify, {
	iconfont: 'fa',
	theme: {
		primary: '#3f51b5',
		secondary: '#b0bec5',
		accent: '#8c9eff',
		error: '#b71c1c'
	}
})
Vue.use(Vuetify, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
