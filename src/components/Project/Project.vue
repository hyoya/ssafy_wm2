<template>
  <!-- Modal -->
  <v-card >
    <v-toolbar>
      <!-- profile img -->
      <v-btn icon to="/"/>
      <v-toolbar-title class="font-weight-medium">

         <span class="font-weight-bold">{{projecttitle}} </span>
         <span class="font-weight-thin font-italic subheading">{{developer}}</span>
         <v-flex class="caption">
           {{ projectdescription }}
         </v-flex>
       </v-toolbar-title>
      <v-spacer/>
      <v-btn flat icon color="pink">
        <i class="fa fa-heart fa-2x"></i>
      </v-btn>
      <v-btn flat icon color="yellow">
        <i class="fa fa-star fa-2x"></i>
      </v-btn>
    </v-toolbar>

    <!-- card -->
    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>
          <!-- Project Main Thumbnail -->
          <v-flex xs12>
            <BigImg v-bind:imgSrc="projectimage" />
          </v-flex>
          <!--  left detail -->
          <v-flex xs12 md9>
            <v-layout column>
              <!-- project description -->
              <v-layout row style="padding: 2vw 0vw; border-bottom: 1px solid #cecece;">


              <!--comment -->
                <v-flex>
                  <span class="title">{{projecttitle}}</span>
                  <v-flex class="d-inline caption tag" round outline>{{ projectterm }}</v-flex>
                  <v-flex class="d-inline caption tag" round outline>{{ projectrank }}</v-flex>
                  <br />
                  <v-layout class="d-block" style="padding: 1vw 0vw;">
                    <v-flex
                      v-for="tech in projecttech"
                      class="tech d-inline-block caption"
                    >{{ tech }}</v-flex>
                  </v-layout>

                  <p v-html="projectcontent" />
                </v-flex>
              </v-layout>

            <!--comment -->
              <v-flex>
                <!-- comment input -->
                <form>
                  <!-- <v-text-field label="Comment" required @input="$v.name.$touch()" @blur="$v.name.$touch()" v-model="comment"></v-text-field> -->
                  <v-text-field label="Comment" v-model="comment"></v-text-field>

                  <v-btn @click="INSERT_Comment(comment)">submit</v-btn>
                  <v-btn @click="InfoProject()">project정보</v-btn>
                </form>

                <!-- comment sort -->
                <v-flex>
                  <span>sort</span>
                  <v-btn flat depressed small>oldest</v-btn>
                  <v-btn flat depressed small>newest</v-btn>
                  <v-btn flat depressed small>liked</v-btn>
                </v-flex>

                <!-- comment list -->
                <v-list>
                  <v-list-tile v-for="(com, index) in comments">
                    <v-list-tile-content>
                      <v-list-tile-title v-html="com.content"></v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-action>
                      <i class="fa fa-heart" @click="likeit(index)"></i>
                    </v-list-tile-action>
                  </v-list-tile>
                </v-list>

                <!-- end xs9 -->
              </v-flex>
            </v-layout>
          </v-flex>

        <!-- right detail -->
        <v-flex xs12 md3 justify-center>
          <v-flex>Etc Project</v-flex>
          <img
            v-for="e in etcproject"
            xs4
            md1
            :src="e.url"
            style="width:70px; height:70px; padding:3px;"
          />
        </v-flex>
      </v-layout>
    </v-container>
  </v-card-text>

  <v-card-actions>
    <v-spacer></v-spacer>
    <v-btn color="blue darken-1" flat @click="popol = false">Close</v-btn>
  </v-card-actions>

</v-card>
</template>

<script>
export default {
	name: 'pj',
	props: {
    projectimage: { type: String }, //프로젝트 메인 이미지
    projecttitle: { type: String }, // 프로젝트 이름
    projectdescription: { type: String }, //프로젝트 간단 설명
    projectterm: { type: String }, // 프로젝트 기간
    projectcontent: { type: String }, //프로젝트 설명(상세-위지윅으로 작성한 내용)
    projecttech: { type: Array }, //프로젝트 텍크 스택
    projectrank: { type: String }
	},
}
</script>
<style>
  .color-666 {
    color: #666;
  }
  .color-333 {
    color: #333;
  }
  .h-100 {
    height: 100%;
  }
</style>
