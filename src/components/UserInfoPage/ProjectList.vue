<!--GetProjectByUserId-->
<template>


  <div style="">
      <div>
      <!-- 필터링한 프로젝트들을 출력하는 곳입니다.-->
        <h3>Tech별 검색</h3>
      <ul v-for="(tech, index) in techs">
        <label><input v-model="array" type="radio" v-bind:value="tech" ondblclick="this.checked=false">{{tech}}</label>
      </ul>

      </div>

      <h3>프로젝트 리스트</h3>

      <v-layout row wrap justify-center>

        <v-flex  v-for="i in filter_projects.length" xs12 sm6 md4>
          <ProjectDetail v-on:popdetail="toStory"
            :projectimage="filter_projects[i-1].data.projectimage"
            :projecttitle="filter_projects[i-1].data.projecttitle"
            :projectdescription="filter_projects[i-1].data.projectdescription"
            :project_id="filter_projects[i-1].project_id"
            >
          </ProjectDetail>
          <v-divider></v-divider>
        </v-flex>
      </v-layout>

      <!-- 필터링한 프로젝트들을 출력하는 곳입니다. (끝)-->

      <!-- 여기서부터는 전체 프로젝트를 보여주는 곳입니다.-->




    <v-layout row wrap justify-center>

      <v-flex
        v-for="i in max_project" xs12 sm6 lg4 v-if="layout==1"
        style="padding:10px 5px;">

        <ProjectDetail v-on:popdetail="toStory"
          v-on:UPDATE_Project="toStoryUpdate"
          :projectimage="projects[i-1].data.projectimage"
          :projecttitle="projects[i-1].data.projecttitle"
          :projectdescription="projects[i-1].data.projectdescription"
          :project_id="projects[i-1].project_id"
          :project_writer="projects[i-1].data.session_id"
          >
        </ProjectDetail>
      </v-flex>


      <v-flex v-for="i in max_project" xs12 v-if="layout==2">
        <ProjectDetail0 v-on:popdetail="toStory"
          :projectimage="projects[i-1].data.projectimage"
          :projecttitle="projects[i-1].data.projecttitle"
          :projectdescription="projects[i-1].data.projectdescription"
          :project_id="projects[i-1].project_id"
          :project_writer="projects[i-1].data.session_id"
          :projectrank="projects[i-1].data.projectrank"
          :projectterm="projects[i-1].data.projectterm"
          :projecttech="projects[i-1].data.projecttech"
          :projectcontent="projects[i-1].data.projectcontent"
          >
        </ProjectDetail0>
        <v-divider></v-divider>
      </v-flex>

      <v-flex v-for="i in max_project" xs12 v-if="layout==3">
        <ProjectDetail1 v-on:popdetail="toStory"
          :projectimage="projects[i-1].data.projectimage"
          :projecttitle="projects[i-1].data.projecttitle"
          :projectdescription="projects[i-1].data.projectdescription"
          :project_id="projects[i-1].project_id"
          :project_writer="projects[i-1].data.session_id"
          :projectrank="projects[i-1].data.projectrank"
          :projectterm="projects[i-1].data.projectterm"
          :projecttech="projects[i-1].data.projecttech"
          :projectcontent="projects[i-1].data.projectcontent"
          >
        </ProjectDetail1>
        <v-divider></v-divider>
      </v-flex>
    </v-layout>

    <v-layout justify-center>
      <v-btn
        v-if="more"
        @click="moreproject(max_project)"
        outline flat
        >
        더보기
      </v-btn>
    </v-layout>

  </div>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";
import Project from "../Project/Project";
import ProjectDetail from "../Project/ProjectDetail";
import ProjectDetail0 from "../Project/ProjectDetail0";
import ProjectDetail1 from "../Project/ProjectDetail1";
import ProjectUpdator from "./ProjectUpdator";
export default {
  name: "ProjectList",
  data() {
    return {
      projects: [],
      max_project : 3,
      more : true,
      techs : ["전체보기", "c", "c#", "javascript", "android", "jquery"],
      array:'',
      filter_projects:[],
      seeall : true,
    };
  },
  components: {
    Project,
    ProjectDetail,
    ProjectDetail0,
    ProjectDetail1,
    ProjectUpdator,
  },
  created() {
    this.SELECT_Projects();
    this.user = this.$route.params.id;
    this.login = this.$session.get('session_id')
    if ( this.user == this.login ) {
      this.isMine = true;
    } else {
      this.isMine = false;
    }
  },
  props: {
    layout : {type:String}
  },
  methods: {
    async SELECT_Projects() {
      this.id = this.$route.params.id;
      this.projects = await FirebaseService.SELECT_Projects(this.id);
      // console.log(this.projects,'나옴?')
    },
    toStory(pcode) {
      // console.log("여기까지왔다.",pcode)
      this.$emit('toStory',pcode);
    },
    DELETE_project(index, project) {
      if (confirm("알림 : 삭제된 프로젝트는 복구가 불가능합니다. 삭제하시겠습니까?")) {
        console.log(project.project_id)
        this.projects.splice(index, 1);
        FirebaseService.DELETE_project(project.project_id)
      }
    },
    moreproject(max_project) {
      var interval = 2
      if (this.projects.length <= max_project + interval) {
        this.max_project = this.projects.length
        this.more = false
        alert('마지막 프로젝트가 나옵니다.')
      } else {
        this.max_project += interval
      }
    },

    async filterprojects() {
      // console.log(this.array)
      if (this.array == '전체보기') {
        this.seeall = true
      } else {
        this.seeall = false
        this.filter_projects = await FirebaseService.filter_projects(this.user, this.array)
      }
    },
    toStoryUpdate(pcode) {
      this.$emit('toStoryUpdate', pcode)
    }
  },
  watch: {
    array : function(){
      this.filter_projects = []
      this.filterprojects()
    }
  }
};
</script>
