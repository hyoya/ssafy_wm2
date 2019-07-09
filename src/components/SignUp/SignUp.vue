<template>
  <v-layout>
    <v-dialog v-model="signupmodal" max-width="500px">

      <template v-slot:activator="{ on }">
        <v-btn flat class="white--text" v-on="on">Sign Up</v-btn>
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
    }
  }
</script>
