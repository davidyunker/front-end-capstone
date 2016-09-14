"use strict";

var app = angular.module("DrinkingApp", ["ngRoute"])
.constant("FirebaseURL", "https://drinking-on-vacation.firebaseio.com/");


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
        when("/yourbreweries", {
            templateUrl: "partials/saved-breweries.html",
            controller: "YourBreweriesCtrl"
        }).
        when("/yourbreweries/view/:breweryId", {
            templateUrl: "partials/single-brewery.html",
            controller: "BreweryViewCtrl"

    // passing in a variable to stand in as a placeholder for any ID.
        }).
          when('/yourbreweries/edit/:breweryId', {
            templateUrl: 'partials/single-brewery-edit.html',
            controller: "BreweryEditCtrl"
        }).
        when('/allreviews', {
            templateUrl: 'partials/all-reviews.html',
            controller: "AllReviewsCtrl"
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