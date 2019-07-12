<template>
    <v-dialog v-model="edumodal"  max-width="600px">

      <template v-slot:activator="{ on }">
        <v-btn fab small outline v-on="on"><i class="fa fa-pencil"/></v-btn>
      </template>


      <v-card>
        <v-toolbar>
          <span class="font-weight-regular headline">교육 추가</span>
          <v-spacer/>
          <div @click="edumodal = false"><i class="fa fa-close"/></div>
        </v-toolbar>

        <v-card-text>
            <v-layout row justify-center>
              {{eduagency}} {{edudegree}} {{edustartday}} {{eduendday}}
              <v-flex xs12 sm5>
                <span>*기관명</span>
                <v-text-field
                  single-line
                  outline
                  required
                  v-model="eduagency"
                  ></v-text-field>
              </v-flex>
              <v-flex hidden-only-xs sm1/>
              <v-flex xs12 sm5>
                <span>학위</span>
                <v-text-field
                  single-line
                  outline
                  v-model="edudegree"
                  ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12 sm6>
                <span>시작일</span>
                <div><input type="date"
                  single-line
                  outline
                  v-model="edustartday"
                  ></input></div>
              </v-flex>
              <v-flex xs12 sm6>
                <span>종료일</span>
                <div><input type="date"
                  single-line
                  outline
                  v-model="eduendday"
                  ></input></div>
              </v-flex>
            </v-layout>


          <v-card-actions>
            <v-btn>등록</v-btn>
          </v-card-actions>

        </v-card-text>
      </v-card>
    </v-dialog>
</template>

<script>

  export default {
    data: () => ({
      edumodal:false,
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
      eduagency: {type: String}, //프로젝트 메인 이미지
      edudegree: {type: String}, // 프로젝트 이름
      edustartday: {type: String}, //프로젝트 간단 설명
      eduendday: {type: String}, // 프로젝트 기간
    },
  }
</script>
