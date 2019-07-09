<template>

  <v-layout column>
    <v-flex>
      <!-- -->
      <div style='height:300px;'>아직 미정입니다.</div>
      <div>
        <h1>회원가입하자</h1>
        Email : <input v-model='id'><br>
        Password : <input v-model='password' type="password">
        <button @click='signup_raw(id, password)'>회원가입하기</button>
      </div>
    </v-flex>
  </v-layout>

</template>

<script>
import FirebaseService from "@/services/FirebaseService";
// const auth = FirebaseService.auth

export default {
	name: 'SignUpForm',
	props: {
	},
	data() {
		return {
      id : '',
      password : ''
		}
  },
  methods: {
    signup_raw(id, password) {
      FirebaseService.signup(id, password);
    }
  }
}
</script>
<style>
input {
  border : 1px solid;
  margin : 10px;
}
button {
  border : 1px solid red;
  color : red;
}
</style>
