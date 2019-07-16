<template>
  <div class="follower__container">
    <div class="container__content box">
      <div class="content__followerImg box"></div>
      <div class="content__followerInfo box"></div>
      <div class="content__followerPortfolioList box">
        <MPortfolio />
      </div>
    </div>
  </div>
</template>

<script>
import MPortfolio from "../Followers/MPortfolio";
export default {
  components: {
    MPortfolio
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
