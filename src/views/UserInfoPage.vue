<template>
  <div>
    <UserStateBar></UserStateBar>
    <div class="userInfoMainContent">
      <SideUserInfo></SideUserInfo>
      <!-- <v-layout my-5 class="userInfoPortfolioLayout">
        <v-flex xs12>
          <h2 class="headline my-5 text-xs-center">Portfolio</h2>
          <PortfolioList></PortfolioList>
        </v-flex>
      </v-layout>-->

      <v-layout class="userInfoPortfolioLayout">
        <v-flex xs12>
          <!-- <PortfolioList :limits="6" :load-more="true"></PortfolioList> -->
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import UserStateBar from "../components/UserInfoPage/UserStateBar";
import SideUserInfo from "../components/UserInfoPage/SideUserInfo";
export default {
  name: "UserInfoPage",
  components: {
    UserStateBar,
    SideUserInfo
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
