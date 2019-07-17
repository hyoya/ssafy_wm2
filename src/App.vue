
<template>
  <v-app>
    <Header />
    <v-content>
      <!-- Header -->
      <router-view />
      <!-- Footer -->
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
</style>
