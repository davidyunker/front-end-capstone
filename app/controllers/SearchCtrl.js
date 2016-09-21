"use strict";


app.controller("SearchCtrl", function ($scope, AuthFactory, FirebaseFactory, FBCreds, $location) {



let _uid = AuthFactory.getUid()



   $scope.pokeRouteInfo = {
    name: "",
    address1: "",
    address2: "",
    routeLengthKM: "",
    time: "",
    pokestops: "",
    gyms: "",
    rare: "",
    rarepokemonimg: "",
    details: "",
    routeid: "",
    uid: _uid
  };



  $scope.goToYourRoutes = () => {
      console.log("this is the userID", _uid)
      $location.url(`/yourroutes/${_uid}`);

  }



 $scope.loadPokeRouteInfo = function() {
      console.log("loadPokeRouteInfo has started!")
      FirebaseFactory.getPokeRouteInfo($scope.pokeRouteInfo)
        .then(function(data){
          // console.log("it worked!")
          // console.log("data", data)
          $scope.pokeRouteInfo.address1 = data.origin_addresses[0]
          $scope.pokeRouteInfo.address2 = data.destination_addresses[0]
          $scope.pokeRouteInfo.routeLengthKM = data.rows[0].elements[0].distance.text
          $scope.pokeRouteInfo.time = data.rows[0].elements[0].duration.text


          })
        .then(function() {
          console.log('TESTING THINGS', $scope.pokeRouteInfo);
          FirebaseFactory.postPokeRoute($scope.pokeRouteInfo)
           .then(function(result) {
            // console.log(result);
            $scope.pokeRouteInfo.routeid = result.name
            console.log('TESTING MORE THINGS', $scope.pokeRouteInfo)
          FirebaseFactory.patchPokeRoute($scope.pokeRouteInfo, $scope.pokeRouteInfo.routeid)
            console.log($scope.pokeRouteInfo.routeid)
             let route = $scope.pokeRouteInfo.routeid


            $location.url(`/saveroute/${route}`);
        })
        })

  }


 $scope.goToAllRoutes = () => {
    $location.url(`/allroutes`);
  };


   $scope.enterKeyPressed = function(keyEvent) {
  if (keyEvent.which === 13)
    $scope.loadPokeRouteInfo();
}

})

