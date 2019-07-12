<template>
  <v-layout>
    <v-dialog v-model="signupmodal" max-width="500px">

      <template v-slot:activator="{ on }">
        <v-btn class="usercantsee white--text" flat v-on="on">Sign Up</v-btn>
        <v-btn class="usercansee whoareyou white--text" flat @click="get_userinfo()">누구십니까</v-btn>
        <v-btn class="usercansee white--text" flat @click="logout()">Log Out</v-btn>
      </template>

      <v-card>
        <!-- title -->
        <v-card-title>
          Sign Up
        </v-card-title>

        <!-- Kind -->
        <v-card-text>
          <SignupforUserModal/>
          <SignupforCompanyModal/>
        </v-card-text>

        <!-- Close -->
        <v-card-actions>
          <v-btn color="primary" flat @click="signupmodal=false">Close</v-btn>
        </v-card-actions>

      </v-card>
    </v-dialog>
  </v-layout>
</template>


<script>
import FirebaseService from "@/services/FirebaseService";

import SignupforCompanyModal from './SignUpForCompany'
import SignupforUserModal from './SignUpForUser'

  export default {
    components :{
      SignupforCompanyModal,
      SignupforUserModal
    },
    data: () => ({
        signupforuser: false,
        signupforcompany: false,
        signupmodal: false,
        check : false
      }),
    methods: {
      async logout() {
        this.check = await FirebaseService.logout()
        if (this.check == false) {
          this.$session.set('session_id', '')
        }

      },
      get_userinfo() {
        FirebaseService.get_userinfo()
      }
    }
  }
</script>
