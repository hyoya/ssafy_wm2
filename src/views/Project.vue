<template>
  <div>
    <v-layout>
      <!-- profile img -->
      <v-btn icon to="/"/>
      <v-toolbar-title class="font-weight-medium">

         <span class="font-weight-bold">{{project.projecttitle}} </span>

         <span class="font-weight-thin font-italic subheading">{{project.developer}}</span>
         <v-flex class="caption">
           {{ project.projectdescription }}
         </v-flex>
       </v-toolbar-title>
      <v-spacer/>
      <v-btn flat icon color="pink">
        <i class="fa fa-heart fa-2x"></i>
      </v-btn>
      <v-btn flat icon color="yellow">
        <i class="fa fa-star fa-2x"></i>
      </v-btn>
    </v-layout>

    <!-- card -->
    <v-layout>
      <v-container grid-list-md>
        <v-layout wrap>
          <!-- Project Main Thumbnail -->
          <v-flex xs12>
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
                  <v-list-tile v-for="(com, index) in project.comments">

                    <v-list-tile-content>
                      <v-list-tile-title v-html="com.content"></v-list-tile-title>
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
  }
  },
  components: {
    BigImg,
  },
  created(){
    this.project_id = this.$route.params.pcode;
    this.bindData();
  },
  methods: {
    async bindData(){
      this.project = await FirebaseService.SELECT_ProjectsByPcode(this.$route.params.pcode);

      console.log(this.project);
    },
    INSERT_Comment(comment){
      console.log(comment);
    },
    InfoProject(){
      console.log("this is test tag");
    },
    likeit(index){
      console.log("this is test tag");
    }
  },
};
</script>
