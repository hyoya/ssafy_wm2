<template>
  <v-flex class="text-xs-center">
    <button flat class="white--text" @click="popdetail(project_id)" style="height:80%;width:80%;">
      <v-flex hidden-xs-only>
        <v-img :src="projectimage" height="20vw" width="100%"></v-img>
          <div>
            <div class="black--text">{{projecttitle}}</div>
            <span class="grey--text" >{{projectdescription}}</span>
            <!-- <span class="grey--text" v-line-clamp:10="1">{{projectdescription}}</span> -->
          </div>
      </v-flex>
      <v-flex hidden-sm-and-up>
        <v-img :src="projectimage" height="45vw" width="100%"></v-img>
          <div>
            <div class="black--text">{{projecttitle}}</div>
            <span class="grey--text">{{projectdescription}}</span>
          </div>
      </v-flex>
    </button>
  </v-flex>
</template>


<script>
import FirebaseService from "@/services/FirebaseService";
import BigImg from "../Common/BigImg";

export default {
  components: {
    BigImg
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
    // description: "여기에는 프로젝트 디스크립션이 들어갈 공간입니다앙널민얼미;나어림ㄴ어라ㅣ;아아아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ글자수늘리기ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ",
    comments:[],
    comment: "",
    etcproject: [
      { url: "https://source.unsplash.com/random/100x100" },
      { url: "https://source.unsplash.com/random/100x100" },
      { url: "https://source.unsplash.com/random/100x100" }
    ],
    projectData : ''
  }),
  methods: {
    async INSERT_Comment(comment) {
      var user = this.$session.get('session_id')

      if (user) {
        this.projectData = await FirebaseService.SELECT_Project(this.project_id);
        var Json = new Object();
        Json.Comment = this.comment;
        Json.User = user;
        FirebaseService.INSERT_Comment(Json, this.projectData, this.project_id);
        const newcommnet = {
        User : user,
        Comment : this.comment
        };
        this.comments.push(newcommnet)

      } else {
        // 로그인 안했으면 안했다고 알려줘야지 헤헤
        alert('너 로그인안했다. 댓글못쓴다~')
      }
    },

    async get_comments() {
      this.comments = await FirebaseService.SELECT_Comments(this.project_id)
    },

    InfoProject() {
      var user = this.$session.get('session_id')
      FirebaseService.info_Projects(user, this.projecttitle)
    },
    likeit(index) {},
    test(temp) {
      alert(temp);
    },
    popdetail(pcode){
      window.open("../project/"+pcode,"name(해파리유성)","titlebar=no,status=no,toolbar=no,resizable=yes,top=20,left=500,width=700,height=600");
    }
  },

  mounted () {
    this.get_comments()
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
