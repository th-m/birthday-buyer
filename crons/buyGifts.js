// import firebase from 'firebase'
var firebase = require('firebase');
const config = {
   apiKey: "AIzaSyAjSKA0Ti0_X4A5XQhcaVh68lu08waEniM",
   authDomain: "birthday-buyer.firebaseapp.com",
   databaseURL: "https://birthday-buyer.firebaseio.com",
   projectId: "birthday-buyer",
   storageBucket: "birthday-buyer.appspot.com",
   messagingSenderId: "917872359554"
 };

firebase.initializeApp(config)
const firebaseAuth = firebase.auth;
firebaseAuth().signInWithEmailAndPassword("buyer@bot.com", "buystuff").then(function(){
  const database = firebase.database();
  const formsInfo = database.ref('forms');
  formsInfo.on("value", gotData, errData);
  
  function gotData(data){
    console.log(data.val());
    let forms = data.val();
    let keys = Object.keys(forms);
    console.log(keys);
  }
  
  function errData(error) {
    console.log("Something went wrong.");
    console.log(error);
  }
  
  fetch('https://birthdaybuyer.herokuapp.com/').then(function(response) {
    return response.blob();
  }).then(function(myBlob) {
   console.log(myBlob);
  });
  
});
// export const ref = firebase.database().ref()

// setTimeout(function(){ alert("Hello"); }, 3000);
// const formsInfo = database.child('forms');
// const forms = formsInfo.val();
// formsInfo.orderFunction().queryFunction();
// const forms = formsInfo.orderByKey().limitToFirst(10);
// forms.on('value', snap =>{
//   console.log(snap);
// });
// console.log(forms);

// export const firebaseAuth = firebase.auth

