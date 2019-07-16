<template>
  <div class="followerList__container">
    <div class="followerList__container__content">
      <!--
          for() {
              follower
          }
      -->
      <div v-for="follower in followers" class="content__follower">
        <Follower />
      </div>
    </div>
  </div>
</template>

<script>
import Follower from "../Followers/Follower";
export default {
  data() {
    return {
      followers: [1, 2, 3, 4]
    };
  },
  components: {
    Follower
  }
};
</script>

<style scoped>
.content__follower {
  border: 1px solid black;
}
</style>
