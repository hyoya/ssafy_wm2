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
var provider = new auth.FacebookAuthProvider()
// console.log(provider)


var url = document.location.href
// console.log((login_user==null)?"익명":login_user)
// console.log(url)

auth().onAuthStateChanged(function(user) {

  var whoareyous = document.querySelectorAll('.whoareyou')
  var usercantsees = document.querySelectorAll('.usercantsee')
  var usercansees = document.querySelectorAll('.usercansee')

  // var mines = document.querySelectorAll('.mine')
  // var notmines = document.querySelectorAll('.notmine')

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
  whoareyous.forEach(function(whoareyou) {
    whoareyou.innerText = login_user })

    // firestore.collection('weblog').add({
    //   login_user,
    //   url,
    //   date: firebase.firestore.FieldValue.serverTimestamp()
    // })
})



export default{

  // SXNGHo
  // --------------------------------------------------------
  ADD_Project(projecttitle,
    projectdescription,
    projectterm,
    projectcontent,
    projecttech,
    projectimage){
    return firestore.collection('project').doc(projecttitle).set({
      projecttitle,
      projectdescription,
      projectterm,
      projectcontent,
      projecttech,
      projectimage,
      date: firebase.firestore.FieldValue.serverTimestamp()
    });
  },
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
  async getmainProjects() {
    // return firestore.collection('project')
    return firestore.collection('project').orderBy('date')
    .get()
    .then((docSnapshots) => {
      return docSnapshots.docs.map((doc) => {
        // console.log((doc.id))
        let data = [ doc.id, doc.data()]
        // console.log((data))
        return data
      })
    })
  },
  ///// unused function by sxngho
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

// -----------------------------------------------------------------
// seulgi
  signup(id, password, first_name, last_name, phonenumber){
    auth().createUserWithEmailAndPassword(id, password)
    .then(function() {
      // console.log(`${id}`)
      firestore.collection('users').doc(id).set({
        email : id,
        first_name : first_name,
        last_name : last_name,
        phonenumber : phonenumber
      })
      alert(`${id}님, 회원가입이 완료되었습니다.`)
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
  async login(id, password){
    return firebase.auth().signInWithEmailAndPassword(id, password)
    .then(function() {
      // console.log('로그인 성공한것이다')
      // alert('로그인 완료!');
      // console.log('true!!')
      return true // 유저 관련된 결과값은 성공한 경우가 True
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
      return false
  },
  async logout() {
    return firebase.auth().signOut().then(function() {
      // Sign-out successful.
      alert('로그아웃 완료!');
      return false
    }).catch(function(error) {
      // An error happened.
      alert(error);
      return true
    });
  },
  signin_facebook(){
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      // var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // console.log(user)
      alert(`페이스북 로그인 완료!, ${user.email}`);
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
  },
  get_userinfo() {
    var str = 'http://localhost:8080/userinfo/' + login_user
    location.replace(str);
  },
  filter_userinfo(userinfo_user) {

    // console.log(userinfo_user, '이 페이지의 주인')

    firebase.auth().onAuthStateChanged(function(user) {

      if (user) {
        login_user = user.email
      } else {
        login_user = '익명'}

        var mines = document.querySelectorAll('.mine')
        var notmines = document.querySelectorAll('.notmine')

        if (login_user == userinfo_user) {
          // console.log('나의 페이지가 맞다')
          mines.forEach(function(mine) {
            mine.style.display = 'block';
          })
          notmines.forEach(function(notmine) {
            notmine.style.display = 'none';
          })

        } else {
          // console.log('여긴 남의 페이지이다')
          notmines.forEach(function(notmine) {
            notmine.style.display = 'block';
          })
          mines.forEach(function(mine) {
            mine.style.display = 'none';
          })
        }

    })
  },
}

// auth().onAuthStateChanged(function(user)
