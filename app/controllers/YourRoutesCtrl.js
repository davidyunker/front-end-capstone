"use strict";

app.controller("YourRoutesCtrl", function ($scope, $window, AuthFactory, FirebaseFactory, FBCreds, $http, $routeParams, $location) {


let _uid = AuthFactory.getUid()


 $scope.goToYourRoutes = () => {
      console.log("this is the userID", _uid)
      $location.url(`/yourroutes/${_uid}`);

  }

  $scope.loadYourRoutesToDom = () => {
    console.log("loadYourRoutesToDom is running")
    console.log("this is routeParams", $routeParams)
    FirebaseFactory.getYourPokeRoutes($routeParams)
    .then(function(result) {
        console.log(result)
        $scope.pokeRouteInfoList = result
    })
  }


   $scope.goToAllRoutes = () => {
    $location.url(`/allroutes`);
  };

     $scope.goToSearch = () => {
    $location.url(`/search`);
  };

$scope.routeEdit = (routeID) => {
console.log("routeEdit is running", routeID)
$location.url(`/saveroute/${routeID}`)
}


  $scope.routeDelete = (routeID) => {
    console.log("routeDelete is running", routeID)
    FirebaseFactory.deletePokeRoute(routeID)
      .then(function(result) {
        console.log("this is the result after delete", result)
        FirebaseFactory.getYourPokeRoutes($routeParams)
          .then(function(result) {
        console.log(result)
        $scope.pokeRouteInfoList = result
    })
      })
}

})
