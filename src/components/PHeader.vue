<template>
<<<<<<< HEAD
  <div>palkim test</div>
=======
  <v-layout>
    <v-flex column>
      <!-- toolbar start -->
      <v-toolbar fixed style="background:black;">
        <!-- logo -->
        <v-btn icon to="/"><!--  TODO 여기는 로고 자리입니다. --> </v-btn>

        <!-- title -->
        <v-toolbar-title class="white--text">Bobsleh</v-toolbar-title>

        <!--spacer -->
        <v-spacer></v-spacer>

        <!-- sign in & sign up  -->
        <v-toolbar-items >
          <LoginModal/>
          <v-btn flat class="white--text">Sign Up</v-btn>
        </v-toolbar-items>



      </v-toolbar>
      <!-- toolbar end -->
    </v-flex>
  </v-layout>
>>>>>>> 5768d19734b288491efda057f917643ff9fe419f
</template>

<script>
import LoginModal from "./LoginModal"

export default {
	name: 'PHeader',
	props: {
	},
  components :{
    LoginModal,
  },
	data: () => ({
    menu : [
      {icon : 'signup', title:'Sign Up', link:"/signup"},
      {icon : 'signin', title:'Sign In', link:"/signin"},
    ],
  }),

}
</script>
