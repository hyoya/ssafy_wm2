/*
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

var login_user = '임시로 존재합니까?'

firebase.auth().onAuthStateChanged(function(user) {
if (user) {
  // User is signed in.
  var displayName = user.displayName;
  var email = user.email;
  var emailVerified = user.emailVerified;
  var photoURL = user.photoURL;
  var isAnonymous = user.isAnonymous;
  var uid = user.uid;
  var providerData = user.providerData;
  // ...
} else {
  // User is signed out.
  // ...
}
});

export default{
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
        login_user = id
        // console.log(login_user, '이걸로 저장됐나?')
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
}
*/
