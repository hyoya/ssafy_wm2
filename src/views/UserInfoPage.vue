<template>
  <v-app>
    <v-content style="margin-top:100px">
      <UserStateBar />
      <v-layout xs12 rows wrap>
        <v-flex xs3>
          <SideUserInfo />
        </v-flex>
        <v-flex xs9>
          <PortfolioList />
        </v-flex>
      </v-layout>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import UserStateBar from "../components/UserInfoPage/UserStateBar";
import SideUserInfo from "../components/UserInfoPage/SideUserInfo";
import PortfolioList from "../components/UserInfoPage/PortfolioList";
export default {
  name: "UserInfoPage",
  components: {
    UserStateBar,
    SideUserInfo,
    PortfolioList
  }
};
</script>

<style scoped>
</style>
