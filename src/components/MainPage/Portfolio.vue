<template>
  <v-card>
    <v-img :src="imgSrc" height="200px">
    </v-img>
    <v-card-title primary-title>
      <div>
        <div class="headline" v-line-clamp:20="1">{{title}}</div>
        <span class="grey--text" v-line-clamp:20="3">{{body}}</span>
      </div>
    </v-card-title>
  </v-card>
</template>


<script>
import Vue from 'vue'
import lineClamp from 'vue-line-clamp'

Vue.use(lineClamp,{})

export default {
	name: 'Portfolio',
	props: {
		date: {type: String},
		title: {type: String},
		body: {type: String},
		imgSrc: {type: String},
	},
	data() {
		return {
			//
		}
	}
}
</script>
