<template>

    <v-dialog v-model="skillmodal"  max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn fab small outline v-on="on"><i class="fa fa-pencil"/>스킬!</v-btn>
      </template>

      <!-- Modal -->
      <v-card>
        <v-toolbar>
          <span class="font-weight-regular headline">Skill Editor</span>
          <v-spacer/>
          <div @click="skillmodal = false"><i class="fa fa-close"/></div>
        </v-toolbar>

        <!-- container -->
        <v-card-text>
          <v-layout row wrap>

            <v-flex xs12>
              <span>보유스킬</span>
              <v-btn v-for="item in skills" small flat outline round @click="deleteTech(item)">
                {{ item }}</v-btn>
            </v-flex>

            <v-flex xs12>
              <v-text-field
              v-model="tech"
              v-on:keyup.enter="addNewTech()"
              ></v-text-field>
            </v-flex>

            <v-flex xs12>
              <v-btn v-for="tech in techlist"
               small flat outline round
                @click="addTech(tech)">
                {{ tech }}
              </v-btn>
            </v-flex>

          </v-layout>
        </v-card-text>

        <!-- action -->
        <v-card-actions>
          <v-btn v-on:click="sendSkill(skills)"> 등록 </v-btn>
        </v-card-actions>

      </v-card>
    </v-dialog>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";

  export default {
    data() {
        return {
        skillmodal:false,
        techlist:[
          "C",
          "C++",
          "java",
          "javascript",
        ],
        tech:"",
        skills: "",
      }
    },
    created() {
      this.SELECT_Userdata();
    },
    methods : {
      async SELECT_Userdata() {
        var userdata = await FirebaseService.SELECT_Userdata(this.$route.params.id);
        this.skills = userdata[0].userSkills
      },
      addNewTech(){
        if( this.tech !==  "" ) {
          this.skills.push(this.tech);
        }
        this.tech="";
      },
      deleteTech(item){
        this.skills.splice(this.skills.indexOf(item),1);
      },
      addTech(tech){
        this.skills.push(tech);
      },
      sendSkill(skills) {
        this.$emit('sendSkill',skills);
        this.skillmodal = false;
      }
    },

  }
</script>
