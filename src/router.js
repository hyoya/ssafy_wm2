// install npm
import Vue from "vue";
import Router from "vue-router";

// vue page
import MainPage from "./views/MainPage.vue";
import SignUpPage from "./views/SignUpPage.vue";
import UserInfo from "./views/UserInfo.vue";
import ProjectWrite from "./views/ProjectWrite.vue";
Vue.use(Router);


import Vuetify from 'vuetify'
Vue.use(Vuetify, {
	iconfont: 'fa',
	theme: {
		primary: '#3f51b5',
		secondary: '#b0bec5',
		accent: '#8c9eff',
		error: '#b71c1c'
	}
})

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "main",
      component: MainPage
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUpPage
    },
    {
      path: "/userInfo",
      name: "userInfo",
      component: UserInfo
    },
		{
      path: "/projectwrite",
      name: "projectwrite",
      component: ProjectWrite
    }
  ]
});
