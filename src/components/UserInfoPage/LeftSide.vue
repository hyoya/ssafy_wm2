<!-- UserSideInfo -->
<template>
  <div style="padding:1vw; background:white">
    <!-- USER Profile Img -->
    <v-layout wrap align-center justify-space-around @mouseover="showRmImgBtn=true" @mouseleave="showRmImgBtn=false">
      <div v-if="!image" justify-center>
        <v-avatar size="150" class="grey lighten-2">
          <img src="https://i.imgur.com/aTI4OeZ.png?1">
        </v-avatar>
        <input type="file" @change="onFileChange" />
      </div>

      <div v-else style="position:relative;">
        <v-btn
          @click="removeImage"
          v-show="showRmImgBtn"
          flat outline small absolute fab
          style="z-index:2; right:0;">
          X
        </v-btn>
        <br/>
        <v-avatar size="150" class="grey lighten-2">
          <img :src="image"/>
        </v-avatar>
      </div>
    </v-layout>

    <!--USER Intro-->
    <v-layout style="margin-top:1vw;">
      <v-flex class="text-md-center">
        <span class="subheading grey--text text-md-center">{{userdata[0].userName}}</span>
        <v-btn fab flat outline small v-if="!isMine && !isFollow" @click="follow()">팔로우!</v-btn>
        <v-btn fab flat outline small v-if="!isMine && isFollow" @click="unfollow()">언팔!</v-btn>
        <div class="subheading grey--text"> {{userdata[0].userIntro}} <IntroEditor v-on:sendIntro="receiveIntro" :introinput="userdata[0].userIntro" v-if="isMine"/></div>
      </v-flex>
    </v-layout>

    <!--USER SKILLS-->
    <div style="border-top:1px red dashed;"/>
    <v-layout wrap style="margin-top:2vw;">
      <v-flex xs12 class="text-md-center subheading">
        Skills
        <SkillEditor
        v-on:sendSkill="receiveSkill"
        v-if="isMine"
        v-bind:userSkills="this.userdata[0].userSkills"
        v-bind:showSkillList="this.userdata[0].showSkillList"/>
      </v-flex>
      <v-flex xs12>
        <div v-if="skillToggle" class="caption">
          <p> 등록된 기술이 없습니다. </p>
        </div>
        <div v-else>
          <v-btn  flat small outline radius v-for="s in userdata[0].showSkillList">{{s}}</v-btn>
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

        <div
        v-else
        v-for="(c, index) in userdata[0].userCareers"
        class="caption"
        @mouseover="showRmCarBtn(index)" @mouseleave="hideRmCarBtn(index)"
        style="position:relative; padding:15px 6px; border-bottom:1px black solid;">
          <v-btn
            v-on:click="rmCareer(userdata[0].userCareers,c,userdata[0].email,reload)"
            v-show:false
            flat outline small absolute fab
            style="z-index:2; right:0;"
            class ="carbtn">
            X
          </v-btn>
          <span class="subheading">{{c.Company}}<br/></span>
          <span class="body-2">{{c.Position}}<br/></span>
          <span class="gray--text">{{c.Description}}</span>
          <span class="gray--text" v-if="c.Startday !=''"><br/>{{c.Startday}} ~ {{c.Endday}}</span>
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

        <div
          v-else
          v-for="(e, index) in userdata[0].userEducations"
          class="caption"
          @mouseover="showRmEduBtn(index)" @mouseleave="hideRmEduBtn(index)"
          style="position:relative; padding:15px 6px; border-bottom:1px black solid;"
          >
          <v-btn
            v-on:click="rmEducation(userdata[0].userEducations,e,userdata[0].email,reload)"
            v-show:false
            flat outline small absolute fab
            style="z-index:2; right:0;"
            class ="edubtn"
            >
            X
          </v-btn>
          <span class="subheading">{{e.Agency}}<br/></span>
          <span class="body-2">{{e.Degree}}<br/></span>
          <span class="gray--text">{{e.Startday}} ~ {{e.Endday}}<br/></span>
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
      image : '',
      isFollow:false,
      educationToggle : false,
      careerToggle : false,
      skillToggle : false,
      imageToggle : false,
      userdata: [
        {userName : ''} ,
        {userIntro : ''} ,
        {userEducations : ''},
        {userImage : ''},
        {userSkills : ''},
        {showSkillList:''} ],
      showRmImgBtn : false,
      reload : false,
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
      this.toStory(true);
      this.userdata = await FirebaseService.SELECT_Userdata(this.$route.params.id);
      if ( this.userdata[0].userIntro == "" ) {
        this.userdata[0].userIntro = "소개말이 없습니다."
      }
      if ( this.userdata[0].userImage == "" ) {
        this.imageToggle = true;
        this.image = "";
      } else {
        this.imageToggle = false;
        this.image = this.userdata[0].userImage;
      }
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
      this.toStory(false);
    },

    receiveIntro(intro) {
      FirebaseService.UPDATE_userIntro(intro,this.$route.params.id);
      this.userdata[0].userIntro = intro;
    },
    receiveSkill(skill) {
      FirebaseService.UPDATE_userSkill(skill,this.$route.params.id);
      this.userdata[0].userSkills = skill;
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
    toStory(load) {
      this.$emit('toStory',load);
    },
    removeImage(){
      FirebaseService.DELETE_userImage(this.$route.params.id);
      this.image = "";
    },
    onFileChange(e) {
      // file 세팅
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }
      const apiUrl = "https://api.imgur.com/3/image";
      let data = new FormData();
      let content = {
        method: "POST",
        headers: {
          Authorization: "Client-ID f96b8964f338658",
          Accept: "application/json"
        },
        body: data,
        mimeType: "multipart/form-data"
      };
      data.append("image", files[0]);
      fetch(apiUrl, content)
      .then(response => response.json())
      .then(success => {
        this.image = success.data.link;
        FirebaseService.UPDATE_userImage(this.image,this.$route.params.id)
      })
      .catch();
    },
    showRmEduBtn(index) {
      $('.edubtn').eq(index).show();
    },
    hideRmEduBtn(index) {
      $('.edubtn').eq(index).hide();
    },
    showRmCarBtn(index) {
      $('.carbtn').eq(index).show();
    },
    hideRmCarBtn(index) {
      $('.carbtn').eq(index).hide();
    },

    rmCareer(userCareers, c, userId, reload){
      this.reload = FirebaseService.DELETE_userCareer(userCareers,c,userId,reload);
    },
    rmEducation(userEducations, e, userId, reload){
      this.reload = FirebaseService.DELETE_userEducations(userEducations, e, userId, reload);
    },



    test(tmp){
      console.log(tmp);
    },
  },
  watch: {
    'reload' : 'SELECT_Userdata'
  }

};
</script>
