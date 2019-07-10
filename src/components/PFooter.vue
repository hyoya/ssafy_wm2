<template>
  <div class="pfooter">
    <div class="pfooter__content">
      <span>도시 : {{ city }}</span>
      <span>현재 습도 : {{ humidity }}% / 100%</span>
      <span>날씨 : {{ weather }}</span>

      <!-- <p>도시 : {{ city }}</p>
      <p>현재 습도 : {{ humidity }}% / 100%</p>
      <p>날씨 : {{ weather }}</p>
      <p>2019.07.08 - 2019.08.16</p>-->
    </div>
    <div class="pfooter__period">
      <span>2019.07.08 - 2019.08.16</span>
    </div>

    <div class="pfooter__icon">
      <v-btn href="https://lab.ssafy.com/Kim-Seul-Gi/webmobile-sub2">
        <i class="fab fa-gitlab fa-2x"></i>
      </v-btn>
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
  display: flex;
  justify-content: space-around;
  text-align: center;
}
.pfooter__icon {
  display: flex;
  justify-content: center;
}
.pfooter__period {
  display: flex;
  justify-content: center;
}
</style>
