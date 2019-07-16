<template>
  <button flat class="white--text" style="height:80%;width:80%;">
    <v-flex hidden-xs-only>
      <v-img :src="projectimage" height="20vw" width="100%"></v-img>
      <div>
        <div class="black--text">{{projecttitle}}</div>
        <span class="grey--text" v-line-clamp:10="1">{{projectdescription}}</span>
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
</template>


<script>
import BigImg from "../Common/BigImg";

export default {
  components: {
    BigImg
  },
  props: {
    projectimage: { type: String }, //프로젝트 메인 이미지
    projecttitle: { type: String }, // 프로젝트 이름
    projectdescription: { type: String }, //프로젝트 간단 설명
    projectterm: { type: String }, // 프로젝트 기간
    projectcontent: { type: String }, //프로젝트 설명(상세-위지윅으로 작성한 내용)
    projecttech: { type: Array }, //프로젝트 텍크 스택
    projectrank: { type: String }
  },
  data: () => ({
    popol: false,
    // projecttitle : "프로젝트이름",
    projectThumbnailurl: "https://source.unsplash.com/random/1600x900",
    developer: "개발자이름",
    projectThumbnail: "../assets/logo.png",
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
    addNewComment() {
      const newcommnet = {
        nick: "유저닉네임",
        content: this.comment
      };
      this.comments.push(newcommnet);
      console.log(item);
    },
    likeit(index) {},
    test(temp) {
      alert(temp);
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
