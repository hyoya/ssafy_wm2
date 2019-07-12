<!--GetProjectByUserId-->
<template>
  <div class="Portfolio">
    <v-card-text>
      <h1 class="subheading grey--text text-md-center">PROJECT LIST</h1>
    </v-card-text>
    <v-layout row wrap>
      <v-flex v-for="i in projects.length">
        <ProjectDetail
          :projectimage="projects[i-1].projectimage"
          :projecttitle="projects[i-1].projecttitle"
          :projectdescription="projects[i-1].projectdescription"
          :projectterm="projects[i-1].projectterm"
          :projectcontent="projects[i-1].projectcontent"
          :projecttech="projects[i-1].projecttech"
          :projectrank="projects[i-1].projectrank">
      </ProjectDetail>
      <v-divider></v-divider>
    </v-flex>
  </v-layout>
</div>
</v-container>

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
    this.getProjects();
  },
  methods: {
    async getProjects() {
      this.projects = await FirebaseService.getProjects();
    }
  }
};
</script>
