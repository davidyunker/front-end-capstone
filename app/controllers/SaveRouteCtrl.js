"use strict";

app.controller("SaveRouteCtrl", function ($scope, $window, AuthFactory, FirebaseFactory, FBCreds, $http, $routeParams, $location) {

  $scope.pokeRouteInfo = ""

  $scope.getRoute = () => {
    FirebaseFactory.getPokeRouteFromFB($routeParams)
      .then(function(result) {
      console.log(result)
      $scope.pokeRouteInfo = result
    })
  }


 $scope.savePokeRouteInfo = () => {
  console.log("savePokeRouteInfo is running. This is scope.... ", $scope.pokeRouteInfo)
  console.log("this is the route params", $routeParams)
  FirebaseFactory.patchPokeRouteAgain($scope.pokeRouteInfo, $routeParams)
    .then(function(result) {
      console.log("this is the result", result)
      console.log(result.uid)
      // $location.url(`/yourroutes/${result.uid}`);
    })
  }
})