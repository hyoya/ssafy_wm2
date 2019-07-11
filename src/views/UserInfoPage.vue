<template>
  <div>
    <UserStateBar></UserStateBar>
    <div class="userInfoMainContent">
      <SideUserInfo></SideUserInfo>

      <v-layout class="userInfoPortfolioLayout">
        <v-flex xs12>
          <!-- <PortfolioList :limits="6" :load-more="true"></PortfolioList> -->
          <GetUserProject/>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import UserStateBar from "../components/UserInfoPage/UserStateBar";
import SideUserInfo from "../components/UserInfoPage/SideUserInfo";
import GetUserProject from "../components/UserInfoPage/GetUserProject";
export default {
  name: "UserInfoPage",
  components: {
    UserStateBar,
    SideUserInfo,
    GetUserProject
  }
};
</script>

<style scoped>
.userInfoMainContent {
  display: flex;
  justify-content: center;
}
.userInfoPortfolioLayout {
  border: 1px solid #2c2c2c;
  background-color: white;
  margin: 25px;
}
</style>
