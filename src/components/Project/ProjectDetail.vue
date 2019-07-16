<template>
  <v-flex class="text-xs-center">
      <v-dialog v-model="popol" max-width="60vw" hide-overlay >
        <!-- Thumbnail -->
        <template v-slot:activator="{ on }">
          <button flat class="white--text" v-on="on" style="height:80%;width:80%;">
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
        </template>


        <!-- Modal -->
        <v-card >
          <v-toolbar>
            <!-- profile img -->
            <v-btn icon to="/"/>
            <v-toolbar-title class="font-weight-medium">

               <span class="font-weight-bold">{{projecttitle}} </span>
               <span class="font-weight-thin font-italic subheading">{{developer}}</span>
               <v-flex class="caption">
                 {{ projectdescription }}
               </v-flex>
             </v-toolbar-title>
            <v-spacer/>
            <v-btn flat icon color="pink">
              <i class="fa fa-heart fa-2x"></i>
            </v-btn>
            <v-btn flat icon color="yellow">
              <i class="fa fa-star fa-2x"></i>
            </v-btn>
          </v-toolbar>

          <!-- card -->
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <!-- Project Main Thumbnail -->
                <v-flex xs12>
                  <BigImg v-bind:imgSrc="projectimage" />
                </v-flex>
                <!--  left detail -->
                <v-flex xs12 md9>
                  <v-layout column>
                    <!-- project description -->
                    <v-layout row style="padding: 2vw 0vw; border-bottom: 1px solid #cecece;">


                    <!--comment -->
                      <v-flex>
                        <span class="title">{{projecttitle}}</span>
                        <v-flex class="d-inline caption tag" round outline>{{ projectterm }}</v-flex>
                        <v-flex class="d-inline caption tag" round outline>{{ projectrank }}</v-flex>
                        <br />
                        <v-layout class="d-block" style="padding: 1vw 0vw;">
                          <v-flex
                            v-for="tech in projecttech"
                            class="tech d-inline-block caption"
                          >{{ tech }}</v-flex>
                        </v-layout>

                        <p v-html="projectcontent" />
                      </v-flex>
                    </v-layout>

                  <!--comment -->
                    <v-flex>
                      <!-- comment input -->
                      <form>
                        <!-- <v-text-field label="Comment" required @input="$v.name.$touch()" @blur="$v.name.$touch()" v-model="comment"></v-text-field> -->
                        <v-text-field label="Comment" v-model="comment"></v-text-field>

                        <v-btn @click="INSERT_Comment(comment)">submit</v-btn>
                        <v-btn @click="InfoProject()">project정보</v-btn>
                      </form>

                      <!-- comment sort -->
                      <v-flex>
                        <span>sort</span>
                        <v-btn flat depressed small>oldest</v-btn>
                        <v-btn flat depressed small>newest</v-btn>
                        <v-btn flat depressed small>liked</v-btn>
                      </v-flex>

                      <!-- comment list -->
                      <v-list>
                        <v-list-tile v-for="(com, index) in real_comments">
                          <v-list-tile-content>
                            <v-list-tile-title v-html="com.Comment"></v-list-tile-title>
                            <v-list-tile-title v-html="com.User"></v-list-tile-title>
                          </v-list-tile-content>

                          <v-list-tile-action>
                            <i class="fa fa-heart" @click="likeit(index)"></i>
                          </v-list-tile-action>
                        </v-list-tile>
                      </v-list>

                      <!-- end xs9 -->
                    </v-flex>
                  </v-layout>
                </v-flex>

              <!-- right detail -->
              <v-flex xs12 md3 justify-center>
                <v-flex>Etc Project</v-flex>
                <img
                  v-for="e in etcproject"
                  xs4
                  md1
                  :src="e.url"
                  style="width:70px; height:70px; padding:3px;"
                />
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="popol = false">Close</v-btn>
        </v-card-actions>

      </v-card>
    </v-dialog>
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
    projectterm: { type: String }, // 프로젝트 기간
    projectcontent: { type: String }, //프로젝트 설명(상세-위지윅으로 작성한 내용)
    projecttech: { type: Array }, //프로젝트 텍크 스택
    projectrank: { type: String },
    projectrank: { type: String },
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
    real_comments:[],
    comment: "",
    etcproject: [
      { url: "https://source.unsplash.com/random/100x100" },
      { url: "https://source.unsplash.com/random/100x100" },
      { url: "https://source.unsplash.com/random/100x100" }
    ],
    projectData : ''
  }),
  methods: {
    // 아직 있어야하는지 모르겟음.
    // async SELECT_Project(project_id) {
    //   this.userdata = await FirebaseService.SELECT_Project(project_id);
    // },

    async INSERT_Comment(comment) {
      var user = this.$session.get('session_id')

      if (user) {
        this.projectData = await FirebaseService.SELECT_Project(this.project_id);
        var Json = new Object();
        Json.Comment = this.comment;
        Json.User = user;
        FirebaseService.INSERT_Comment(Json, this.projectData, this.project_id);

        // this.SELECT_Project(this.project_id); 아직 있어야하는지 모르겠음

        const newcommnet = {
        User : user,
        Comment : this.comment
        };
        this.real_comments.push(newcommnet)

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
    async get_comments() {
      this.real_comments = await FirebaseService.SELECT_Comments(this.project_id)


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
