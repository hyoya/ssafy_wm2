<template>
  <div class="Portfolio__container">
    <div class="Portfolio__container__content">
      <div class="Portfolio__box">
        <img :src="protfolioImg" style="height:200px; width:200px;" />
      </div>
    </div>
  </div>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";
export default {
  props: ["portfolio"],
  data() {
    return {
      portfolioId: "",
      protfolioImg: "",
      portfolioInfo: ""
    };
  },
  created() {
    this.SELECT_Project();
  },
  methods: {
    async SELECT_Project() {
      this.portfolioId = this.portfolio.project_id;
      this.portfolioInfo = await FirebaseService.SELECT_Project(
        this.portfolio.project_id
      );
      this.protfolioImg = this.portfolioInfo.projectimage;
      console.log(this.protfolioImg);
      console.log(this.portfolioId);
    }
  }
};
</script>

<style>
</style>
