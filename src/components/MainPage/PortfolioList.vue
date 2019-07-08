<template>

</template>
<script>
</script>
<!--
<template>
  <v-layout mt-5 wrap>
    <v-flex v-for="i in portfolios.length > limits ? limits : portfolios.length" xs12 sm6 md3>
      <Portfolio class="ma-3"
              :date="portfolios[i - 1].created_at.toString()"
              :title="portfolios[i - 1].title"
              :body="portfolios[i - 1].body"
              :imgSrc="portfolios[i - 1].img"
      ></Portfolio>
    </v-flex>
    <v-flex xs12 text-xs-center round my-5 v-if="loadMore">

        <v-btn color="info" dark v-on:click="loadMorePortfolios" v-if="flag">
          <v-icon size="25" class="mr-2">fa-plus</v-icon>
           더 보기
        </v-btn>

      <v-btn color="info" dark to="/portfolioWrite"> 글 쓰기 </v-btn>
    </v-flex>

  </v-layout>
</template>
-->
<!-- TODO 포트폴리오 샘플파일이 생겼을경우, firebase와 연결시켜서 출력하기 -->
<!--
<script>
import Portfolio from '@/components/MainPage/Portfolio'
import FirebaseService from '@/services/FirebaseService'

export default {
	name: 'PortfoliosList',
	props: {
		limits: {type: Number, default: 4},
    loadMore: {type: Boolean, default: false},
    flag :{type:Boolean, default:true},
	},
	data() {
		return {
			portfolios: []
		}
	},
	components: {
		Portfolio,
	},
	mounted() {
		this.getPortfolios()
	},
	methods: {
		async getPortfolios() {
			this.portfolios = await FirebaseService.getPortfolios()
		},
		loadMorePortfolios() {
      this.limits += 4;
      if(this.portfolios.length <= this.limits){
        this.flag = false;
      }
    }
	},
}
</script>
<style>
  .mw-700 {
    max-width: 700px;
    margin: auto;
  }
</style>
-->
