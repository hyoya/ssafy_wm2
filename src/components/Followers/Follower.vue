<template>
  <div class="follower__container">
    <div class="container__content box">
      <div class="content__followerImg box"></div>
      <div class="content__followerInfo box">{{follower}}</div>
      <div class="content__followerPortfolioList box">
        <MPortfolio />
      </div>
    </div>
  </div>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";
import MPortfolio from "../Followers/MPortfolio";
export default {
  props: ["follower"],
  data() {
    return {
      user: "",
      pid: "",
      projectList: [],
      project: {
        userId: "",
        projectId: ""
      }
    };
  },
  components: {
    MPortfolio
  },
  created() {
    this.SELECT_Projects();
  },
  methods: {
    async SELECT_Projects() {
      this.user = await FirebaseService.SELECT_Projects(this.follower);
      console.log(this.user);
      for (let i = 0; i < this.user.length; i++) {
        // console.log(this.user[i]);
        this.project.userId = this.follower;
        this.project.projectId = this.user[i].project_id;
        this.projectList.push(this.project);
        // console.log(this.projectList);
      }
      // console.log(this.projectList);
    }
  }
};
</script>

<style scoped>
.box {
  height: 165px;
}
.container__content {
  display: flex;
}
.follower__container {
  width: 100%;
  height: 165px;
  background-color: yellow;
}

.content__followerImg {
  width: 140px;
  background-color: red;
}

.content__followerInfo {
  width: 300px;
  background-color: green;
}
.content__followerPortfolioList {
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  grid-template-columns: repeat(4, 1fr);
  width: 940px;
  grid-gap: 1rem;
  background-color: coral;
}
</style>
