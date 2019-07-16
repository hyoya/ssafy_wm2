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
    comments: [
      { nick: "닉네임", content: "댓글1" },
      { nick: "닉네임", content: "댓글2" },
      { nick: "닉네임", content: "댓글3" }
    ],
    comment: "",
    etcproject: [
      { url: "https://source.unsplash.com/random/100x100" },
      { url: "https://source.unsplash.com/random/100x100" },
      { url: "https://source.unsplash.com/random/100x100" }
    ]
  }),
  methods: {
    INSERT_Comment(comment) {
      // 현재 댓글을 남기고자 하는 사람을 찾고
      var user = this.$session.get('session_id')

      // 댓글을 쓰고자 하는 사람이 존재한다면??
      if (user) {
        FirebaseService.INSERT_Comment(this.project_id, this.projecttitle, user, comment)
        const newcommnet = {
          nick: user,
          content: this.comment
        };
        this.comments.push(newcommnet)
      } else {
        // 로그인 안했으면 안했다고 알려줘야지 헤헤
        alert('너 로그인안했다. 댓글못쓴다~')
      }
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
      window.open("../project/"+pcode,"testpage");
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
