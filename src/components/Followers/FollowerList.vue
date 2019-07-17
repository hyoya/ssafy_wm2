<template>
  <div class="followerList__container">
    <div class="followrList__container__content">
      <div v-for="human in followers" class="content__follower">
        <Follower v-bind:follower="human" />
      </div>
    </div>
  </div>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";
import Follower from "../Followers/Follower";
export default {
  data() {
    return {
      userData: "",
      followers: []
    };
  },
  components: {
    Follower
  },
  created() {
    this.SELECT_Userdata();
  },
  methods: {
    async SELECT_Userdata() {
      this.user = await FirebaseService.SELECT_Userdata(
        this.$session.get("session_id")
      );
      this.followers = this.user[0].followerlist;
    }
  }
};
</script>

<style scoped>
</style>
