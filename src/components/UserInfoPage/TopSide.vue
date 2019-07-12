<!--userState -->
<template>
  <v-flex style="background:white;">
    <v-card-text>
      <p
        class="subheading grey--text text-md-center"
      >followers {{user.followers}} stars {{user.stars}}</p>
    </v-card-text>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      user: {
        followers: 10,
        stars: 20
      }
    };
  }
};
</script>

<style scoped>
</style>
