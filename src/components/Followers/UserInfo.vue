<template>
  <div class="userInfo__container">
    <div class="userInfo__container__content">
      <div class="content__userImg"></div>
      <div class="content__userName">{{userName}}</div>
    </div>
  </div>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";
export default {
  data() {
    return {
      user: "",
      userName: ""
    };
  },
  created() {
    this.SELECT_Userdata();
  },
  methods: {
    async SELECT_Userdata() {
      this.user = await FirebaseService.SELECT_Userdata(
        this.$session.get("session_id")
      );
      this.userName = this.user[0].userName;
    }
  }
};
</script>

<style scoped>
.userInfo__container {
  height: 120px;
  background-color: aqua;
}
.userInfo__container__content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
