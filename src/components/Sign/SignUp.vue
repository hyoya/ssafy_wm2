<template>
  <v-layout>
    <v-dialog v-model="signupmodal" max-width="500px">

      <template v-slot:activator="{ on }">
        <v-btn class="usercantsee white--text" flat v-on="on">Sign Up</v-btn>
        <v-btn class="whoareyou usercansee white--text" flat @click="GetUserinfo(user)">{{user}}</v-btn>
        <v-btn class="usercansee white--text" flat @click="Logout()">Log Out</v-btn>
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

import SignIn from './SignIn'

  export default {
    components :{
      SignupforCompanyModal,
      SignupforUserModal,
    },
    data: () => ({
        signupforuser: false,
        signupforcompany: false,
        signupmodal: false,
        user : ''
      }),
    methods: {
      async Logout() {
        var result = await FirebaseService.Logout()
        if (result == false) {
          this.$session.set('session_id', '')
          this.$store.commit('setSession', '');
          // console.log(this.$store.getters.getSession,"setSession")
          // console.log(this.$session.get('session_id'))
        }
      },
      GetUserinfo(user) {
        FirebaseService.GetUserinfo(user)
      }
    },
    mounted() {
      this.user = this.$session.get('session_id')
    }
  }
</script>
