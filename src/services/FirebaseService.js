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
var login_user; // 로그인 하면 email, 아니면 ''  처리
var url = document.location.href;
// console.log((login_user==null)?"익명":login_user)
// console.log(url)

  // firestore.collection('weblog').add({
  //   login_user,
  //   url,
  //   date: firebase.firestore.FieldValue.serverTimestamp()
  // })

  auth().onAuthStateChanged(function(user) {

    var whoareyou = document.querySelector('.whoareyou')
    var usercantsees = document.querySelectorAll(".usercantsee");
    var usercansees = document.querySelectorAll(".usercansee");

    if (user) {
      // login_user = user.email;
      usercantsees.forEach(function(usercantsee) {
        usercantsee.style.display = "none";
      });
      usercansees.forEach(function(usercansee) {
        usercansee.style.display = "block";
      });

      whoareyou.innerText = user.email

    } else {
      // login_user = "익명";
      usercantsees.forEach(function(usercantsee) {
        usercantsee.style.display = "block";
      });
      usercansees.forEach(function(usercansee) {
        usercansee.style.display = "none";
      });
    }
  })


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
  // -----------------------------------------------------------------
  async SignupUser(id, password, first_name, last_name, phonenumber, userSkills, userImage, userName, userIntro, userCareers, userEducations) {
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
        alert(error);
      });
      return false;
  },
  async SignupCompany(company_name, id, password, interests) {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(id, password)
      .then(function() {
        // console.log(`${id}`)
        firestore
          .collection("companys")
          .doc(id)
          .set({
            company_name: company_name,
            id: id,
            interests: interests
          });
        alert(`${id}님, 회원가입이 완료되었습니다.`);
        return true;
      })
      .catch(function(error) {
        // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        alert(error);
      });
      return false;
  },
  async Signin(id, password) {
    return firebase
      .auth()
      .signInWithEmailAndPassword(id, password)
      .then(function() {
        return true; // 유저 관련된 결과값은 성공한 경우가 True
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(`${errorCode}\n${errorMessage}`);
      });
    return false;
  },
  async SigninFacebook() {
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        var user = result.user.email
        alert(`페이스북 로그인 완료!, ${result.user.email}`);
        var answer = {'user':user, 'result':true};
        return answer;
      })
      .catch(function(error) {
        // Handle Errors here.
        console.log('이게뜨면안되는데??')
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        // ...
        alert(`${errorCode}\n${errorMessage}\n${email}\n${credential}`);
        return false;
      });
  },
  async Logout() {
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
  GetUserinfo(user) {
    var str = location.origin +'/story/'+ user;
    location.replace(str);
  }
  // -----------------------------------------------------------------
};
