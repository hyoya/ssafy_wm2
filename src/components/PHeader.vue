<template>
  <v-layout>
    <v-flex column>
      <!-- toolbar start -->
      <v-toolbar fixed style="background:black;">
        <!-- logo -->
        <!-- title -->
        <v-toolbar-title class="white--text">
          <v-btn flat class="white--text" href="/">Bobsleh</v-btn>
        </v-toolbar-title>

        <!--spacer -->
        <v-spacer></v-spacer>
<<<<<<< HEAD
        <div id="google_translate_element"></div>
        <!-- sign in & sign up  -->
=======


>>>>>>> aa0ce1c467061442d9b7a6f14acef941c7670c05
        <v-toolbar-items >
          <LoginModal/>
          <SignUpModal/>
          <ProjectDetail/>
          <v-btn flat class="white--text" href="/userInfo">userInfo</v-btn>
        </v-toolbar-items>
<<<<<<< HEAD
=======

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
>>>>>>> aa0ce1c467061442d9b7a6f14acef941c7670c05
      </v-toolbar>
      <!-- toolbar end -->
    </v-flex>
  </v-layout>
</template>

<script>
<<<<<<< HEAD
import LoginModal from "./LoginModal"
import SignUpModal from "./SignUp/SignUp"
import ProjectDetail from "./ProjectDetail"

export default {
  name: "PHeader",
  props: {},
  components: {
    LoginModal,
    SignUpModal,
    ProjectDetail,
  },

}
=======
export default {
  name: "PHeader",
  props: {},
  data: () => ({
    menu: [
      { icon: "signup", title: "Sign Up", link: "/signup" },
      { icon: "signin", title: "Sign In", link: "/signin" },
      { icon: "userInfo", title: "User Info", link: "/userInfo" }
    ]
  })
};
>>>>>>> aa0ce1c467061442d9b7a6f14acef941c7670c05
</script>

