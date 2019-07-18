<template>
  <div class="PortfolioList__container">
    <div class="PortfolioList__container__content">
      <div v-for="item in bottolePortfolio" class="content__portfolioList">
        <Portfolio v-bind:portfolio="item" />
      </div>
    </div>
    <button class="mainMoreBtn" @click="morePortfolio">MORE</button>
  </div>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";
import Portfolio from "../MainPage/Portfolio";
export default {
  components: {
    Portfolio
  },
  data() {
    return {
      allPortfolio: [],
      bottolePortfolio: [],
      end: 6,
      start: 0,
      PageCount: ""
    };
  },
  created() {
    this.SELECT_ALLProjects();
  },
  methods: {
    async SELECT_ALLProjects() {
      this.allPortfolio = await FirebaseService.SELECT_ALLProjects();
      this.PageCount = this.allPortfolio.length;
      console.log(this.PageCount);
      for (let i = this.start; i < this.end; i++) {
        this.bottolePortfolio.push(this.allPortfolio[i]);
      }
    },
    morePortfolio() {
      this.end += 6;
      this.start += 6;
      this.SELECT_ALLProjects();
    }
  }
};
</script>

<style scoped>
.PortfolioList__container__content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.PortfolioList__container {
  padding-left: 90px;
  padding-right: 40px;
  padding-top: 50px;
}
.mainMoreBtn {
  margin-left: 570px;
  font-size: 20px;
  background: purple;
  color: white;
  border-radius: 5%;
  width: 80px;
  height: 35px;
}
</style>
