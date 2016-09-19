"use strict";

app.controller("AllRoutesCtrl", function ($scope, $window, AuthFactory, FirebaseFactory, FBCreds, $http, $routeParams, $location) {


  $scope.loadAllRoutesToDom = () => {
    console.log("loadAllRoutesToDom is running")
    FirebaseFactory.getAllPokeRoutes()
    .then(function(result) {
        console.log(result)
        $scope.pokeRouteInfoList = result
    })
  }
})