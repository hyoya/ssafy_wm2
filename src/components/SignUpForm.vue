<template>

  <v-layout column>
    <v-flex>
      <div style='height:300px;'>아직 미정입니다.</div>
      <div>
        <h1>현재 로그인한 사용자 : <span id='now_login'></span></h1>
        <h1>회원가입하자</h1>
        Email : <input v-model='create_id'><br>
        Password : <input v-model='create_password' type="password">
        <button @click='signup(create_id, create_password)'>회원가입하기</button>
      </div>
      <div>
        <h1>로그인하자</h1>
        Email : <input v-model='login_id'><br>
        Password : <input v-model='login_password' type="password">
        <button @click='login(login_id, login_password)'>로그인하자</button>
      </div>
      <div>
        <h1>페이스북으로 로그인하기</h1>
        <button @click='signin_facebook()'>페북로그인</button>
      </div>
      <div>
        <h1>로그아웃</h1>
        <button @click='logout()'>로그아웃</button>
      </div>
      <br><br><br><br><br>
      <div id='writebox'>
        로그인 되었을 때에만 여기가 보일 것입니다~
        <button>글 작성</button>
      </div>
    </v-flex>
  </v-layout>

</template>

<script>
import FirebaseService from "@/services/FirebaseService";

export default {
	name: 'SignUpForm',
	props: {
	},
	data() {
		return {
      create_id : '',
      create_password : '',
      login_id : '',
      login_password : '',
		}
  },
  methods: {
    signup(id, password) {
      FirebaseService.signup(id, password);
      this.id = '',
      this.password = ''
    },
    signin_facebook() {
      FirebaseService.signin_facebook();
    },
    login(id, password) {
      FirebaseService.login(id, password)
      // console.log(FirebaseService.data())
    },
    logout() {
      FirebaseService.logout()
      // console.log(FirebaseService.data())
    }
  },
}
</script>

<style scoped>
input {
  border : 1px solid;
  margin : 10px;
}
button {
  border : 1px solid red;
  color : red;
}
</style>
