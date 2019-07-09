<template>
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
        <v-toolbar-items >
          <LoginModal/>
          <SignUpModal/>
          <ProjectDetail/>
        </v-toolbar-items>



      </v-toolbar>
      <!-- toolbar end -->
    </v-flex>
  </v-layout>
</template>

<script>
import LoginModal from "./LoginModal"
import SignUpModal from "./SignUp/SignUp"
import ProjectDetail from "./ProjectDetail"

export default {
	name: 'PHeader',
	props: {
	},
  components :{
    LoginModal,
    SignUpModal,
    ProjectDetail,
  },

}
</script>
