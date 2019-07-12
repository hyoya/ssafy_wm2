<template>
  <v-layout py-4 h-100>
    <v-flex row>
      <p class="mb-1 color-666 font-weight-light subheading">{{projecttitle}}</p>
      <p class="mb-1 color-666 font-weight-light subheading">{{projectdescription}}</p>
      <p class="mb-1 color-666 font-weight-light subheading">{{projectterm}}</p>
      <p class="mb-1 color-666 font-weight-light subheading">{{projectcontent}}</p>
      <p class="mb-1 color-666 font-weight-light subheading">{{projecttech}}</p>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
	name: 'Project',
	props: {
    projecttitle: {type: String},
    projectdescription: {type: String},
    projectterm: {type: String},
    projectcontent: {type: String},
    projecttech: {type: Array},
    projectrank:{type:String}
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
