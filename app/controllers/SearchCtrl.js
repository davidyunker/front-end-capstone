"use strict";


app.controller("SearchCtrl", function ($scope, AuthFactory, FirebaseFactory, FBCreds) {



let _uid = AuthFactory.getUid()


   $scope.userSearch = {
    "city" : "",
    "state" : "",
    "zip" : "",
    "uid" : _uid

  };




 $scope.loadBreweries = function() {
      console.log("loadBreweries has started!")
  let cityName = $scope.userSearch.city
  let creds = FBCreds
  let myKey = creds.breweryApiKey
  let stateName = $scope.userSearch.state
  let zipName = $scope.userSearch.zip
      FirebaseFactory.getBreweryByCity($scope.userSearch)
      FirebaseFactory.getBreweryByState($scope.userSearch)
      FirebaseFactory.getBreweryByZip($scope.userSearch)
        .then(function(){
          console.log("it worked!")
        })
  }
   $scope.enterKeyPressed = function(keyEvent) {
  if (keyEvent.which === 13)
    $scope.loadBreweries();
}


})

