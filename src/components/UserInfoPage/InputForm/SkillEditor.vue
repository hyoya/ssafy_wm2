<template>
    <v-dialog v-model="skillmodal"  max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn fab small outline v-on="on" @click="initShowModal"><i class="fa fa-pencil"/></v-btn>
      </template>

      <!-- Modal -->
      <v-card>
        <v-toolbar>
          <span class="font-weight-regular headline">Skill Editor</span>
          <v-spacer/>
          <div @click="skillmodal = false"><i class="fa fa-close"/></div>
          <v-btn @click="test('ds')">test</v-btn>
        </v-toolbar>

        <!-- container -->
        <v-card-text>
          <v-layout row wrap>

            <v-flex xs12>
              <span>Show</span>
              <v-btn
              v-for="item in this.selectList"
              small flat outline round
              @click="deleteTech(item)">
                {{ item }}
              </v-btn>
            </v-flex>

            <hr/>
            <br/><br/><br/>

            <v-flex xs12>
              <span>보유스킬</span>
              <v-btn v-for="item in this.unselectList"
               small flat outline round
                @click="addTech(item)">
                {{ item }}
              </v-btn>
            </v-flex>

          </v-layout>
        </v-card-text>

        <!-- action -->
        <v-card-actions>
          <v-btn v-on:click="sendSkill(selectList)"> 등록 </v-btn>
        </v-card-actions>

      </v-card>
    </v-dialog>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";

  export default {
    props: [
      'userSkills',
      'showSkillList',
    ],
    data() {
        return {
        skillmodal:false,
        receiveUserSkills:this.userSkills,
        receiveShowSkillList:this.showSkillList,
        unselectList:[],
        selectList:[],
      }
    },
    created() {
    },
    methods : {
      deleteTech(item){
        this.selectList.splice(this.selectList.indexOf(item),1);
        this.calcDiff();
      },
      addTech(tech){
        this.selectList.push(tech);
        this.calcDiff();
      },
      sendSkill(skills) {
        this.$emit('sendSkill',skills);
        this.skillmodal = false;
      },
      calcDiff(){
        var tmp =[];
        for(var i=0; i<this.receiveUserSkills.length; i++){
          if(!this.selectList.includes(this.receiveUserSkills[i])){
            tmp.push(this.receiveUserSkills[i]);
          }
        }
        this.unselectList = tmp;
      },
      initShowModal(){
        this.receiveUserSkills = this.userSkills;
        this.receiveShowSkillList = this.showSkillList;
        this.selectList = this.showSkillList;
        this.calcDiff();
      },
    },

  }
</script>
