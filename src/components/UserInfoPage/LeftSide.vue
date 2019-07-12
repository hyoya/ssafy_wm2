<!-- UserSideInfo -->
<template>
  <v-layout column>
    <v-layout row xs12>
      <v-flex style="margin-left:120px">
        <v-avatar size="150" class="grey lighten-2">
          <img src="https://i.imgur.com/aTI4OeZ.png?1" v-if="userImage=='null'">
          <img src="https://i.imgur.com/SSlPWnK.png" v-if="userImage !=='null'">
        </v-avatar>
      </v-flex>
    </v-layout>

    <!--USER 자기소개-->
    <v-layout style="background:white;">
      <v-card-text>
        <p class="subheading grey--text text-md-center">{{userName}}</p>
        <p class="subheading grey--text text-md-center">{{userIntro}}</p> <IntroEditor/>
      </v-card-text>
    </v-layout>

    <!--USER SKILLS-->
    <v-layout row xs12>
      <v-flex style="background:white;">
        <v-card-text>
          <p class="subheading black--text text-md-center">SKILLS</p>
        </v-card-text>
        <v-flex>
          <v-btn v-for="skill in userSkills" flat small round outline>{{ skill }}</v-btn>
        </v-flex>
            <hr/>
        <v-card-text>
          <p class="subheading black--text text-md-center"> 경력 </p> <CareerEditor/>
        </v-card-text>
        <p v-for="career in userCareers">{{career}}</p>
            <hr/>
        <v-card-text>
          <p class="subheading black--text text-md-center"> 교육 </p>  <EducationEditor/>
        </v-card-text>
        <p v-for="education in userEducations">{{education}}</p>
      </v-flex>
    </v-layout>

    <!--USER 정보 추가 예정-->
  </v-layout>
</template>

<script>
import CareerEditor from "./InputForm/CareerEditor";
import EducationEditor from "./InputForm/EducationEditor";
import IntroEditor from "./InputForm/IntroEditor";

export default {
  data() {
    return {
      userSkills: ["자바","C","Vue"],
      userImage: "null",
      userName : "unknown",
      userIntro: "자기소개",
      userCareers: ["신입"],
      userEducations: ["2018.12.10 ~ :: SSAFY"],
    }
  },
  components:{
    CareerEditor,
    EducationEditor,
    IntroEditor,
  },

};
</script>
