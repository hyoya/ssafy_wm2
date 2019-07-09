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

        <!-- sign in & sign up  -->
        <v-toolbar-items>
          <LoginModal />
          <SignUpModal />
          <v-btn flat class="white--text" href="/userInfo">userInfo</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <!-- toolbar end -->
    </v-flex>
  </v-layout>
</template>

<script>
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUp/SignUp";

export default {
  name: "PHeader",
  props: {},
  components: {
    LoginModal,
    SignUpModal
  },
  data: () => ({})
};
</script>
