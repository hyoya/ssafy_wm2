<template>
  <div>
    <!-- 서비스 안내 -->
    <!-- TODO 배너 이미지 정하기 -->
    <MainBanner imgSrc="https://source.unsplash.com/random/1600x900">
      <div style="line-height:1.2em;" slot="text"> Show your Potential   </div>
    </MainBanner>

    <!-- 필터링 -->
    <PFilter/>

    <!-- 포트폴리오 나열 -->
    <PortfolioList/>

    <v-btn flat href="/projectwrite">projectwrite</v-btn>

  </div>
</template>


<script>
import MainBanner from "../components/MainPage/MainBanner";
import PFilter from "../components/MainPage/PFilter";
import ImgUpload from "../components/ImgUpload"

export default {
  name: "MainPage",
  components: {
    MainBanner,
    PFilter,
    ImgUpload,
  }
};
</script>
