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
var login_user; // 로그인 하면 email, 아니면 ''  처리
var url = document.location.href;

auth().onAuthStateChanged(function(user) {
  if (user) {
    login_user = user.email
    // console.log(login_user)
  } else {
    login_user = '익명'
  }

  // firestore.collection('weblog').add({
  //   login_user,
  //   url,
  //   date: firebase.firestore.FieldValue.serverTimestamp()
  // })

})

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

    // Function :: 특정 프로젝트를 찾는 것입니다. ( seulgi )
    // Parameter :: 프로젝트 id를 받으면, 이에 해당하는 프로젝트를 검색합니다.
    async SELECT_Project(id) {
      return firestore.collection('projects')
      .doc(id).get().then((docSnapshots) => {
          let data = docSnapshots.data()
          // console.log(data)
          return data
      })
    },

    // Function :: 특정 프로젝트의 댓글들을 찾는 것입니다. ( seulgi )
    // Parameter :: 프로젝트 id를 받으면, 해당 프로젝트에 속한 댓글들을 검색합니다.
    async SELECT_Comments(id) {
      return firestore.collection('projects')
      .doc(id).get().then((docSnapshots) => {
          let data = docSnapshots.data().comments
          // console.log(data)
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

  // Function :: 유저의 기술 정보를 업데이트합니다.
  // Parameter :: Story 페이지의 주인의 아이디와 새로운 기술 정보를 가져옵니다.
    UPDATE_userSkill(skill,userId) {
      return firestore.collection("users").doc(userId).update({
        userSkills : skill
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
    UPDATE_userImage(image,userId) {
      return firestore.collection("users").doc(userId).update({
        userImage : image
      });
    },

    DELETE_userImage(userId) {
      firestore.collection("users").doc(userId).update({
          userImage : ""
      });
    },


    UPDATE_userAddon(userId,toggleView) {
      firestore.collection("user_addon").doc(userId).update({
        toggleView : toggleView
      });
    },

    async SELECT_userAddon(userId) {
      return firestore.collection("user_addon").doc(userId).get().then((docSnapshots) => {
          let data = docSnapshots.data().toggleView
          return data
      });
    },


  // -----------------------------------------------------------------

  // seulgi's Function

    // Function :: 댓글을 프로젝트 안의 댓글들 이라는 요소에 추가합니다.
    // Parameter :: comment : 댓글의 텍스트 , old : 프로젝트의 댓글리스트 구버전 , project_id : 프로젝트의 id
    INSERT_Comment(comment, old, project_id) {
      old.comments.push(comment)
        return firestore.collection('projects').doc(project_id).update({
          comments : old.comments
        });
    },

    UPDATE_Project(data, old, project_id) {
      console.log(data, 'data입니다.')
      console.log(old, 'old 입니다..')
      old.projecttitle = data.projecttitle
      old.projectdescription = data.projectdescription
      old.projectterm = data.projectterm
      old.projectcontent = data.projectcontent
      old.projecttech = data.projecttech
      old.projectimage = data.projectimage
      old.projectrank = data.projectrank
      alert('수정이 완료되었습니다.')
      return firestore.collection('projects').doc(project_id).update({
        projecttitle : old.projecttitle,
        projectdescription : old.projectdescription,
        projectterm : old.projectterm,
        projectcontent : old.projectcontent,
        projecttech : old.projecttech,
        projectimage : old.projectimage,
        projectrank : old.projectrank,
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

  async SELECT_ProjectsByPcode(pcode) {
    return firestore.collection('projects').doc(pcode).get()
    .then(docSnapshots => {
        //console.log(docSnapshots.data(), '맞냐??')
        return docSnapshots.data()
    });
  },

};
