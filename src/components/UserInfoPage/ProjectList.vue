<!--GetProjectByUserId-->
<template>
  <div>
    <v-layout>
      <h1 class="subheading grey--text text-md-center">PROJECT LIST</h1>
    </v-layout>

    <v-layout row wrap justify-center>
      <v-flex v-for="i in projects.length" xs12 sm6 md4>
        <ProjectDetail
          :projectimage="projects[i-1].data.projectimage"
          :projecttitle="projects[i-1].data.projecttitle"
          :projectdescription="projects[i-1].data.projectdescription"
          :project_id="projects[i-1].project_id"
          >
        </ProjectDetail>
        <v-divider></v-divider>
      </v-flex>
    </v-layout>

  </div>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";
import Project from "../Project/Project";
import ProjectDetail from "../Project/ProjectDetail";
export default {
  name: "ProjectList",
  data() {
    return {
      projects: []
    };
  },
  components: {
    Project,
    ProjectDetail
  },
  created() {
    this.SELECT_Projects();
  },
  methods: {
    async SELECT_Projects() {
      this.id = this.$route.params.id;
      this.projects = await FirebaseService.SELECT_Projects(this.id);
    },
    popdetail(pcode){
      window.open("../project/"+pcode,"testpage");
    }
  }
};
</script>
