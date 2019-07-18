<!--GetProjectByUserId-->
<template>
  <div>
    <v-layout row wrap justify-center>
      <v-flex v-for="i in projects.length" xs12 sm6 md4>
        <ProjectDetail v-on:popdetail="toStory"
          :projectimage="projects[i-1].data.projectimage"
          :projecttitle="projects[i-1].data.projecttitle"
          :projectdescription="projects[i-1].data.projectdescription"
          :project_id="projects[i-1].project_id"
          >
        </ProjectDetail>
        <v-btn v-if="isMine" @click="goup(projects[i-1].project_id)">수정하기</v-btn>
        <v-divider></v-divider>
      </v-flex>
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
  }
};
</script>
