import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebase_config = {
  apiKey: 'AIzaSyDu-5lDS7UuTjeSz2lcYLrJmst_amq3AA8',
  authDomain: 'vue-reboot.firebaseapp.com',
  databaseURL: 'https://vue-reboot.firebaseio.com',
  projectId: 'vue-reboot',
  storageBucket: '',
  messagingSenderId: '395343379837',
  appId: '1:395343379837:web:62eb22d57ca1520e'
}

firebase.initializeApp(firebase_config);

const firestore = firebase.firestore();
const auth = firebase.auth
var login_user // 로그인 하면 email, 아니면 ''  처리
var usercanuse // 로그인된 유저만 쓸 수 있는 박스 ex, 글 작성
var usercantuse
var provider = new auth.FacebookAuthProvider()
// console.log(provider)

// 여기가 로그인 관련된 것
auth().onAuthStateChanged(function(user) {

  var whoareyou = document.querySelector('#whoareyou')
  var usercantsees = document.querySelectorAll('.usercantsee')
  var usercansees = document.querySelectorAll('.usercansee')

  if (user) {
    login_user = user.email
    usercantsees.forEach(function(usercantsee) {
      usercantsee.style.display = 'none' })
    usercansees.forEach(function(usercansee) {
      usercansee.style.display = 'block' })

  } else {
    login_user = '익명'
    usercantsees.forEach(function(usercantsee) {
      usercantsee.style.display = 'block' })
    usercansees.forEach(function(usercansee) {
      usercansee.style.display = 'none' })
  }
  whoareyou.innerText = login_user
})

export default{
  // SXNGHo
  // --------------------------------------------------------
  async getProjects() {
    return firestore.collection('project')
    .get()
    .then((docSnapshots) => {
      return docSnapshots.docs.map((doc) => {
        let data = doc.data()
        return data
      })
    })
  },
  async getData(){
    return firestore.collection("userImg").get().then((docSnapshots) => {
      return docSnapshots.docs.map((doc) => {
        let data = doc.data()
        let id = doc.id
        return {id , data}

      })
    })
  },
  ADD_userImg(image){
    return firestore.collection('userImg').add({
      image,
      date: firebase.firestore.FieldValue.serverTimestamp()
    });
  },
  ADD_project(title, image,content){
    return firestore.collection('project').add({
      title,
      image,
      content,
      date: firebase.firestore.FieldValue.serverTimestamp()
    });
  },
// -----------------------------------------------------------------
// seulgi
    data() {
      return {
         usercanuse : usercanuse
      }
    },

    signup(id, password){
      auth().createUserWithEmailAndPassword(id, password)
      .then(function() {
        alert(`${id}님, 회원가입이 완료되었습니다.`)
        // console.log('됏냐아')
      })
      .catch(function(error) {
        // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // console.log(errorCode)
        // console.log(errorMessage)
        alert(error)
      });
    },
    login(id, password){
      auth().signInWithEmailAndPassword(id, password)
      .then(function() {
        // console.log('로그인 성공한것이다')
        alert('로그인 완료!');
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // console.log(errorCode)
        // console.log(errorMessage)
        // console.log('로그인 실패한 것이다.')
        alert(`${errorCode}\n${errorMessage}`);
        });
    },
    logout() {
      auth().signOut().then(function() {
        // Sign-out successful.
        alert('로그아웃 완료!');
      }).catch(function(error) {
        // An error happened.
        alert(error);
      });
    },
    signin_facebook(){
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        // var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        alert(`페이스북 로그인 완료!, ${user}`);
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        alert(`${errorCode}\n${errorMessage}\n${email}\n${credential}`);
      });
    }


}
