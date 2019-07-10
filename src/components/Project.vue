<template>
  <v-layout py-4 h-100>
    <v-flex row>
      <v-img :src="imglink" width=50 hegith=50
      ></v-img>
      <h2 class="color-333 headline font-weight-light">{{title}}</h2>
      <p class="mb-1 color-666 font-weight-light subheading">{{content}}</p>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
	name: 'Project',
	props: {
		title: {type: String},
    imglink: {type: String},
		content: {type: String}
	},
}
</script>
<style>
  .color-666 {
    color: #666;
  }
  .color-333 {
    color: #333;
  }
  .h-100 {
    height: 100%;
  }
</style>
