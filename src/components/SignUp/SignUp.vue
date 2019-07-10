<template>
  <v-layout>
    <v-dialog v-model="signupmodal" max-width="500px">

      <template v-slot:activator="{ on }">
        <v-btn class="usercantsee white--text" flat v-on="on">Sign Up</v-btn>
        <v-btn id="whoareyou" class="usercansee white--text" flat >누구십니까</v-btn>
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
import SignupforCompanyModal from './SignUpForCompany'
import SignupforUserModal from './SignUpForUser'

import FirebaseService from "@/services/FirebaseService";

  export default {
    components :{
      SignupforCompanyModal,
      SignupforUserModal
    },
    data () {
      return {
        signupforuser: false,
        signupforcompany: false,
        signupmodal: false,
      }
    },
    methods: {
      logout() {
        FirebaseService.logout()
      }
    }

  }
</script>
