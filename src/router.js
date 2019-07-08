// install npm
import Vue from 'vue'
import Router from 'vue-router'

// vue page
import MainPage from './views/MainPage.vue'
import SignUpPage from './views/SignUpPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
		{
			path: '/',
			name: 'main',
			component: MainPage
		},
    {
			path: '/signup',
			name: 'signup',
			component: SignUpPage
		}
  ]
})
