<template>
  <div>
    <!-- 서비스 안내 -->
    <!-- TODO 배너 이미지 정하기 -->
    <MainBanner imgSrc="https://source.unsplash.com/random/1600x900">
      <div style="line-height:1.2em;" slot="text">Show your Potential!!!</div>
    </MainBanner>

    <!-- 필터링 -->
    <PFilter />
    <v-container>
      <!-- 필터링 - XS SIZE -->
      <v-layout>
        <v-flex class="hidden-sm-and-up">
          <v-toolbar>
            <!-- TODO 태블릿 이사의 필터 (한줄) -->
          </v-toolbar>
        </v-flex>
      </v-layout>

      <!-- 필터링 - SM and UP SIZE -->
      <v-layout>
        <v-flex column class="hidden-xs-only">
          <!-- TODO 모바일 사이즈 필터(두줄) -->
        </v-flex>
      </v-layout>
    </v-container>

    <!-- 포트폴리오 나열 -->
    <PortfolioList />
  </div>
</template>


<script>
import MainBanner from "../components/MainPage/MainBanner";
import PFilter from "../components/MainPage/PFilter";

export default {
  name: "MainPage",
  components: {
    MainBanner,
    PFilter
  }
};
</script>
