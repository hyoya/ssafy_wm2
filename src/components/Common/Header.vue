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
          <Sign />
          <v-btn flat class="white--text" href="/story">Story</v-btn>
          <v-btn flat class="white--text" href="/companyIntro">Company</v-btn>
          <v-btn flat class="white--text" href="/git">Git</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <!-- toolbar end -->
    </v-flex>
  </v-layout>
</template>

<script>
import FirebaseService from "@/services/FirebaseService"

import Sign from "../Sign/Sign";


export default {
  name: "Header",
  props: {},
  components: {
    Sign
  }
};
</script>
