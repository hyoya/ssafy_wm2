import Vue from "vue";
import Router from "vue-router";
import Main from "./views/Main.vue";
import Story from "./views/Story.vue";

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
      component: Main,
    },
    {
      path: "/story",
      name: "story",
      component: Story,
    },

  ]
});
