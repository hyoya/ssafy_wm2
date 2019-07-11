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
        <div id="google_translate_element"></div>
        <!-- sign in & sign up  -->
        <v-toolbar-items>
          <SignInModal />
          <SignUpModal />
          <v-btn flat class="white--text" href="/userInfoPage">userInfo</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <!-- toolbar end -->
    </v-flex>
  </v-layout>
</template>

<script>
import SignInModal from "./SignIn/SignIn";
import SignUpModal from "./SignUp/SignUp";

export default {
  name: "PHeader",
  props: {},
  components: {
    SignInModal,
    SignUpModal,
  }

};
</script>
