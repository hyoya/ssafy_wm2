<template>
  <div>
    <!-- TODO 여백 -->
    <v-layout><v-flex style="margin:50px;" /></v-layout>

    <v-layout row wrap>
      <v-flex xs12>
        <TopSide/>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12 sm4 md3>
        <LeftSide xs12 sm4 md3/>
      </v-flex>
      <v-flex xs12 sm8 md9 >
          <v-btn @click="changeComponent()" v-if="isMine">프로젝트 생성하기</v-btn>
          <ProjectList v-if="!stateAdd"></ProjectList>
          <ProjectEditor v-else> </ProjectEditor>
      </v-flex>
    </v-layout>

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
      // 라우터가 바뀔떄마다 데이터가져오는기능은 이것처럼 쓰면 됩니다.
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
.userInfoPortfolioLayout {
  border: 1px solid #2c2c2c;
  background-color: white;
  margin: 25px;
}
</style>
