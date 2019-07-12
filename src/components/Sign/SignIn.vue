<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">


      <template v-slot:activator="{ on }">

        <v-btn flat class="usercantsee white--text" v-on="on">Sign In</v-btn>

      </template>

      <v-card>
        <v-card-title>
          <span class="headline">Sign In</span>
        </v-card-title>


        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>

              <v-flex xs12>
                <v-text-field label="ID" required v-model="login_id"></v-text-field>
              </v-flex>

              <v-flex xs12>
                <v-text-field label="Password*" type="password" required v-model="login_password"></v-text-field>
              </v-flex>

            </v-layout>
          </v-container>
          <v-btn round color="#4267b2" dark @click="signin_facebook()" style="width:100%;"><v-icon size="25" class="mr-2">fa-facebook</v-icon> Facebook으로 로그인하기</v-btn>

        </v-card-text>


        <v-card-actions>
          <!-- <v-spacer></v-spacer> -->
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="dialog = false, signin(login_id, login_password)">Login</v-btn><br>
        </v-card-actions>

      </v-card>


    </v-dialog>
  </v-layout>
</template>


<script>
import FirebaseService from "@/services/FirebaseService";

  export default {
    data: () => ({
      dialog: false,
      login_id : '',
      login_password : '',
      check : false
    }),
    methods: {
      async signin(id, password) {
        this.check = await FirebaseService.login(id, password)
        if (this.check == true) {
          this.$session.set('session_id', id)
        }

      },
      signin_facebook() {
        FirebaseService.signin_facebook();
      },
    }
  }
</script>
