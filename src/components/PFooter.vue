<template>
  <div class="pfooter">
    <div class="pfooter__content">
      <h2>오늘의 날씨</h2>
      <p>도시명 : {{ city }}</p>
      <p>현재 습도 : {{ humidity }}% / 100%</p>
      <p>날씨 : {{ weather }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "pFooter",
  data() {
    return {
      city: "",
      humidity: "",
      weather: ""
    };
  },
  computed: {
    hasResult: function() {
      return this.posts.length > 0;
    }
  },
  mounted() {
    const BASE_URL =
      "http://api.openweathermap.org/data/2.5/weather?q=Daejeon&appid=8524498325d50c1573d0f08755ed342c";
    this.$http.get(`${BASE_URL}`).then(result => {
      this.city = result.data.name;
      this.humidity = result.data.main.humidity;
      this.weather = result.data.weather[0].main;
    });
  }
};
</script>

<style>
.pfooter {
  width: 100%;
  height: 140px;
  color: white;
  background-color: black;
  bottom: 0;
}
.pfooter__content {
  display: block;
  text-align: center;
}
</style>
