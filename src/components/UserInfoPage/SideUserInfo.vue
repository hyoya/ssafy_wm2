<template>
  <div class="SideUserInfo">
    <div class="SideUserInfo__box box">
      <div class="SideUserInfo__intro">
        <div class="SideUserInfo__intro__userImg box">userImg</div>
        <div class="SideUserInfo__intro__userName box">userName</div>
        <div class="SideUserInfo__intro__introduce box">hello my name is palkim</div>
        <div class="FBtn">
          <button class="followBtn">Follow</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.box {
  border: 1px solid #2c2c2c;
}
.SideUserInfo {
  width: 325px;
  height: 700px;
  background-color: greenyellow;
  border-radius: 5px;
  margin: 25px;
}
.SideUserInfo__box {
  height: 280px;
}
.SideUserInfo__intro__userImg {
  height: 100px;
}
.SideUserInfo__intro__userName {
  height: 30px;
}
.SideUserInfo__intro__introduce {
  height: 120px;
}
.followBtn {
  background-color: #ddd;
  color: #666;
  width: 70px;
  height: 30px;
}
</style>
