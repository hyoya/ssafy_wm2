<!--GetProjectByUserId-->
<template>
  <div>
    <v-layout row wrap justify-center>
      <v-flex v-for="i in max_project" xs12 sm6 md4>
        <ProjectDetail v-on:popdetail="toStory"
          :projectimage="projects[i-1].data.projectimage"
          :projecttitle="projects[i-1].data.projecttitle"
          :projectdescription="projects[i-1].data.projectdescription"
          :project_id="projects[i-1].project_id"
          >
        </ProjectDetail>
        <v-btn v-if="isMine" @click="goup(projects[i-1].project_id)">수정하기</v-btn>
        <v-btn v-if="isMine" @click="DELETE_project(i-1, projects[i-1])">삭제하기</v-btn>
        <v-divider></v-divider>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-btn v-if="more" @click="moreproject(max_project)">더보기</v-btn>
    </v-layout>

  </div>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";
import Project from "../Project/Project";
import ProjectDetail from "../Project/ProjectDetail";
import ProjectUpdator from "./ProjectUpdator";
export default {
  name: "ProjectList",
  data() {
    return {
      projects: [],
      max_project : 2,
      more : true,
    };
  },
  components: {
    Project,
    ProjectDetail,
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
  methods: {
    async SELECT_Projects() {
      this.id = this.$route.params.id;
      this.projects = await FirebaseService.SELECT_Projects(this.id);
    },
    toStory(pcode) {
      // console.log("여기까지왔다.",pcode)
      this.$emit('toStory',pcode);
    },
    goup(pcode2) {
      // console.log(pcode2, '이거 나옴??')
      this.$emit('goup',pcode2);
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
    }
  }
};
</script>
