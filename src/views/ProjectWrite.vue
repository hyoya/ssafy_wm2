<template>
  <div justify-center>

    <!-- PHeader margin -->
    <v-flex style="height:60px; background:red;"><h1>aaaaa</h1></v-flex>

    <v-flex column xs11 >
    <v-tabs
      right
      v-model="active"
      color="gray"
      dark
      slider-color="red"
    >
      <v-tab
        v-for="n in steps"
        :key="n"
        ripple
      >
        {{ n.step }}
      </v-tab>

      <!-- 탭 아이템들 -->
      <!-- Step 1 :: ProjectTitle -->
      <!--
      <v-tab-item :key="1">
        <v-card flat>
          <v-card-text>
            <v-container>
              <v-flex>
                <h3>ADD Project</h3>
              </v-flex>

              <v-flex>
                <span>프로젝트 제목</span>
                <small>*필수항목입니다</small>
                <v-text-field
                label="프로젝트 제목*"
                single-line
                required
                outline
                v-model="projecttitle"
                ></v-text-field>
              </v-flex>

              <v-flex>
                <span>프로젝트 설명</span>
                <v-textarea
                outline
                name="input-7-4"
                label="프로젝트 설명"
                v-model="projectdescription"
                ></v-textarea>
              </v-flex>

              <v-flex>
                <p>프로젝트 생성시 프로젝트 생성 도우미가 실행됩니다!</p>
              </v-flex>

              <div class="text-xs-center mt-3">
                <v-btn @click="next">프로젝트 생성하기!</v-btn>
              </div>
            </v-container>
          </v-card-text>
        </v-card flat>
      </v-tab-item>
    -->

      <!-- Step 2 :: ProjecStruct -->
      <v-tab-item :key="1">
        <v-card flat>
          <v-card-text>
            <!-- 프로젝트 기간 세팅 -->
            <v-container>
              <h3>날짜 / 기간</h3>
              <v-flex xs12>
                프로젝트 시작일 :  {{picker}}<br/>
                프로젝트 기간 : {{projectterm}}
              </v-flex>

              <v-layout column justify-center>
                <v-flex xs12>
                  <v-date-picker v-model="picker" :landscape="landscape" color="green lighten-1"></v-date-picker>
                </v-flex>

                <v-flex xs12>
                  <ul row style="list-style:none;">
                    <li v-for="item in pterm" style="float:left">
                      <v-btn small flat outline="black" round @click="termselect(item)">{{ item }}</v-btn>
                    </li>
                  </ul>
                </v-flex>
              </v-layout>
            </v-container>

            <hr/>

            <!--  테크 -->
            <v-container>
              <h3>Tech stack</h3>
              <v-layout column justify-center>
                <v-flex xs12>
                  <ul row style="list-style:none;">
                    <li v-for="item in pterm" style="float:left">
                      <v-btn small flat outline="black" round @click="termselect(item)">{{ item }}</v-btn>
                    </li>
                  </ul>
                </v-flex>

                <v-textfield/>

              </v-layout>

            </v-container>

            <div class="text-xs-center mt-3">
              <v-btn @click="prevent">이전으로</v-btn>
              <v-btn @click="next">다음단계로</v-btn>
            </div>
          </v-card-text>
        </v-card flat>
      </v-tab-item>

      <!-- Step 3 :: Set Project main Img, Thumbnail, description -->
      <v-tab-item :key="3">
        <v-card flat>
          <v-card-text>
            <h1>this is third card</h1>
            <div class="text-xs-center mt-3">
              <v-btn @click="prevent">이전으로</v-btn>
              <v-btn @click="next">완성하기!</v-btn>
              <br/>
              <small>*언제든지 수정할 수 있습니다!</small>
            </div>
          </v-card-text>
        </v-card flat>
      </v-tab-item>

    </v-tabs>

  </v-flex>
  </div>
</template>

<script>

  export default {
    name: "MainPage",
    data () {
        return {
          active: null,
          text: 'this is test',
          steps:[
            {step:"step 1"},
            {step:"step 2"},
            {step:"step 3"},
          ],

          picker: new Date().toISOString().substr(0, 10),
          landscape: true,
          pterm:[
             "진행중",
             "1주일",
             "2주일",
             "3주일",
             "1개월",
             "2개월",
             "3개월",
             "4개월",
             "5개월",
             "6개월",
             "7개월",
             "8개월",
             "9개월",
             "10개월",
             "11개월",
             "1년",
             "2년",
             "3년",
             "4년",
             "5년",
          ],

        }
      },
      methods: {
        next () {
          const active = parseInt(this.active)
          this.active = (active < 2 ? active + 1 : 2)
        },
        prevent(){
          const active = parseInt(this.active)
          this.active = (active == 0 ? 0 : active-1)
        },
        termselect(tmp){
          this.projectterm = tmp;
        }
      },
    components: {
    },
    props: {
      projecttitle:{type:String, required:true, default:"sss"},
      projectdescription:{type:String, default:"aaa"},
      projectterm:{type:String, default:"-"}
      projecttech: {
        type: Array,
        default: () => []
      },
  	},
  };
</script>
