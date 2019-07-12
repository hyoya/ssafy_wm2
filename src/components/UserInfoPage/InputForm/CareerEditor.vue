<template>
    <v-dialog v-model="careermodal"  max-width="600px">

      <template v-slot:activator="{ on }">
        <v-btn fab small outline v-on="on"><i class="fa fa-pencil"/></v-btn>
      </template>


      <v-card>
        <v-toolbar>
          <span class="font-weight-regular headline">경력 추가</span>
          <v-spacer/>
          <div @click="careermodal = false"><i class="fa fa-close"/></div>
        </v-toolbar>

        <v-card-text>
          <v-layout row justify-center>
            {{carcompany}} {{carposition}} {{ cardescription}}
            {{ carstartday}} {{carendday}}
            <v-flex xs12 sm6>
              <span>*회사명</span>
              <v-text-field
                single-line
                outline
                v-model="carcompany"
                ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <span>직책/직무</span>
              <v-text-field
                single-line
                outline
                v-model="carposition"
                ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6>
              <span>시작일</span>
              <div><input type="date"
                single-line
                outline
                v-model="carstartday"
                ></input></div>
            </v-flex>
            <v-flex xs12 sm6>
              <span>종료일</span>
              <div><input type="date"
                single-line
                outline
                v-model="carenddday"
                ></input></div>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <span>설명</span>
              <v-text-field
              outline
              v-model="cardescription"
              >
              </v-text-field>
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
      careermodal:false,
    }),
      props : {
        userid : {type:String},
        carcompany: {type: String}, //경력 회사
        carposition: {type: String}, // 경력 직책
        carstartday: {type: String}, //시작일
        carendday: {type: String}, // 종료일
        cardescription: {type: String}, //경력 설명
      },
    }
</script>
