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
                <v-text-field label="ID" required v-model="LoginId"></v-text-field>
              </v-flex>

              <v-flex xs12>
                <v-text-field label="Password*" type="password" required v-model="LoginPassword"></v-text-field>
              </v-flex>

            </v-layout>
          </v-container>
          <v-btn round color="#4267b2" dark @click="SigninFacebook()" style="width:100%;"><v-icon size="25" class="mr-2">fa-facebook</v-icon> Facebook으로 로그인하기</v-btn>

        </v-card-text>


        <v-card-actions>
          <!-- <v-spacer></v-spacer> -->
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="dialog = false, Signin(LoginId, LoginPassword)">Login</v-btn><br>
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
      LoginId : '',
      LoginPassword : '',
      check : false
    }),
    methods: {
      async Signin(id, password) {
        this.check = await FirebaseService.Signin(id, password)
        if (this.check == true) {
          this.$session.set('session_id', id)
          this.$store.commit('setSession',id);
          // console.log(this.$store.getters.getSession,"setSession")
          // console.log(this.$session.get('session_id'))
        }
      },
      async SigninFacebook() {
        var answer = await FirebaseService.SigninFacebook()
        this.check = answer.result
        if (this.check == true) {
          this.$session.set('session_id', answer.user)
          this.$store.commit('setSession', answer.user);
          // console.log(this.$store.getters.getSession,"setSession")
          // console.log(this.$session.get('session_id'))
        }
      }
  }
}
</script>
