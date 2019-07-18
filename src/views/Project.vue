<template>
  <div>
    <v-toolbar>
      <!-- profile img -->
      <v-btn icon to="/"/>
      <v-toolbar-title class="font-weight-medium">
         <span class="font-weight-bold">{{project.projecttitle}}</span>
         <span class="font-weight-thin font-italic subheading">{{project.developer}}</span>
         <v-flex class="caption">
           {{ project.projectdescription }}
         </v-flex>
       </v-toolbar-title>
      <v-spacer/>

      <v-btn flat icon color="gray" @click="likeit()" v-if="!this.islikeit">
        <i class="fa fa-heart fa-2x"></i>
      </v-btn>
      <v-btn flat icon color="pink" @click="unlikeit()" v-if="this.islikeit">
        <i class="fa fa-heart fa-2x"></i>
      </v-btn>

      <v-btn flat icon color="yellow">
        <i class="fa fa-star fa-2x"></i>
      </v-btn>
    </v-toolbar>

    <!-- card -->
    <v-layout>
      <v-container grid-list-md>
        <v-layout wrap>
          <!-- Project Main Thumbnail -->
          <v-flex xs12 sm6>
            <BigImg v-bind:imgSrc="project.projectimage" />
          </v-flex>
          <!--  left detail -->
          <v-flex xs12 md9>
            <v-layout column>
              <!-- project description -->
              <v-layout row style="padding: 2vw 0vw; border-bottom: 1px solid #cecece;">


              <!--comment -->
                <v-flex>
                  <span class="title">{{project.projecttitle}}</span>
                  <v-flex class="d-inline caption tag" round outline>{{ project.projectterm }}</v-flex>
                  <v-flex class="d-inline caption tag" round outline>{{ project.projectrank }}</v-flex>
                  <br />
                  <v-layout class="d-block" style="padding: 1vw 0vw;">
                    <v-flex
                      v-for="tech in project.projecttech"
                      class="tech d-inline-block caption"
                    >{{ tech }}</v-flex>
                  </v-layout>

                  <p v-html="project.projectcontent" />
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
                  <v-list-tile v-for="(com, index) in comments">

                    <v-list-tile-content>
                      <v-list-tile-title v-html="com.Comment"></v-list-tile-title>
                      <v-list-tile-title v-html="com.User"></v-list-tile-title>

                    </v-list-tile-content>

                    <v-list-tile-action>
                      <i class="fa fa-heart"></i>
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
            v-for="e in project.etcproject"
            xs4
            md1
            :src="e.url"
            style="width:70px; height:70px; padding:3px;"
          />
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>

  </div>
</template>


<script>
import FirebaseService from "@/services/FirebaseService";
import BigImg from "../components/Common/BigImg";

export default {
  name: "Project",
  data() {
    return {
      project_id:"",
      project: "",
      user:"",
      comments:[],
      comment:"",
      islikeit:false,
    }
  },
  components: {
    BigImg,
  },
  created(){
    this.user = this.$session.get('session_id')
    this.project_id = this.$route.params.pcode;
    this.bindData();
    this.get_comments();
  },
  methods: {
    showNotification (group, type ,title, text) {
       this.$notify({
         group,
         title,
         text,
         type,
       })
     },
    async bindData(){
      this.$loading(true)
      this.project = await FirebaseService.SELECT_ProjectsByPcode(this.$route.params.pcode);
      this.$loading(false)
    },
    InfoProject(){
      console.log("this is test tag");
    },
    async isLikeItCheck(){
      var targetProject = await FirebaseService.SELECT_Project(this.project_id);
      var tmp = targetProject.likeit.includes(this.$session.get('session_id'));
      this.islikeit=tmp;
      console.log("like it! :: ", this.islikeit);
    },
    async likeit(){
      var targetProject = await FirebaseService.SELECT_Project(this.project_id);
      var userlikeitlist = await FirebaseService.SELECT_Userdata(this.$session.get('session_id'));

      await FirebaseService.likeit(
        this.project_id,
        this.$session.get('session_id'),
        targetProject.likeit,
        userlikeitlist[0].likeitProject
      );
      this.isLikeItCheck();
    },
    async unlikeit(){
      var targetProject = await FirebaseService.SELECT_Project(this.project_id);
      var userlikeitlist = await FirebaseService.SELECT_Userdata(this.$session.get('session_id'));

      await FirebaseService.unlikeit(
        this.project_id,
        this.$session.get('session_id'),
        targetProject.likeit,
        userlikeitlist[0].likeitProject
      );
      this.isLikeItCheck();
    },
  },
  created(){
    this.project_id = this.$route.params.pcode;
    this.bindData();
    this.$store.state.no_header = true;
    this.isLikeItCheck();
    //this.project = FirebaseService.SELECT_ProjectsByPcode(this.$route.params.pcode);
    //console.log("gg", this.project);

    },
    // seulgi function
    async INSERT_Comment(comment){
      if (this.user) {
        this.projectData = await FirebaseService.SELECT_Project(this.project_id);
        var Json = new Object();
        Json.Comment = this.comment;
        Json.User = this.user;
        FirebaseService.INSERT_Comment(Json, this.projectData, this.project_id);
        const newcommnet = {
        User : this.user,
        Comment : this.comment
        };
        this.comments.push(newcommnet)
      } else {
        // 로그인 안했으면 안했다고 알려줘야지 헤헤
          this.showNotification('foo-css','error','댓글 작성 오류','로그인이 필요한 기능입니다.')
      }
    },
    async get_comments() {
      this.comments = await FirebaseService.SELECT_Comments(this.project_id)
    },
    // -----------------
  props: {
  },
};
</script>
