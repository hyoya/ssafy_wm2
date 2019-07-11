<template>
  <v-app>
    <v-content style="margin-top:60px">
      <IntroCompanyBar />
      <v-layout xs12 rows wrap>
        <v-flex xs7>
          <ContentBody />
        </v-flex>
        <v-flex xs5>
          <ContentSide />
        </v-flex>
      </v-layout>
      <!-- <KakaoMap /> -->
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import KakaoMap from "../components/KakaoMap/KakaoMap";
import ContentBody from "../components/CompanyIntroPage/ContentBody";
import IntroCompanyBar from "../components/CompanyIntroPage/IntroCompanyBar";
import ContentSide from "../components/CompanyIntroPage/ContentSide";
export default {
  name: "CompanyIntro",
  components: {
    ContentBody,
    IntroCompanyBar,
    ContentSide,
    KakaoMap
  }
};
</script>

<style scoped>
</style>