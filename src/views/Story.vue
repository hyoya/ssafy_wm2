<template>
  <div>
    <!-- TODO 여백 -->
    <v-layout><v-flex style="margin:25px;" /></v-layout>

    <div v-if="loading">
      <br>  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    </div>

    <v-layout row wrap>
      <v-flex xs12>
        <TopBar/>
      </v-flex>
    </v-layout>

    <v-layout row wrap>

      <v-flex xs12 sm4 md3>
        <LeftSide xs12 sm4 md3 :isMine="isMine" v-on:toStory="fromLeftSide"/>
      </v-flex>

      <v-flex xs12 sm8 md9 >
        <v-layout row wrap>
          <v-flex xs12 style="">
            <div
              @click="changeComponent()"
              v-if="isMine && !statedetail && !stateupdate"
              class="d-inline"
              style="display:inline;">
              <img id='toggletext' src="../assets/icon_set/add.png" alt="delimg" style="cursor:pointer;width:25px;height:25px;"/>
            </div>

            <v-flex
            class="d-inline"
            style="float:right;">
              <toggle-button
              v-if="!stateAdd && !stateupdate && !statedetail"
              :width="100"
              v-model="toggleView"
              :sync="true"
              :labels="{checked: '새창으로 보기', unchecked: '현재 페이지'}"/>
            </v-flex>

            <div style="display:inline; float:right; right:50%">
              <div class="d-inline" @click="layout1()">
                 <img id='toggletext' src="../assets/icon_set/layout1.png" alt="delimg" style="cursor:pointer;width:25px;height:25px; margin-right:5px;"/>
               </div>
              <div class="d-inline" @click="layout2()">
                 <img id='toggletext' src="../assets/icon_set/layout2.png" alt="delimg" style="cursor:pointer;width:25px;height:25px;margin-right:5px;"/>
               </div>
              <div class="d-inline" @click="layout3()">
                 <img id='toggletext' src="../assets/icon_set/layout3.png" alt="delimg" style="cursor:pointer;width:25px;height:25px;margin-right:5px;"/>
               </div>
            </div>

          </v-flex>
        </v-layout>

        <ProjectList
          v-if="!stateAdd && !statedetail && !stateupdate"
          v-on:toStory="cc" :layout="layout" v-on:goup="update_project"
          v-on:toStoryUpdate="UPDATE_Project"/>
        <ProjectEditor v-if="stateAdd && !statedetail && !stateupdate" />
        <Project v-if="statedetail" :pcode="pcode" v-on:goBackpage="gbp"/>
        <ProjectUpdator v-if="stateupdate" :project_id="pcode2" v-on:goBackpage="gbp2" />
        <!-- <v-btn @click="check_stateupdate(state)"></v-btn> -->
      </v-flex>
    </v-layout>

  </div>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";

import TopBar from "../components/Followers/TopBar";
import LeftSide from "../components/UserInfoPage/LeftSide";
import ProjectList from "../components/UserInfoPage/ProjectList";
import ProjectEditor from "../components/UserInfoPage/ProjectEditor";
import Project from "../components/Project/Project";
import ProjectUpdator from "../components/UserInfoPage/ProjectUpdator"
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
      stateupdate : false,
      pcode2 : '',
      loading : false,
      layout : "1",
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
      var v_button = document.getElementById('toggletext');
      if (this.stateAdd) {
        v_button.innerHTML = "프로젝트 생성하기";
      } else {
        v_button.innerHTML = "뒤로가기";
      }
      this.stateAdd = !this.stateAdd
    },
    cc(pcode) {
      this.pcode = pcode;
      this.statedetail = true;
      this.loading = false;
    },
    gbp() {
      this.statedetail = false;
    },

    update_project(pcode2) {
      this.pcode2 = pcode2
      this.stateupdate = true;
    },
    gbp2() {
      this.stateupdate = false;
    },

    fromLeftSide(load) {
      this.loading = load;
      if ( this.loading == true) {
        this.$loading(true)
      } else {
        this.$loading(false)
      }
    },
    layout1() {
      this.layout = "1";
    },
    layout2() {
      this.layout = "2";
    },
    layout3() {
      this.layout = "3";
    },
    UPDATE_Project(pcode) {
      this.pcode2 = pcode
      this.stateupdate = true;
    },

  },
  components: {
    TopBar,
    LeftSide,
    ProjectList,
    ProjectEditor,
    Project,
    ProjectUpdator,
  },
  watch: {
    // 라우터 객체를 감시하고 있다가 fetchData() 함수를 호출한다
    //'$route': 'fetchData'
    'toggleView' : 'updateToggle'
  },
};

</script>

<style scoped>
</style>
