"use strict";


app.controller("SearchCtrl", function ($scope, AuthFactory, FirebaseFactory, FBCreds) {



let _uid = AuthFactory.getUid()


   $scope.routeInfo = {
    "address1" : "",
    "address2" : "",
    "route" : "",
    "time": "",
    "pokestops": "",
    "gyms": "",
    "rare": "",
    "details": "",
    "uid" : _uid

  };




 $scope.loadRouteInfo = function() {
      console.log("loadRouteInfo has started!")
      FirebaseFactory.getRouteInfo($scope.routeInfo)
        .then(function(){
          console.log("it worked!")
        })
  }
   $scope.enterKeyPressed = function(keyEvent) {
  if (keyEvent.which === 13)
    $scope.loadBreweries();
}


})

