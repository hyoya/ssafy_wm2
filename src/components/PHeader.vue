<template>
<<<<<<< HEAD
  <div>palkim test</div>
=======
  <v-layout>
    <v-flex column>
      <!-- toolbar start -->
      <v-toolbar fixed style="background:black;">
        <!-- logo -->
        <v-btn icon to="/">
          <!--  TODO 여기는 로고 자리입니다. -->
        </v-btn>

        <!-- title -->
        <v-toolbar-title class="white--text">Bobsleh</v-toolbar-title>

        <!--spacer -->
        <v-spacer></v-spacer>

        <!-- sign in & sign up  -->
        <v-toolbar-items class="hidden-xs-only">
          <v-btn
            v-for="item in menu"
            :key="item.icon"
            :to="item.link"
            flat
            class="white--text"
          >{{ item.title }}</v-btn>
        </v-toolbar-items>

        <v-menu class="hidden-sm-and-up">
          <v-toolbar-side-icon slot="activator" class="white--text"></v-toolbar-side-icon>
          <v-list>
            <v-list-tile v-for="item in menu" :key="item.icon" :to="item.link">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar>
      <!-- toolbar end -->
    </v-flex>
  </v-layout>
>>>>>>> 5768d19734b288491efda057f917643ff9fe419f
</template>

<script>
export default {
  name: "PHeader",
  props: {},
  data: () => ({
    menu: [
      { icon: "signup", title: "Sign Up", link: "/signup" },
      { icon: "signin", title: "Sign In", link: "/signin" },
      { icon: "userInfo", title: "UserInfo", link: "/userPage" }
    ]
  })
};
</script>
