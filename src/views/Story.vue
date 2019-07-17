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
        <LeftSide xs12 sm4 md3 :isMine="isMine" v-cloak/>
      </v-flex>
      <v-flex xs12 sm8 md9 >
          <v-btn @click="changeComponent()" v-if="isMine">프로젝트 생성하기</v-btn>
          <toggle-button :width="100" v-model="toggleView" :sync="true"
               :labels="{checked: '새창으로 보기', unchecked: '현재 페이지'}"/>
          <ProjectList v-if="!stateAdd && !statedetail" v-on:toStory="cc" />
          <ProjectEditor v-if="stateAdd && !statedetail" />
          <Project v-if="statedetail" :pcode="pcode" v-on:goBackpage="gbp"/>

      </v-flex>
    </v-layout>

  </div>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";

import TopSide from "../components/UserInfoPage/TopSide";
import LeftSide from "../components/UserInfoPage/LeftSide";
import ProjectList from "../components/UserInfoPage/ProjectList";
import ProjectEditor from "../components/UserInfoPage/ProjectEditor";
import Project from "../components/Project/Project";

export default {
  name: "Story",
  data() {
    return {
      isMine : false,
      stateAdd : false,
      userurl : '',
      toggleView : false,
      pcode : '',
      statedetail : false,
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
    async fetchData() {
      var session = this.$session.get('session_id');
      if( session !== "" ) {
        this.toggleView = await FirebaseService.SELECT_userAddon(session);
      }
    },
    updateToggle() {
      if ( this.$session.get('session_id') !== "" ) {
        FirebaseService.UPDATE_userAddon(this.$session.get('session_id'),this.toggleView);
      }
      this.$store.commit('convertPVT',this.toggleView);
    },
    changeComponent(){
      this.stateAdd = (this.stateAdd)?false:true;
    },
    cc(pcode) {
      this.pcode = pcode;
      this.statedetail = true;
    },
    gbp() {
      this.statedetail = false;
    }
  },
  components: {
    TopSide,
    LeftSide,
    ProjectList,
    ProjectEditor,
    Project,
  },
  watch: {
    // 라우터 객체를 감시하고 있다가 fetchData() 함수를 호출한다
    //'$route': 'fetchData'
   'toggleView' : 'updateToggle'
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
