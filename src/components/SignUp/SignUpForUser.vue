<template>

    <v-dialog v-model="signupforusermodal"  max-width="600px" xs6>

      <template v-slot:activator="{ on }">
        <v-btn flat outline color="indigo" v-on="on" style="padding: 100px 80px;">개인용</v-btn>
      </template>


      <v-card>
        <!-- title -->
        <v-card-title>
          <span class="headline">Sign up For User</span>
        </v-card-title>


        <v-card-text>
          <v-container grid-list-md>

            <v-layout wrap>

              <!-- User name -->
              <v-flex xs12 sm6>
                <v-text-field label="first name*" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field label="last name*" required></v-text-field>
              </v-flex>

              <!-- email -->
              <v-flex xs12>
                <v-text-field label="Email*" required></v-text-field>
              </v-flex>

              <!-- Password -->
              <v-flex xs12>
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-flex>

              <!-- PhoneNumber -->
              <v-flex xs12>
                <v-text-field label="PhoneNumber*"></v-text-field>
              </v-flex>

              <!-- 경력 -->
              <!--
              <v-flex xs12>
                <v-text-field label="경력을 입력하세요" v-model="career"></v-text-field>
                <v-btn flat @click="addNewCareer"> ADD </v-btn>
                <v-list subheader>
                  <v-list-tile    v-for="(career, index) in careers" >
                    <v-list-tile-content>
                      <v-list-tile-title v-html="career"></v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-action>
                      <i class="fa fa-minus-circle"  @click="deleteCareer(index)"></i>
                    </v-list-tile-action>
                  </v-list-tile>

                </v-list>
              </v-flex>
            -->


              <!-- 이미지 -->
              <v-flex xs12>
                <!-- TODO Add ImgUpload Btn-->
                <v-flex xs
              </v-flex>

            </v-layout>
          </v-container>

          <!-- *은 필수입력 항목입니다. -->
          <small>*indicates required field</small>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="signupforusermodal = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="signupforusermodal = false">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
  export default {
    data: () => ({
      signupforusermodal: false,
      careers : [],
      career:"",
    }),
    methods : {
      addNewCareer(){
        this.careers.push(this.career);
      },
      deleteCareer(index){
        this.careers.splice(index,1);
      }
    }
  }
</script>
