"use strict";

var app = angular.module("BeforeYouGoApp", ["ngRoute"])
.constant("FirebaseURL", "https://before-you-go.firebaseio.com");


let isAuth = (AuthFactory) => new Promise((resolve, reject) => {
    if (AuthFactory.isAuthenticated()) {
        console.log("Authenticated user. Go ahead");
        resolve();
    } else {
        console.log("Notauthenticated user. Go away.")
        reject();
    }
})

app.config(function($routeProvider) {
    $routeProvider.
        when("/", {
            templateUrl: "partials/login.html",
            controller: "LoginCtrl"
        }).
        when("/login", {
            templateUrl: "partials/login.html",
            controller: "LoginCtrl"
        }).
        // this stands for home
        when("/search", {
            templateUrl: "partials/search.html",
            controller: 'SearchCtrl'
        }).
         when("/saveroute/:routeid", {
            templateUrl: "partials/save-route.html",
            controller: 'SaveRouteCtrl'
        }).
        when("/yourroutes/:yourid", {
            templateUrl: "partials/your-routes.html",
            controller: 'YourRoutesCtrl'
        }).
        when("/allroutes", {
            templateUrl: "partials/all-routes.html",
            controller: 'AllRoutesCtrl'
        }).

        otherwise("/");
        // way to make sure they don't go anywhere else.
});

// what you do with the app runs. Takes an argument of an anon. function, going to pass in location provider and constant we just defined
app.run(($location, FBCreds) => {
    let creds = FBCreds;
    let authConfig = {
        apiKey: creds.key,
        authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);

});