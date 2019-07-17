
<template>
  <v-app>
    <Header v-if="!$store.state.no_header"/>
    <v-content>
      <router-view />
    </v-content>

    <Footer v-if="!$store.state.no_header"/>
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
  },
};
</script>

<style>
</style>
