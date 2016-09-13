"use strict";
// will pull in AuthFactory and register users

// will take $scope and $window. $window is like the window object.

//  this is how we will set the location.

//  and we need to inject AuthFactory

app.controller("LoginCtrl", function ($scope, $window, AuthFactory ) {
// need to create object to hold/bind to the values of the form
  $scope.account = {
    email: "",
    password: ""

  };

  $scope.register = () => {
    console.log("you clicked register");
    // grab method from AuthFactory
    AuthFactory.createUser({
      email: $scope.account.email,
      password: $scope.account.password
    })
    // pass in object
    // createUser returns a promise so we use a .then
    .then ((userData) => {
      console.log("newUser", userData);
      // sends them straight to login after registering
      $scope.login();
      // not defined yet
    }, (error) => {
      console.log(`Error creating user: ${error}`);
// in case there's an issue we did the error
    });
  };
// also going to login in folks with email and pwd
  $scope.login = () => {
    console.log("you clicked login");
    AuthFactory.loginUser($scope.account)
      .then( (data) => {
        if (data) {
          $window.location.href = "#/search";
        }else {
          $window.location.href = "#/login";
        }
        console.log("here's the data", data);
      }, (error) => {
        console.log("error loggin in", error);
      });
  };
});

