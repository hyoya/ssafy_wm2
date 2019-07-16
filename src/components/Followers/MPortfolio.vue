<template>
  <div class="mportfolio__container">
    <div class="mportfolio__container__content">
      <div class="portfolio__box">1</div>
      <div class="portfolio__box">1</div>
      <div class="portfolio__box">1</div>
      <div class="portfolio__box">1</div>
      <div class="portfolio__box">1</div>
      <div class="portfolio__box">1</div>
      <div class="portfolio__box">1</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.portfolio__box {
  background-color: blue;
  height: 150px;
  width: 220px;
}
.mportfolio__container__content {
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  grid-template-columns: repeat(7, 1fr);
  width: 940px;
  grid-gap: 1rem;
  background-color: crimson;
}
</style>
