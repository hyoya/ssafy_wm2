<!-- UserSideInfo -->
<template>
  <div style=" padding:1vw; background:white">
    <!-- USER Profile Img -->
    <v-layout wrap align-center justify-space-around>
        <v-avatar size="150" class="grey lighten-2">
          <img src="https://i.imgur.com/aTI4OeZ.png?1" v-if="userImage=='null'">
          <img src="https://i.imgur.com/SSlPWnK.png" v-if="userImage !=='null'">
        </v-avatar>
    </v-layout>

    <!--USER Intro-->
    <v-layout style="margin-top:1vw;">
      <v-flex class="text-md-center">
        <span class="subheading grey--text">{{userName}}</span>
        <div class="subheading grey--text">{{userIntro}}</div>
      </v-flex>
    </v-layout>

    <!--USER SKILLS-->
    <div style="border-top:1px red dashed;"/>
    <v-layout wrap style="margin-top:2vw;">
      <v-flex xs12 class="text-md-center subheading">SKILLS</v-flex>
      <v-flex xs12>
        <v-btn  flat small outline radius v-for="s in userSkills">{{s}}</v-btn>
      </v-flex>
    </v-layout>

    <!--USER Careers-->
    <div style="border-top:1px red dashed;"/>
    <v-layout wrap style="margin-top:2vw;">
      <v-flex xs12 class="text-md-center subheading">Careers</v-flex>
      <v-layout align-center>
        <v-flex xs12 >
          <div v-for="c in userCareers" class="caption">
            {{c.carcompany}}<br/>
            {{c.carposition}}<br/>
            {{c.carstartday}} ~ {{c.carendday}}<br/>
            {{c.cardescription}}
          </div>
        </v-flex>
      </v-layout>
    </v-layout>

    <!--USER Education-->
    <div style="border-top:1px red dashed;"/>
    <v-layout wrap style="margin-top:2vw;">
      <v-flex xs12 class="text-md-center subheading">Education</v-flex>
      <v-layout align-center>
        <v-flex xs12 >
          <div v-for="e in userEducations" class="caption">
            {{e.eduagency}}<br/>
            {{e.edudegree}}<br/>
            {{e.edustartday}} ~ {{e.eduendday}}<br/>
          </div>
        </v-flex>
      </v-layout>
    </v-layout>

  </div>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";
import CareerEditor from "./InputForm/CareerEditor";
import EducationEditor from "./InputForm/EducationEditor";
import IntroEditor from "./InputForm/IntroEditor";

export default {
  data() {
    return {
      userSkills: ["자바sdfsdfsfsdf","C","Vue"],
      userImage: "null",
      userName : "unknown",
      userIntro: "자기소개",
      userCareers: [
        {
        carcompany:"어딘가회사",
        carposition:"무슨직책",
        carstartday:"2018-12-09",
        carendday:"2019-12-09",
        cardescription:"노동력을 착취당하였다."
      },
      {
      carcompany:"어딘가회사",
      carposition:"무슨직책",
      carstartday:"2018-12-09",
      carendday:"2019-12-09",
      cardescription:"노동력을 착취당하였다."
      },
    ],
      userEducations: [
        {
        eduagency:"싸피",
        edudegree:"1기",
        edustartday:"2018-12-09",
        eduendday:"2019-12-09",
        },
        {
        eduagency:"싸피",
        edudegree:"2기",
        edustartday:"2018-12-09",
        eduendday:"2019-12-09",
        }
      ],
    }
  },
  components:{
    CareerEditor,
    EducationEditor,
    IntroEditor,
  },
  created() {
    this.getUserdata();
    console.log(this.userdata);
  },
  methods: {
    async getUserdata() {
      this.id = this.$route.params.id;
      this.userdata = await FirebaseService.getUserdata(this.id);
    }
  }

};
</script>
