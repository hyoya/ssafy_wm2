<template>
  <div>
    <UserStateBar></UserStateBar>

    <h1>이 글이 나왔다면, id를 URL에 넣었다는 의미입니다. = 된 것이다.</h1>

    <div class="mine"><h2>이 글이 보인다면 내가 주인</h2></div>
    <div class="notmine"><h2>이 글이 보인다면 나는 익명 또는 손님</h2></div><br>
    <!-- <v-btn class="mine" flat href="/projectwrite/">projectwrite</v-btn><br> -->

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
import FirebaseService from "@/services/FirebaseService";

import UserStateBar from "../components/UserInfoPage/UserStateBar";
import SideUserInfo from "../components/UserInfoPage/SideUserInfo";
import GetUserProject from "../components/UserInfoPage/GetUserProject";

var url = document.location.href
var userinfo_email = url.split('/')[4]
FirebaseService.filter_userinfo(userinfo_email)

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
