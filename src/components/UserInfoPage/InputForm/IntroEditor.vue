<template>
    <v-dialog v-model="intromodal"  max-width="600px">

      <template v-slot:activator="{ on }">
        <v-btn fab small outline v-on="on"><i class="fa fa-pencil"/></v-btn>
      </template>


      <v-card>
        <v-toolbar>
          <span class="font-weight-regular headline">경력 추가</span>
          <v-spacer/>
          <div @click="intromodal = false"><i class="fa fa-close"/></div>
        </v-toolbar>

        <v-card-text>
          <v-layout row>
            <v-flex xs12>
              <span>설명</span>
              <v-text-field
              outline
              v-model="introinput"
              >
              </v-text-field>
              {{introinput}}
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-btn>등록</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>

  export default {
    data: () => ({
      intromodal:false,
    }),
    methods : {
      addNewCareer(){
        this.careers.push(this.career);
      },
      deleteCareer(index){
        this.careers.splice(index,1);
      },
      signup(id, password, first_name, last_name, phonenumber) {
        FirebaseService.signup(id, password, first_name, last_name, phonenumber)
      }
    },
    props : {
      introinput: {type: String}, // intro input data
    },
  }
</script>
