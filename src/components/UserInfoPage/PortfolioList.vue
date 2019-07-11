<template>
  <div class="Portfolio">
    <h1 class="subheading grey--text">PortfolioList</h1>

    <v-layout row wrap>
      <v-flex md4 v-for="portfolio in protfolioList" :key="portfolio.name">
        <v-card flat class="text-xs-center ma-3">
          <v-responsive class="pt-4">image</v-responsive>
          <v-card-text>
            <div class="subheading">{{portfolio.name}}</div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      protfolioList: [
        { name: "webProject" },
        { name: "ssafyProject" },
        { name: "serverProject" },
        { name: "bigDataProject" },
        { name: "Project" },
        { name: "AIProject" }
      ]
    };
  }
};
</script>

<style>
</style>
