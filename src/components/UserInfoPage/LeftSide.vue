<!-- UserSideInfo -->
<template>
  <div style=" padding:1vw; background:white">
    <!-- USER Profile Img -->
    <v-layout wrap align-center justify-space-around>
      <v-avatar size="150" class="grey lighten-2">
        <!-- <img src="https://i.imgur.com/aTI4OeZ.png?1" v-if="userImage =='null'">
        <img src="https://i.imgur.com/SSlPWnK.png" v-if="userImage !=='null'"> -->
      </v-avatar>
    </v-layout>

    <!--USER Intro-->
    <v-layout style="margin-top:1vw;">
      <v-flex class="text-md-center">
        <p class="subheading grey--text text-md-center">{{userdata[0].userName}}</p>
        <div class="subheading grey--text"> {{userdata[0].userIntro}} <IntroEditor v-on:sendIntro="receiveIntro" /></div>
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
      <v-flex xs12 class="text-md-center subheading">Careers
        <!-- <CareerEditor /> -->
      </v-flex>
      <v-flex xs12>
        <!-- v-for Career-->
      </v-flex>
    </v-layout>

    <!--USER Education-->
    <div style="border-top:1px red dashed;"/>
    <v-layout wrap style="margin-top:2vw;">
      <v-flex xs12 class="text-md-center subheading">Education <EducationEditor v-on:sendEdu="receiveEdu" /></v-flex>
      <v-flex xs12>
        <!-- v-for Education -->
      </v-flex>
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
      userSkills: [],
      userImage: "",
      userIntro: "",
      userCareers: [],
      userEducations: [],
      userdata: [ {userName : ''} , {userIntro : ''} ],
      userIntroKEY: 0,
    }
  },
  components:{
    CareerEditor,
    EducationEditor,
    IntroEditor,
  },
  created() {
    this.SELECT_Userdata();
  },
  methods: {
    async SELECT_Userdata() {
      this.userdata = await FirebaseService.SELECT_Userdata(this.$route.params.id);
    },
    receiveIntro(intro) {
      FirebaseService.UPDATE_userIntro(intro,this.$route.params.id);
      this.userdata[0].userIntro = intro;
    },
    receiveEdu(edu) {
      FirebaseService.UPDATE_userEdu(edu,this.$route.params.id);
    },
  }

};
</script>
