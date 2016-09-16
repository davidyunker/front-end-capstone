"use strict";

app.controller("SaveRouteCtrl", function ($scope, $window, AuthFactory, FirebaseFactory, FBCreds, $http, $routeParams) {

  $scope.pokeRouteInfo = ""

  $scope.getRoute = () => {
    FirebaseFactory.getPokeRouteFromFB($routeParams)
    .then(function(result) {
      console.log(result)
      $scope.pokeRouteInfo = result
    })
  }
})

