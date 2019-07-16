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
// firestore.collection('projects')
//   .where("session_id","==","rla99@rla.com")
//   .get()
//   .then((snap) => {
//     return snap.docs.map((doc) => {
//       let data = doc.data()
//       console.log(snap)
//       console.log(data)
//       console.log(doc.id)
//       return data
//     })
//   })

// 4. 해당 사람의 것 num 기준으로 역순으로 배열 : 아직 해결 완료
// firestore.collection('projects')
//   .where("session_id","==","rla99@rla.com")
//   .orderBy("num","asc")
//   .get()
//   .then((snap) => {
//     return snap.docs.map((doc) => {
//       let data = doc.data()
//       console.log(data)
//       console.log(doc.id)
//     })
//   })

// 5. 4번의 출처이다.

// var userId = "rla99@rla.com"
// console.log(userId)
// async function getUploadsByUser(userId) {
//   const query = firestore
//     .collection('projects')
//     .where('session_id', '==', userId)
//     .orderBy('num', 'asc');
//   const snapshot = await query.get()
//   return snapshot.docs.map(doc => console.log(doc.data()));
// }
//
// getUploadsByUser(userId)


//// 김슬기 작업장 끝

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
      return firestore.collection("projects").add({
        projecttitle,projectdescription,projectterm,projectcontent,projecttech,
        projectimage,projectrank,session_id,date: firebase.firestore.FieldValue.serverTimestamp(), comments:[]
      });
  },

    // Function :: 개인 프로젝트를 가져옵니다.
    // Parameter :: Story 페이지의 주인의 아이디를 가져와서 개인프로젝트를 검색합니다.
    async SELECT_Projects(id) {
      return firestore.collection('projects')
      .where("session_id","==",id).get().then((docSnapshots) => {
        return docSnapshots.docs.map((doc) => {
          let data = doc.data()
          return { 'project_id' : doc.id, 'data': data}
        })
      })
    },

    // 특정 프로젝트를 찾는 것입니다. - 슬기
    async SELECT_Project(id) {
      return firestore.collection('projects')
      .doc(id).get().then((docSnapshots) => {
          let data = docSnapshots.data()
          // console.log(data)
          return data
      })
    },

    // 특정 프로젝트의 댓글들을 찾는 것입니다. id = 프로젝트 id - 슬기
    async SELECT_Comments(id) {
      return firestore.collection('projects')
      .doc(id).get().then((docSnapshots) => {
          let data = docSnapshots.data().comments
          console.log(data)
          return data
      })
    },

  // Function :: 유저의 정보를 가져옵니다.
  // Parameter :: Story 페이지의 주인의 아이디를 개인정보를 가져옵니다.
  async SELECT_Userdata(id) {
    return firestore
      .collection("users")
      .where("email", "==", id)
      .get()
      .then(docSnapshots => {
        return docSnapshots.docs.map(doc => {
          let data = doc.data();
          return data;
        });
      });
  },

    // Function :: 유저의 자기소개 정보를 업데이트합니다.
    // Parameter :: Story 페이지의 주인의 아이디와 새로운 인트로 정보를 가져옵니다.
    UPDATE_userIntro(intro,userId) {
      return firestore.collection("users").doc(userId).update({
        userIntro : intro
      });
  },

    // Function :: 유저의 교육정보를 업데이트합니다.
    // Parameter :: 기존 교육정보, 새로 추가된 교육정보, Story 페이지 주인의 아이디를 가져옵니다.
    UPDATE_userEdu(edu,old,userId) {
      old.push(edu)
        return firestore.collection("users").doc(userId).update({
          userEducations : old
        });
    },

    // Function :: 유저의 경력정보 업데이트합니다.
    // Parameter :: 기존 경력정보, 새로 추가된 경력정보, Story 페이지 주인의 아이디를 가져옵니다.
    UPDATE_userCar(car,old,userId) {
      old.push(car)
        return firestore.collection("users").doc(userId).update({
          userCareers : old
        });
    },


  // -----------------------------------------------------------------

    // seulgi
    INSERT_Comment(comment, old, project_id) {
      var old = old
      old.comments.push(comment)
        return firestore.collection('projects').doc(project_id).update({
          comments : old.comments
        });
    },

    async info_Projects(id, title) {
      return firestore.collection('projects')
      .where("session_id","==",id)
      .where("projecttitle","==",title)
      .get().then((docSnapshots) => {
        return docSnapshots.docs.map((doc) => {
          let data = doc.data()
          // console.log(data.date)
          console.log(data)
          return data
        })
      })
    },

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
            userSkills: userSkills,
            userImage: userImage,
            userName: first_name + last_name,
            userIntro: userIntro,
            userCareers: userCareers,
            userEducations: userEducations,
            followerlist:[],
            followinglist:[]
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
          interests: interests,
          followerlist:[],
          followinglist:[]
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
        var user = result.user.email;
        alert(`페이스북 로그인 완료!, ${result.user.email}`);
        var answer = { user: user, result: true };
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
    },

// -----------------------------------------------------------------
//hyoya
  // Function :: 팔로우를 추가합니다.
  // Parameter :: 팔로잉을 당한사람, 현재 유저의 아이디,
  //              팔로잉 당하는 사람의 기존 팔로워 리스트,  현재 유저의 팔로잉 리스트를 가져옵니다.
  async follow(follow, user, followerlist, followinglist){
    followerlist.push(user);
    followinglist.push(follow);
    firestore.collection("users").doc(follow).update({
      followerlist : followerlist
    });
    firestore.collection("users").doc(user).update({
      followinglist : followinglist
    });
  },

  // Function :: 언팔로우합니다.
  // Parameter :: 팔로우 헸던 사람, 현재 유저의 아이디,
  //              팔로잉 당하는 사람의 기존 팔로워 리스트,  현재 유저의 팔로잉 리스트를 가져옵니다.
  async unfollow(follow, user, followerlist, followinglist){
    followerlist.splice(followerlist.indexOf(user),1);
    followinglist.splice(followinglist.indexOf(follow),1);
    firestore.collection("users").doc(follow).update({
      followerlist : followerlist
    });
    firestore.collection("users").doc(user).update({
      followinglist : followinglist
    });
  },

};
