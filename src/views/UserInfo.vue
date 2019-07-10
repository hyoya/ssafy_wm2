<template>
  <div>
    <UserStateBar></UserStateBar>
    <v-layout>
      <v-flex xs4>
        <SideUserInfo>
        </SideUserInfo>
      </v-flex>
      <v-flex xs8>
        <div v-if="Bwrite">
          <PostProject/>
        </div>
      </v-flex>
    </v-layout>
  </v-else>
</div>
</template>

<script>
import UserStateBar from "../components/UserInfoPage/UserStateBar";
import SideUserInfo from "../components/UserInfoPage/SideUserInfo";
import PostProject from "../components/PostProject";

export default {
  name: "UserInfo",
  data() {
    return {
      Bwrite:true,
    }
  },
  components: {
    UserStateBar,
    SideUserInfo,
    PostProject,
  }
};
</script>

<style>
</style>
