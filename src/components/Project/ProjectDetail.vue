<template>
  <v-flex class="text-xs-center">

    <v-flex hidden-xs-only>
      <!-- <ProjectEditor v-if="!state"> </ProjectEditor> -->
      <button flat class="white--text" @click="popdetail(project_id)" style="height:80%;width:80%;">
        <v-img :src="projectimage" height="20vw" width="100%"></v-img>
          <div>
            <div class="black--text">{{projecttitle}}</div>
            <span class="grey--text" >{{projectdescription}}</span>
          </div>
      </button>

      <v-btn v-if="isMine" @click="UPDATE_Project()">프로젝트 수정하기</v-btn>
      <v-btn v-if="isMine" @click="goup(state)">emit이 목표(진행중)</v-btn>

      <!-- <ProjectList v-if="!stateAdd"></ProjectList> -->

    </v-flex>

    <v-flex hidden-sm-and-up>
      <button flat class="white--text" @click="popdetail(project_id)" style="height:80%;width:80%;">
        <v-img :src="projectimage" height="45vw" width="100%"></v-img>
          <div>
            <div class="black--text">{{projecttitle}}</div>
            <span class="grey--text">{{projectdescription}}</span>
          </div>
      </button>
      <v-btn v-if="isMine" @click="UPDATE_Project()">프로젝트 수정하기</v-btn>

    </v-flex>

    <ProjectUpdator v-if="state"
      :project_id="this.project_id"
      > </ProjectUpdator>

  </v-flex>
</template>


<script>
import FirebaseService from "@/services/FirebaseService";
import BigImg from "../Common/BigImg";

// import ProjectList from "../UserInfoPage/ProjectList";
import ProjectUpdator from "../UserInfoPage/ProjectUpdator"

export default {
  components: {
    BigImg,
    // ProjectList,
    ProjectUpdator,
  },
  props: {
    projectimage: { type: String }, //프로젝트 메인 이미지
    projecttitle: { type: String }, // 프로젝트 이름
    projectdescription: { type: String }, //프로젝트 간단 설명
    project_id: { type: String }
  },
  data: () => ({
    popol: false,
    // projecttitle : "프로젝트이름",
    projectThumbnailurl: "https://source.unsplash.com/random/1600x900",
    developer: "개발자이름",
    projectThumbnail: "../assets/logo.png",
    date : '',
    // description: "여기에는 프로젝트 디스크립션이 들어갈 공간입니다ㅏㅏㅏㅏ",
    projectData : '',
    user:'',
    login:'',
    isMine: '',
    state : false,
  }),
  methods: {
    popdetail(pcode){
      var toggle = this.$store.getters.getPVT;
      if ( toggle ) {
        window.open("../project/"+pcode,"name(이름지정)","titlebar=no,status=no,toolbar=no,resizable=yes,top=20,left=500,width=700,height=600");
      } else {
        console.log(pcode, '첫단계 옴??')
        this.$emit('popdetail',pcode);
      }},
      UPDATE_Project() {
        this.state = (this.state)?false:true ?true:false;
      },
      goup(state) {
        console.log(!state, '이거 올라감?')
        this.$emit('goup', !state);
      }
  },

  created() {
    this.user = this.$route.params.id;
    this.login = this.$session.get('session_id')
    if ( this.user == this.login ) {
      this.isMine = true;
    } else {
      this.isMine = false;
    }
  }
};
</script>

<style>
.tag {
  border: solid 1px purple;
  border-radius: 10px;
  color: purple;
  padding-right: 2px;
}
.tech {
  border: solid 1px gray;
  border-radius: 10px;
  margin: 2px 5px;
  color: gray;
  padding: 2px 14px !important;
}
</style>
