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
var provider = new auth.FacebookAuthProvider()
console.log(provider)

// 여기가 로그인 관련된 것
auth().onAuthStateChanged(function(user) {

  var tmp_logintext = document.querySelector('#now_login')
  var writebox = document.querySelector('#writebox')

  if (user) {
  login_user = user.email
  console.log('로그인 상태, ID : ', login_user)
  usercanuse = 'block'
} else {
  login_user = '로그인 해주세요'
  console.log('로그아웃 상태')
  usercanuse = 'none'
}

  writebox.style.display = usercanuse
  tmp_logintext.innerText = login_user

})

export default{
    data() {
      return {
         usercanuse : usercanuse
      }
    },
    async getData(){
      return firestore.collection("portfolio").get().then((docSnapshots) => {
        return docSnapshots.docs.map((doc) => {
            let data = doc.data()
            let id = doc.id
            return {id , data}
        })
      })
    },
    addData(title, image,content){
      return firestore.collection('portfolio').add({
        title,
        image,
        content,
        date: firebase.firestore.FieldValue.serverTimestamp()
      });
    },
    signup(id, password){
      auth().createUserWithEmailAndPassword(id, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)
    });
    },
    signin_facebook(id, password){
      console.log('열심히 합시다~~')
    },
    login(id, password){
      auth().signInWithEmailAndPassword(id, password)
      .then(function() {
        console.log('로그인 성공한것이다')
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
        console.log('로그인 실패한 것이다.')
        });
    },
    logout() {
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
    }


}
