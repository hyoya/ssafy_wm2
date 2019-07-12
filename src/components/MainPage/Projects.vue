<!--GetProjectByUserId-->
<template>
  <v-container>
    <button style="color:red;" @click="projectall()">조회하기</button>
    <v-layout row wrap mw-700>
      <!-- {{amount_projects}} -->
      {{projects.length}}<br>
        <!-- <v-flex v-if="projects.length > 3" v-for="i in 3" > -->
        <v-flex v-if="projects.length > 3" v-for='i in amount_projects' >
          <div>
            <!-- {{projects[i-1][1].date}}<br> -->
            <img :src="projects[i-1][1].projectimage" width=300px height=300px>
          </div>


          <v-divider></v-divider>
        </v-flex>
      </v-if>
    </v-layout>
  <v-btn @click="more_projects">더 보기</v-btn>
</v-container>

</template>

<script>
import FirebaseService from "@/services/FirebaseService";

export default {
  name: "Projects",
  data() {
    return {
      projects: [],
      amount_projects : 3
    };
  },
  created() {
    this.getmainProjects()
  },
  methods: {
    async getmainProjects() {
      this.projects = await FirebaseService.getmainProjects()
      // this.amount_projects = this.projects.length
      // console.log(this.amount_projects, '떳냐?')
    },
    more_projects() {
      console.log(3)
    }
  }
};
</script>
