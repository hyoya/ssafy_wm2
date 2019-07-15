

<template>
  <v-app>
    <v-content>
    <!-- Header -->
      <Header/>

      <router-view/>

      <!-- Footer -->
      <Footer/>

    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
export default {
  name:'App',
  components: {
    Header,
    Footer,
  }

};
</script>

<style>
</style>
