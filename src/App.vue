<template>
  <v-app>
    <v-content>
    <!-- Header -->
      <v-layout column>
        <v-flex xs12>
          <PHeader/>
        </v-flex>
      </v-layout>

      <router-view/>

      <!-- Footer -->
      <PFooter/>

    </v-content>
  </v-app>
</template>

<script>
import PHeader from "./components/PHeader";
import PFooter from "./components/PFooter";
export default {
  name:'App',
  components: {
    PHeader,
    PFooter,
  },
  data(){
    return{}
  },
};
</script>

<style>
</style>
