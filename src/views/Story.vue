<template>
  <v-app>
    <v-content style="margin-top:100px">
      <TopSide />
      <v-layout xs12 rows wrap>
        <v-flex xs3>
          <LeftSide />
        </v-flex>
        <v-flex xs9>
          <ProjectList />
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";

import TopSide from "../components/UserInfoPage/TopSide";
import LeftSide from "../components/UserInfoPage/LeftSide";
import ProjectList from "../components/UserInfoPage/ProjectList";
import ProjectEditor from "../components/UserInfoPage/ProjectEditor";

var url = document.location.href;
var userinfo_email = url.split("/")[4];
FirebaseService.filter_userinfo(userinfo_email);

export default {
  name: "Story",
  components: {
    TopSide,
    LeftSide,
    ProjectList,
    ProjectEditor
  }
};
</script>

<style scoped>
</style>
