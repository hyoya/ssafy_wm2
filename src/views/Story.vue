<template>
  <div>
    <TopSide />
    <div class="userInfoMainContent">
      <v-layout>
        <v-flex xs3>
          <p> 이 유저의 데이터를 가지고 <br>오시면 됩니다 아시겠죠? ->  {{ changingTEXT }} </p>
          <LeftSide />
        </v-flex>
        <v-flex xs9>
          <div class="userInfoPortfolioLayout">
            <v-btn @click="changeComponent()" v-if="isMine">프로젝트 생성하기</v-btn>
            <ProjectList v-if="!stateAdd"></ProjectList>
            <ProjectEditor v-else> </ProjectEditor>
          </div>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";

import TopSide from "../components/UserInfoPage/TopSide";
import LeftSide from "../components/UserInfoPage/LeftSide";
import ProjectList from "../components/UserInfoPage/ProjectList";
import ProjectEditor from "../components/UserInfoPage/ProjectEditor"

export default {
  name: "Story",
  data() {
    return {
      isMine : false,
      stateAdd : false,
      userurl : '',
      changingTEXT : '',
    }
  },
  created() {
    // 컴포넌트 생성시 데이터를 패치한다
    this.fetchData()
    this.isMineCheck();
  },
  methods: {
    isMineCheck() {
      if ( this.$route.params.id == this.$session.get('session_id') ) {
        this.isMine = true;
      } else {
        this.isMine = false;
      }
    },
    fetchData() {
      this.changingTEXT = this.$route.params.id;
    },
    changeComponent(){
      this.stateAdd = (this.stateAdd)?false:true;
    },
  },
  components: {
    TopSide,
    LeftSide,
    ProjectList,
    ProjectEditor,
  },
  watch: {
    // 라우터 객체를 감시하고 있다가 fetchData() 함수를 호출한다
    '$route': 'fetchData'
  },
};

</script>

<style scoped>
.userInfoMainContent {
  display: flex;
  justify-content: center;
}
.userInfoPortfolioLayout {
  border: 1px solid #2c2c2c;
  background-color: white;
  margin: 25px;
}
</style>
