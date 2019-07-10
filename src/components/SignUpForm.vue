<template>
  <v-layout column>
    <v-flex>
      <div style="height:300px;">아직 미정입니다.</div>
      <div>
        <h1>현재 로그인한 사용자 : ' {{login_user}} '</h1>
        <h1>회원가입하자</h1>Email :
        <input v-model="id" />
        <br />Password :
        <input v-model="password" type="password" />
        <button @click="signup(id, password)">회원가입하기</button>
      </div>
      <div>
        <button @click="check()">변경됨??</button>
        <h1>로그인하자</h1>Email :
        <input v-model="login_id" />
        <br />Password :
        <input v-model="login_password" type="password" />
        <button @click="login(login_id, login_password)">로그인하자</button>
      </div>
      <div>
        <h1>페이스북으로 로그인하기</h1>Email :
        <input v-model="facebook_id" />
        <br />Password :
        <input v-model="facebook_password" type="password" />
        <button @click="signin_facebook(facebook_id, facebook_password)">페북로그인</button>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
// import FirebaseService from "@/services/FirebaseService";
// const auth = FirebaseService.auth

export default {
  name: "SignUpForm",
  props: {},
  data() {
    return {
      id: "",
      password: "",
      login_id: "",
      login_password: "",
      facebook_id: "",
      facebook_password: "",
      login_user: "s "
    };
  },
  methods: {
    signup(id, password) {
      FirebaseService.signup(id, password);
      (this.id = ""), (this.password = "");
    },
    signin_facebook(id, password) {
      FirebaseService.signin_facebook(id, password);
    },
    login(id, password) {
      FirebaseService.login(id, password);
    }
  }
};
</script>

<style scoped>
input {
  border: 1px solid;
  margin: 10px;
}
button {
  border: 1px solid red;
  color: red;
}
</style>
