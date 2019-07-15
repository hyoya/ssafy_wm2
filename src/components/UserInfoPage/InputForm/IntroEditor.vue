<template>
    <v-dialog v-model="intromodal"  max-width="600px">

      <template v-slot:activator="{ on }">
        <v-btn fab small outline v-on="on"><i class="fa fa-pencil"/></v-btn>
      </template>

      <v-card>
        <v-toolbar>
          <span class="font-weight-regular headline">자기소개 수정</span>
          <v-spacer/>
          <div @click="intromodal = false"><i class="fa fa-close"/></div>
        </v-toolbar>

        <v-card-text>
          <v-layout row>
            <v-flex xs12>
              <span>설명</span>
              <v-text-field
              outline
              v-model="intro"
              >
              </v-text-field>
              {{intro}}
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-btn v-on:click="sendIntro(intro)"> 등록 </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";

  export default {
    data: () => ({
      intromodal:false,
      intro : '',
      componentKeys : 0,
    }),
    methods : {
      addNewCareer(){
        this.careers.push(this.career);
      },
      deleteCareer(index){
        this.careers.splice(index,1);
      },
      sendIntro(intro) {
        this.$emit('sendIntro',intro);
        // this.$emit('show-log');
        // 'show-log' -> 상위 컴포넌트에서 실행 시킬 함수 이름
      }
    },
    props : {
      introinput: {type: String}, // intro input data
    },
  }
</script>
