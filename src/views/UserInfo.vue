<template>
  <div>
    <UserStateBar></UserStateBar>
    <SideUserInfo></SideUserInfo>
  </div>
</template>

<script>
import UserStateBar from "../components/UserInfoPage/UserStateBar";
import SideUserInfo from "../components/UserInfoPage/SideUserInfo";
export default {
  name: "UserInfo",
  components: {
    UserStateBar,
    SideUserInfo
  }
};
</script>

<style>
</style>
