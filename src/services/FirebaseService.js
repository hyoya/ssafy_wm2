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
}
