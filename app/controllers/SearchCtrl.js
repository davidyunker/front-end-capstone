"use strict";


app.controller("SearchCtrl", function ($scope, AuthFactory, FirebaseFactory, FBCreds, $location) {



let _uid = AuthFactory.getUid()


   $scope.pokeRouteInfo = {
    name: "",
    address1: "",
    address2: "",
    routeLengthMiles: "",
    routeLengthKM: "",
    time: "",
    pokestops: "",
    gyms: "",
    rare: "",
    details: "",
    uid: _uid
  };




 $scope.loadPokeRouteInfo = function() {
      console.log("loadPokeRouteInfo has started!")
      FirebaseFactory.getPokeRouteInfo($scope.pokeRouteInfo)
        .then(function(data){
          console.log("it worked!")
          console.log("data", data)
          $scope.pokeRouteInfo.address1 = data.destination_addresses[0]
          $scope.pokeRouteInfo.address2 = data.origin_addresses[0]
          $scope.pokeRouteInfo.routeLengthMiles = data.rows[0].elements[0].distance.text
          $scope.pokeRouteInfo.routeLengthKM = data.rows[0].elements[0].distance.value
          $scope.pokeRouteInfo.time = data.rows[0].elements[0].duration.text

          console.log('TESTING THINGS', $scope.pokeRouteInfo);

        })
  }
   $scope.enterKeyPressed = function(keyEvent) {
  if (keyEvent.which === 13)
    $scope.loadBreweries();
}


})

