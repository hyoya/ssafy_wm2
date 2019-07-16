<!-- UserSideInfo -->
<template>
  <div style=" padding:1vw; background:white">
    <!-- USER Profile Img -->
    <v-layout wrap align-center justify-space-around>
      <v-avatar size="150" class="grey lighten-2">
        <!-- <img src="https://i.imgur.com/aTI4OeZ.png?1" v-if="userImage =='null'">
        <img src="https://i.imgur.com/SSlPWnK.png" v-if="userImage !=='null'"> -->
        <div v-if="isMine">
          나의것이니라!!!!!!!!!!!
        </div>
      </v-avatar>
    </v-layout>

    <!--USER Intro-->
    <v-layout style="margin-top:1vw;">
      <v-flex class="text-md-center">
        <span class="subheading grey--text text-md-center">{{userdata[0].userName}}</span>
        <v-btn fab flat outline small v-if="!isMine && !isFollow" @click="follow()">팔로우!</v-btn>
        <v-btn fab flat outline small v-if="!isMine && isFollow" @click="unfollow()">언팔!</v-btn>
        <div class="subheading grey--text"> {{userdata[0].userIntro}} <IntroEditor v-on:sendIntro="receiveIntro" v-if="isMine"/></div>
      </v-flex>
    </v-layout>

    <!--USER SKILLS-->
    <div style="border-top:1px red dashed;"/>
    <v-layout wrap style="margin-top:2vw;">
      <v-flex xs12 class="text-md-center subheading">SKILLS <SkillEditor v-on:sendSkill="receiveSkill" v-if="isMine"/> </v-flex>
      <v-flex xs12>
        <div v-if="skillToggle" class="caption">
          <p> 등록된 기술이 없습니다. </p>
        </div>
        <div v-else>
        <v-btn  flat small outline radius v-for="s in userdata[0].userSkills">{{s}}</v-btn>
      </div>
      </v-flex>
    </v-layout>

    <!--USER Careers-->
    <div style="border-top:1px red dashed;"/>
    <v-layout wrap style="margin-top:2vw;">
      <v-flex xs12 class="text-md-center subheading"> Career <CareerEditor v-on:sendCar="receiveCar" v-if="isMine"/>
      </v-flex>
      <v-flex xs12>
        <!-- v-for Career-->
        <div v-if="careerToggle" class="caption">
          <p> 등록된 경력이 없습니다. </p>
        </div>
        <div v-for="c in userdata[0].userCareers" class="caption" v-else>
          {{c.Company}} {{c.Position}}<br/>
          {{c.Description}}<br/>
          {{c.Startday}} ~ {{c.Endday}}<br/>
        </div>
      </v-flex>
    </v-layout>

    <!--USER Education-->
    <div style="border-top:1px red dashed;"/>
    <v-layout wrap style="margin-top:2vw;">
      <v-flex xs12 class="text-md-center subheading"> Education <EducationEditor v-on:sendEdu="receiveEdu" v-if="isMine"/></v-flex>
      <v-flex xs12>
        <!-- v-for Education -->
        <div v-if="educationToggle" class="caption">
          <p> 등록된 교육이력이 없습니다. </p>
        </div>
        <div v-for="e in userdata[0].userEducations" class="caption" v-else>
          {{e.Agency}}<br/>
          {{e.Degree}}<br/>
          {{e.Startday}} ~ {{e.Endday}}<br/>
        </div>
      </v-flex>
    </v-layout>

  </div>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";
import CareerEditor from "./InputForm/CareerEditor";
import EducationEditor from "./InputForm/EducationEditor";
import IntroEditor from "./InputForm/IntroEditor";
import SkillEditor from "./InputForm/SkillEditor";

export default {
  data() {
    return {
      isFollow:false,
      userSkills: [],
      userImage: "",
      userIntro: "",
      userCareers: "",
      userEducations: "",
      educationToggle : false,
      careerToggle : false,
      userdata: [ {userName : ''} , {userIntro : ''} , {userEducations : ''} ],
      userIntroKEY: 0,
    }
  },
  props: {
    isMine : {type:Boolean ,default:false}
  },
  components:{
    CareerEditor,
    EducationEditor,
    IntroEditor,
    SkillEditor,
  },
  created() {
    this.SELECT_Userdata();
    this.isMineCheck();
    this.isFollowCheck();
  },
  methods: {
    async SELECT_Userdata() {
      this.userdata = await FirebaseService.SELECT_Userdata(this.$route.params.id);
      if ( this.userdata[0].userIntro == "" )
      this.userdata[0].userIntro = "소개말이 없습니다."
      if ( this.userdata[0].userEducations.length == 0 ) {
        this.educationToggle = true;
      } else {
        this.educationToggle = false;
      }
      if ( this.userdata[0].userCareers.length == 0 ) {
        this.careerToggle = true;
      } else {
        this.careerToggle = false;
      }

      if ( this.userdata[0].userSkills.length == 0 ) {
        this.skillToggle = true;
      } else {
        this.skillToggle = false;
      }
    },
    receiveIntro(intro) {
      FirebaseService.UPDATE_userIntro(intro,this.$route.params.id);
      this.userdata[0].userIntro = intro;
    },

    receiveSkill(skill) {
      FirebaseService.UPDATE_userSkill(skill,this.$route.params.id);
      this.userdata[0].userSkills = skill;
      this.SELECT_Userdata();
    },

    async receiveEdu(edu) {
      this.userEducations = await FirebaseService.SELECT_Userdata(this.$route.params.id);
      FirebaseService.UPDATE_userEdu(edu,this.userEducations[0].userEducations,this.$route.params.id);
      // 새로운 데이터 값을 가지는 유저데이터를 가져옴
      this.SELECT_Userdata();
    },

    async receiveCar(car) {
      this.userCareers = await FirebaseService.SELECT_Userdata(this.$route.params.id);
      FirebaseService.UPDATE_userCar(car,this.userCareers[0].userCareers,this.$route.params.id);
      // 새로운 데이터 값을 가지는 유저데이터를 가져옴
      this.SELECT_Userdata();
    },

    isMineCheck() {
      if ( this.$route.params.id == this.$session.get('session_id') ) {
        this.isMine = true;
      } else {
        this.isMine = false;
      }
    },

    async follow(){
      var follower = await FirebaseService.SELECT_Userdata(this.$route.params.id);
      var following = await FirebaseService.SELECT_Userdata(this.$session.get('session_id'));
      //console.log("this is test :: ", follower[0].followerlist, following[0].followinglist);
      await FirebaseService.follow(
        this.$route.params.id,
        this.$session.get('session_id'),
        follower[0].followerlist,
        following[0].followinglist
      );
      this.isFollowCheck();
    },

    async unfollow(){
      var follower = await FirebaseService.SELECT_Userdata(this.$route.params.id);
      var following = await FirebaseService.SELECT_Userdata(this.$session.get('session_id'));
      //console.log("this is test :: ", follower[0].followerlist, following[0].followinglist);
      await FirebaseService.unfollow(
        this.$route.params.id,
        this.$session.get('session_id'),
        follower[0].followerlist,
        following[0].followinglist
      );
      this.isFollowCheck();
    },
    async isFollowCheck() {
      var following = await FirebaseService.SELECT_Userdata(this.$route.params.id);
      var tmp = following[0].followerlist.includes(this.$session.get('session_id'));
      this.isFollow=tmp;
    },
  },


};
</script>
