<template>
  <div>
    <!-- 서비스 안내 -->
    <!-- TODO 배너 이미지 정하기 -->
    <BigImg imgSrc="https://source.unsplash.com/random/1600x900">
      <div style="line-height:1.2em;" slot="text">Show your Potential ?</div>
    </BigImg>

    <!-- 필터링 -->
    <Filters />
    <!-- <GitRepList /> -->
    <PE/>
  </div>
</template>


<script>
import BigImg from "../components/Common/BigImg";
import Filters from "../components/MainPage/Filters";
import GitRepList from "../components/GitRep/GitRepList";
import PE from "../components/UserInfoPage/ProjectEditor"

export default {
  name: "Main",
  components: {
    BigImg,
    Filters,
    GitRepList,
    PE
  }
};
</script>
