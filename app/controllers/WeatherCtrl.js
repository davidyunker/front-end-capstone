"use strict";

app.controller("WeatherCtrl", function ($scope, $window, AuthFactory, FirebaseFactory, FBCreds, $http, $routeParams, $location) {


$scope.weatherInfo = {
    city: "",
    state: "",
    location: "",
    weather: "",
    temp: "",
    feelslike: "",
    icon: ""
}

let _uid = AuthFactory.getUid()


 $scope.goToYourRoutes = () => {
      console.log("this is the userID", _uid)
      $location.url(`/yourroutes/${_uid}`);

  }

$scope.buttonClicked = false;


   $scope.goToAllRoutes = () => {
    $location.url(`/allroutes`);
  };

 $scope.loadWeatherInfo = function() {
      console.log("loadWeatherInfo has started!")
      FirebaseFactory.getWeatherInfo($scope.weatherInfo)
        .then(function(data){
            console.log("it worked!")
          console.log("data", data)
          $scope.weatherInfo.location = data.current_observation.display_location.full
          $scope.weatherInfo.weather = data.current_observation.weather
          $scope.weatherInfo.temp = data.current_observation.temp_f
          $scope.weatherInfo.feelslike = data.current_observation.feelslike_f
          $scope.weatherInfo.icon = data.current_observation.icon_url

        })
        .then(function() {
          console.log('TESTING THINGS', $scope.weatherInfo);
          $scope.buttonClicked = true;

      })
    }
})