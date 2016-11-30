"use strict";

app.factory("AuthFactory", function ($q) {
    let _uid = null;
    let getUid = function () {
        return _uid
    }


    firebase.auth().onAuthStateChanged(function (user) {
        console.log("onAuthStateChanged running")
        _uid = user.uid
        console.log("uid in onAuthStateChanged", _uid)
    })

let provider = new firebase.auth.GoogleAuthProvider();

function logInGoogle() {
  return firebase.auth().signInWithPopup(provider);
}


  let createUser = function(userObj) {
    return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
      .catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;

      });


    // passing object that will contain email and password

    // we're going to return a promise. but we don't have to write it ourselves.
    // Firebase methods in new Firebase return promises. Going to use auth method quite a bit. Firebase universally available because of the script tag.
  };
  let loginUser = function (userObj) {
    return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
      .catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log("errorcode", errorCode, "errorMessage", errorMessage);

      });
  };

  let logoutUser = function () {
    console.log("logoutUser is working!")
    return firebase.auth().signOut();
  };

  let isAuthenticated = function() {
    return (firebase.auth().currentUser) ? true : false;
    // shortened version of if/lese the ? checks for the veracity. True the first value. Second the other value after the : Ternary(sp?)
  };

    return {createUser, loginUser, logoutUser, isAuthenticated, getUid, logInGoogle};
});