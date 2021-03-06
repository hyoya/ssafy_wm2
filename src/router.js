import Vue from "vue";
import Router from "vue-router";
import Main from "./views/Main.vue";
import Story from "./views/Story.vue";
import CompanyIntro from "./views/CompanyIntro.vue";
import Git from "./views/Git.vue";
import Followers from "./views/Followers.vue";
import Project from "./views/Project.vue";
import Vuex from 'vuex';
import store from './store';
import Manager from './views/Manager.vue';

Vue.use(Vuex);
Vue.use(store);
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  // 형식통일
  // path, name은 모두 소문자
  // component는 카멜 표기법
  routes: [
    {
      path: "/",
      name: "main",
      component: Main
    },
    {
      path: "/story",
      name: "story",
      component: Story
    },
    {
      path: "/story/:id",
      name: "story",
      component: Story
    },
    {
      path: "/companyIntro",
      name: "companyIntro",
      component: CompanyIntro
    },
    {
      path: "/git",
      name: "git",
      component: Git
    },
    {
      path: "/followers",
      name: "followers",
      component: Followers
    },
    {
      path:"/project/:pcode",
      name:"project",
      component:Project
    },
    {
      path:"/manager",
      name:"manager",
      component:Manager
    }
  ]
});
