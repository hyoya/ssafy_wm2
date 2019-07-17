<template>
  <div class="topbar__container">
    <div class="topbar__container__content">
      <div class="content__stars">
        <div class="stars__title">stars &nbsp</div>
        <div class="stars__amount">{{starNumber}} &nbsp</div>
      </div>
      <div class="content__followers">
        <div class="stars__title">followers &nbsp</div>
        <div class="stars__amount">{{followerNumber}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";

export default {
  data() {
    return {
      userdata: "",
      followerNumber: "",
      starNumber: "9"
    };
  },
  methods: {
    async SELECT_Userdata() {
      this.userdata = await FirebaseService.SELECT_Userdata(
        this.$session.get("session_id")
      );
      this.followerNumber = this.userdata[0].followerlist.length;
    }
  },
  created() {
    this.SELECT_Userdata();
  }
};
</script>

<style scoped>
.topbar__container {
  display: flex;
  align-items: center;
  height: 45px;
  background-color: #333333;
  color: white;
}
.topbar__container__content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.content__stars {
  display: flex;
}
.content__followers {
  display: flex;
}
</style>
