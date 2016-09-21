"use strict";

app.controller("AllRoutesCtrl", function ($scope, $window, AuthFactory, FirebaseFactory, FBCreds, $http, $routeParams, $location) {

let _uid = AuthFactory.getUid()

   $scope.goToSearch = () => {
    $location.url(`/search`);
  };


 $scope.goToYourRoutes = () => {
      console.log("this is the userID", _uid)
      $location.url(`/yourroutes/${_uid}`);

  }

  $scope.loadAllRoutesToDom = () => {
    console.log("loadAllRoutesToDom is running")
    FirebaseFactory.getAllPokeRoutes()
    .then(function(result) {
        console.log(result)
        $scope.pokeRouteInfoList = result
    })
  }


    $scope.routeDelete = (routeID) => {
    console.log("routeDelete is running", routeID)
    FirebaseFactory.deletePokeRoute(routeID)
      .then(function(result) {
        FirebaseFactory.getAllPokeRoutes()
          .then(function(result) {
        console.log(result)
        $scope.pokeRouteInfoList = result
    })
      })
}
  $scope.routeEdit = (routeID) => {
  console.log("routeEdit is running", routeID)
$location.url(`/saveroute/${routeID}`)
}

  //   $scope.goToYourRoutes = () => {
  //   $location.url(`/yourroutes/:yourid`);
  // };
})