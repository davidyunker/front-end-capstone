"use strict";

app.controller("YourRoutesCtrl", function ($scope, $window, AuthFactory, FirebaseFactory, FBCreds, $http, $routeParams, $location) {


  $scope.loadYourRoutesToDom = () => {
    console.log("loadYourRoutesToDom is running")
    console.log("this is routeParams", $routeParams)
    FirebaseFactory.getYourPokeRoutes($routeParams)
    .then(function(result) {
        console.log(result)
        $scope.pokeRouteInfoList = result
    })
  }
})