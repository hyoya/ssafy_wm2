<template>
  <v-flex xs3>
    <v-layout >
      <v-dialog v-model="popol" max-width="60vw" hide-overlay >
        <!-- Thumbnail -->
        <template v-slot:activator="{ on }">
          <v-btn flat class="white--text" v-on="on">
            <v-flex>
              <v-card>
                <v-img :src="projectimage" height="200px" width="200px"></v-img>
                <v-card-title primary-title>
                  <div>
                    <!--TODO :: TITLE  크게보여야함. -->
                    <div class="blakc--text">{{projecttitle}}</div>
                    <span class="grey--text">{{projectdescription}}</span>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-btn>
          <!-- <v-btn flat class="white--text" v-on="on">썸네일이 있을 자리입니다</v-btn> -->
        </template>


        <!-- Modal -->
        <v-card >
          <v-toolbar>
            <!-- profile img -->
            <v-btn icon to="/"/>
            <v-toolbar-title class="font-weight-medium"> {{projecttitle}} </v-toolbar-title>
            <span class="font-weight-thin font-italic">{{developer}}</span>
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
                  <BigImg v-bind:imgSrc="projectThumbnailurl" />
                </v-flex>
                <!--  left detail -->
                <v-flex xs12 md9>
                  <v-layout column>
                    <!-- project description -->
                    <v-flex>
                      <p>{{ projectdescription }}</p>
                      <p>{{ projectterm }}</p>
                      <p>{{ projectcontent }}</p>
                      <p>{{ projecttech }}</p>
                    </v-flex>
                    <!--comment -->
                    <v-flex>
                      <!-- comment input -->
                      <form>
                        <v-text-field
                        label="Comment"
                        required
                        @input="$v.name.$touch()"
                        @blur="$v.name.$touch()"
                        v-model="comment"
                        ></v-text-field>
                        <v-btn @click="addNewComment">submit</v-btn>
                      </form>

                      <!-- comment sort -->
                      <v-flex>

                        <span> sort </span>
                        <v-btn flat depressed small>oldest</v-btn>
                        <v-btn flat depressed small>newest</v-btn>
                        <v-btn flat depressed small>liked</v-btn>
                      </v-flex>

                      <!-- comment list -->
                      <v-list>
                        <v-list-tile v-for="(com, index) in comments" >
                          <v-list-tile-content>
                            <v-list-tile-title v-html="com.content"></v-list-tile-title>
                          </v-list-tile-content>

                          <v-list-tile-action>
                            <i class="fa fa-heart"  @click="likeit(index)"></i>
                          </v-list-tile-action>
                        </v-list-tile>
                      </v-list>

                      <!-- end xs9 -->
                    </v-flex>

                  </v-layout>
                </v-flex>

                <!-- right detail -->
                <v-flex xs12 md3>
                  <v-flex  v-for="e in etcproject" xs4 md1 d-inline style="width=80px;">
                    <img :src="e.url"/>
                  </v-flex>
                </v-flex>

              </v-layout>
            </v-container>

          </v-card-text>


          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="popol = false">Close</v-btn>
          </v-card-actions>
        </v-card>


      </v-dialog>
    </v-layout>
  </v-flex>
</template>


<script>
import BigImg from "../Common/BigImg";

export default {
  components:{
    BigImg
  },
  props : {
    projectimage: {type: String},
    projecttitle: {type: String},
    projectdescription: {type: String},
    projectterm: {type: String},
    projectcontent: {type: String},
    projecttech: {type: Array}
  },
  data: () => ({
    popol: false,
    // projecttitle : "프로젝트이름",
    projectThumbnailurl : "https://source.unsplash.com/random/1600x900",
    developer : "개발자이름",
    projectThumbnail : "../assets/logo.png",
    // description: "여기에는 프로젝트 디스크립션이 들어갈 공간입니다앙널민얼미;나어림ㄴ어라ㅣ;아아아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ글자수늘리기ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ",
    comments :[
      {nick:"닉네임", content:"댓글1"},
      {nick:"닉네임", content:"댓글2"},
      {nick:"닉네임", content:"댓글3"},
    ],
    comment : "",
    etcproject:[
      {url:"https://source.unsplash.com/random/100x100"},
      {url:"https://source.unsplash.com/random/100x100"},
      {url:"https://source.unsplash.com/random/100x100"},
    ],

  }),
  methods:{
    addNewComment(){
      const newcommnet ={
        nick:"유저닉네임",
        content : this.comment
      };
      this.comments.push(newcommnet);
    },
    likeit(index){

    },
  }

}
</script>
