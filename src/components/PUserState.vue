<template>
  <div class="user__state">
    <button class="user__state__followers">Followers</button>
    <button class="uesr__state__stars">Stars</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
.user__state {
  display: flex;
  justify-content: center;
  background-color: white;
  width: 100%;
  height: 70px;
  color: #2c2c2c;
  font-size: 20px;
}
button {
  margin-right: 15px;
  background-color: aqua;
}
</style>
