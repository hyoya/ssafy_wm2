<template>
  <div class="userState">
    <div class="userState__info">
      <div class="info__content">
        <button class="btn">followers</button>
        <span>123</span>
      </div>
      <div class="info__content">
        <button class="btn">stars</button>
        <span>99</span>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.userState {
  margin-top: 70px;
}
.userState__info {
  background-color: white;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.info__content {
  margin-left: 30px;
  color: #2c2c2c;
  font-size: 20px;
}
.btn {
  margin-right: 10px;
}
</style>
