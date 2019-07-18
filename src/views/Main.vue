<template>
  <div>
    <!-- 서비스 안내 -->
    <!-- TODO 배너 이미지 정하기 -->
    <BigImg imgSrc="https://source.unsplash.com/random/1600x900">
      <div style="line-height:1.2em;" slot="text">Show your Potential!</div>
    </BigImg>

    <!-- 필터링 -->
    <Filters />
    <!-- 여기에다가 프로젝트들은 그냥 띄우면 되지 않ㅇ르까..?? -->
    <!-- <Projects /> -->

    <v-btn @click="GetSession()">세션 가져오기</v-btn>

    <!-- <GitRepList /> -->

  </div>
</template>


<script>
import FirebaseService from "@/services/FirebaseService";

import BigImg from "../components/Common/BigImg";
import Filters from "../components/MainPage/Filters";
import GitRepList from "../components/GitRep/GitRepList";
import Vue from 'vue'
// import Projects from "../components/MainPage/Projects";

export default {
  name: "Main",
  components: {
    BigImg,
    Filters,
    GitRepList,
    // Projects,
  },
  methods: {
    GetSession() {
      console.log(this.$session.get('session_id'), ' : 현재 아이디')
    },
  }
};
</script>
