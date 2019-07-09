<template>

    <v-dialog v-model="signupforcompanymodal" max-width="600px" xs6>

      <template v-slot:activator="{ on }" >
        <v-btn flat outline color="indigo" v-on="on" style="padding: 100px 80px;">회사용</v-btn>
      </template>


      <v-card>
        <!-- title -->
        <v-card-title>
          <span class="headline">Sign up For Company</span>
        </v-card-title>


        <v-card-text>
          <v-container grid-list-md>

            <v-layout wrap>
              <!-- Company Name -->
              <v-flex xs12>
                <v-text-field label="Company Name*" required></v-text-field>
              </v-flex>

              <!-- email -->
              <v-flex xs12>
                <v-text-field label="Email*" required></v-text-field>
              </v-flex>

              <!-- Password -->
              <v-flex xs12>
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-flex>

              <v-flex xs12>
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-flex>

            </v-layout>
          </v-container>

          <!-- *은 필수입력 항목입니다. -->
          <small>*indicates required field</small>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="signupforcompanymodal = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="signupforcompanymodal = false">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
  export default {
    data: () => ({
      signupforcompanymodal: false
    })
  }
</script>
