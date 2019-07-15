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



//// 김슬기가 지금 댓글 작성하기 위해서 작업하고 있는 곳입니다.

// 1. 컬렉션에서 각 문서의 id와 데이터를 가져오는 방법
// firestore.collection('project')
// .where("session_id","==","rla99@rla.com").get().then((snap) => {
//   return snap.docs.map((doc) => {
//     let data = doc.data()
//     console.log(data)
//     console.log(doc.id)
//     return data
//   })
// })


// 2. 해당 사람의 컬렉션 갯수
// firestore.collection('project')
//   .where("session_id","==","rla99@rla.com")
//   .get()
//   .then(snap => {
//    var size = snap.size // will return the collection size
//    console.log(snap)
//    console.log(size)
// });


// 3. 해당 사람의 프로젝트 다 가져오기
// firestore.collection('project')
//   .where("session_id","==","rla99@rla.com")
//   .get()
//   .then((snap) => {
//     console.log(snap)
//     return snap.docs.map((doc) => {
//       let data = doc.data()
//       console.log(snap)
//       console.log(data)
//       console.log(doc.id)
//       return data
//     })
//   })

// 4. 해당 사람의 것 num 기준으로 역순으로 배열 : 아직 해결 못함.
// firestore.collection('projects')
//   .where("session_id","==","rla99@rla.com")
//   .orderBy("num","desc")
//   .limit(2)
//   // .orderBy("num", 'desc')
//   .get()
//   .then((snap) => {
//
//     console.log(snap)
    // console.log(snap.docs)
  })


//// 김슬기 작업장 끝


auth().onAuthStateChanged(function(user) {
  var whoareyous = document.querySelectorAll(".whoareyou");
  var usercantsees = document.querySelectorAll(".usercantsee");
  var usercansees = document.querySelectorAll(".usercansee");

  // var mines = document.querySelectorAll('.mine')
  // var notmines = document.querySelectorAll('.notmine')

  if (user) {
    login_user = user.email;
    usercantsees.forEach(function(usercantsee) {
      usercantsee.style.display = "none";
    });
    usercansees.forEach(function(usercansee) {
      usercansee.style.display = "block";
    });
  } else {
    login_user = "익명";
    usercantsees.forEach(function(usercantsee) {
      usercantsee.style.display = "block";
    });
    usercansees.forEach(function(usercansee) {
      usercansee.style.display = "none";
    });
  }
  whoareyous.forEach(function(whoareyou) {
    whoareyou.innerText = login_user })
  })


  // firestore.collection('weblog').add({
  //   login_user,
  //   url,
  //   date: firebase.firestore.FieldValue.serverTimestamp()
  // })


  export default {
    // SXNGHO's Function ---------------------------------------------------------

    // Function :: 프로젝트를 작성합니다.
    // Parameter :: 제목,간략설명,진행기간,내용,사용기술,대표이미지,프로젝트수준,작성자아이디입니다.
    INSERT_Projects(projecttitle,projectdescription,projectterm,projectcontent,projecttech,projectimage,projectrank,session_id) {
      return firestore.collection("projects").doc(projecttitle).set({
        projecttitle,projectdescription,projectterm,projectcontent,projecttech,
        projectimage,projectrank,session_id,date: firebase.firestore.FieldValue.serverTimestamp()
      });
    },

    // Function :: 개인 프로젝트를 가져옵니다.
    // Parameter :: Story 페이지의 주인의 아이디를 가져와서 개인프로젝트를 검색합니다.
    async SELECT_Projects(id) {
      return firestore.collection('projects')
      .where("session_id","==",id).get().then((docSnapshots) => {
        return docSnapshots.docs.map((doc) => {
          let data = doc.data()
          return data
        })
      })
    },

    // Function :: 유저의 정보를 가져옵니다.
    // Parameter :: Story 페이지의 주인의 아이디를 개인정보를 가져옵니다.
    async SELECT_Userdata(id) {
      return firestore.collection('users').where("email","==",id)
      .get().then((docSnapshots) => {
        return docSnapshots.docs.map((doc) => {
          let data = doc.data()
          return data
        })
      })
    },

    UPDATE_userIntro(intro,userId) {
      return firestore.collection("users").doc(userId).update({
        userIntro : intro
      });
    },

    UPDATE_userEdu(edu,userId) {
      return firestore.collection("users").doc(userId).push().set({
        edu
      });
    },


    // -----------------------------------------------------------------

    // seulgi
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
