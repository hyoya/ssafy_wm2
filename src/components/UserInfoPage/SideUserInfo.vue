<template>
  <div class="SideUserInfo">
    <div class="SideUserInfo__intro box">
      <div class="SideUserInfo__intro__userImg box">
        userImg
        <ImgUpload />
      </div>
      <div class="SideUserInfo__intro__userName box">userName</div>
      <div class="SideUserInfo__intro__introduce box">hello my name is palkim</div>
      <div class="FBtn">
        <button class="followBtn">Follow</button>
      </div>
      <div class="SideUserInfo__skills box">
        <div class="SideUserInfo__skills__list">SKILLS</div>
      </div>
      <div class="SideUserInfo__history box">
        <div class="SideUserInfo__history__content">
          history
          <ul class="content">
            <li class="content__col">ssafy 2018.12~</li>
          </ul>
        </div>
      </div>
      <div class="SideUserInfo__elseWhere box">ELSE WHERE</div>
    </div>
  </div>
</template>

<script>
import ImgUpload from "../ImgUpload";

export default {
  name: "SideUserInfo",
  components: {
    ImgUpload
  }
};
</script>

<style scoped>
.box {
  border: 1px solid #2c2c2c;
}
.SideUserInfo {
  width: 325px;
  height: 700px;
  background-color: white;
  border-radius: 5px;
  margin: 25px;
  text-align: center;
}
.SideUserInfo__elseWhere {
  height: 120px;
}
.SideUserInfo__skills {
  height: 150px;
}
.SideUserInfo__history {
  height: 150px;
}
.SideUserInfo__intro {
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
.FBtn {
  display: flex;
  justify-content: center;
}
</style>
