<template>
  <div class="followerList__container">
    <div class="followrList__container__content">
      <div v-for="man in followers" class="content__follower">
        <Follower v-bind:follower="man" />
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
  // props: ["followers"],
  created() {
    this.SELECT_Userdata();
  },
  methods: {
    async SELECT_Userdata() {
      this.user = await FirebaseService.SELECT_Userdata(
        this.$session.get("session_id")
      );
      this.followers = this.user[0].followerlist;
      console.log(this.followers);
    }
  }
};
</script>

<style scoped>
.content__follower {
  border: 1px solid black;
}
</style>
