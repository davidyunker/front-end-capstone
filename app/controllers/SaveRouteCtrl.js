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


   $scope.goToAllRoutes = () => {
    $location.url(`/allroutes`);
  };

  //   $scope.goToYourRoutes = () => {
  //   $location.url(`/yourroutes/:yourid`);
  // };

 $scope.enterKeyPressed = function(keyEvent) {
  if (keyEvent.which === 13)
    $scope.savePokeRouteInfo();
}

 $scope.savePokeRouteInfo = () => {
  console.log("savePokeRouteInfo is running. This is scope.... ", $scope.pokeRouteInfo)
  console.log("this is the route params", $routeParams)
  $scope.pokeRouteInfo.routeid = $routeParams.routeid
  FirebaseFactory.patchPokeRouteAgain($scope.pokeRouteInfo, $routeParams)
    .then(function(result) {
      console.log("this is the result", result)
      console.log("this is the result uid", result.uid)
      $location.url(`/yourroutes/${result.uid}`);
    })
  }
})


