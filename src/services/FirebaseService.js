import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebase_config = {
  apiKey: "AIzaSyDu-5lDS7UuTjeSz2lcYLrJmst_amq3AA8",
  authDomain: "vue-reboot.firebaseapp.com",
  databaseURL: "https://vue-reboot.firebaseio.com",
  projectId: "vue-reboot",
  storageBucket: "",
  messagingSenderId: "395343379837",
  appId: "1:395343379837:web:62eb22d57ca1520e"
};

firebase.initializeApp(firebase_config);

const firestore = firebase.firestore();
const auth = firebase.auth;
var provider = new auth.FacebookAuthProvider();
// console.log(provider)

var url = document.location.href;
// console.log((login_user==null)?"익명":login_user)
// console.log(url)


  // firestore.collection('weblog').add({
  //   login_user,
  //   url,
  //   date: firebase.firestore.FieldValue.serverTimestamp()
  // })

export default {
  // SXNGHo
  // --------------------------------------------------------
  ADD_Project(
    projecttitle,
    projectdescription,
    projectterm,
    projectcontent,
    projecttech,
    projectimage,
    projectrank,
    session_id,
  ) {
    return firestore
      .collection("project")
      .doc(projecttitle)
      .set({
        projecttitle,
        projectdescription,
        projectterm,
        projectcontent,
        projecttech,
        projectimage,
        projectrank,
        session_id,
        date: firebase.firestore.FieldValue.serverTimestamp()
      });
  },
  async getProjects(id) {
    return firestore.collection('project')
    .where("session_id","==",id)
    .get()
    .then((docSnapshots) => {
      return docSnapshots.docs.map((doc) => {
        let data = doc.data()
        return data
      })
    })
  },
  async getUserdata(id) {
    return firestore.collection('users')
    .where("email","==",id)
    .get()
    .then((docSnapshots) => {
      return docSnapshots.docs.map((doc) => {
        let data = doc.data()
        return data
      })
    })
  },
  ///// unused function by sxngho
  async getData() {
    return firestore
      .collection("userImg")
      .get()
      .then(docSnapshots => {
        return docSnapshots.docs.map(doc => {
          let data = doc.data();
          let id = doc.id;
          return { id, data };
        });
      });
  },
  ADD_userImg(image) {
    return firestore.collection("userImg").add({
      image,
      date: firebase.firestore.FieldValue.serverTimestamp()
    });
  },

  // -----------------------------------------------------------------
  // seulgi
  async signup(id, password, first_name, last_name, phonenumber, userSkills, userImage, userName, userIntro, userCareers, userEducations) {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(id, password)
      .then(function() {
        // console.log(`${id}`)
        firestore
          .collection("users")
          .doc(id)
          .set({
            email: id,
            first_name: first_name,
            last_name: last_name,
            phonenumber: phonenumber,
            userSkills:userSkills,
            userImage:userImage,
            userName:first_name + last_name,
            userIntro:userIntro,
            userCareers:userCareers,
            userEducations:userEducations
          });
        alert(`${id}님, 회원가입이 완료되었습니다.`);
        return true;
      })
      .catch(function(error) {
        // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // console.log(errorCode)
        // console.log(errorMessage)
        alert(error);
      });
      return false;
  },
  async login(id, password) {
    return firebase
      .auth()
      .signInWithEmailAndPassword(id, password)
      .then(function() {
        // console.log('로그인 성공한것이다')
        // alert('로그인 완료!');
        // console.log('true!!')
        return true; // 유저 관련된 결과값은 성공한 경우가 True
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
    return false;
  },
  async logout() {
    return firebase
      .auth()
      .signOut()
      .then(function() {
        // Sign-out successful.
        alert("로그아웃 완료!");
        return false;
      })
      .catch(function(error) {
        // An error happened.
        alert(error);
        return true;
      });
  },
  signin_facebook() {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        // var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // console.log(user)
        alert(`페이스북 로그인 완료!, ${user.email}`);
        // ...
      })
      .catch(function(error) {
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

};
