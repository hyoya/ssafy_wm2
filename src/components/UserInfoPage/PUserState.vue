<template>
  <div class="userState">
    <div class="userState__info">
      <div class="info__content">followers</div>
      <div class="info__content">stars</div>
      <i class="far fa-star" id="star"></i>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.userState__info {
  background-color: white;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.info__content {
  background-color: yellow;
  margin-left: 30px;
  color: #2c2c2c;
  font-size: 20px;
}
/* #star {
  color: #2c2c2c;
}  */
</style>
