<template>
  <div class="topbar__container">
    <div class="topbar__container__content">
      <div class="content__stars">
        <div class="stars__title">stars</div>
        <div class="stars__amount">100</div>
      </div>
      <div class="content__followers">
        <div class="stars__title">followers</div>
        <div class="stars__amount">99</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.topbar__container {
  display: flex;
  align-items: center;
  height: 45px;
  background-color: #333333;
  color: white;
}
.topbar__container__content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.content__stars {
  display: flex;
}
.content__followers {
  display: flex;
}
</style>
