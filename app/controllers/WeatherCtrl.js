"use strict";

app.controller("WeatherCtrl", function ($scope, $window, AuthFactory, FirebaseFactory, FBCreds, $http, $routeParams, $location, $route) {


$scope.weatherInfo = {
    city: "",
    state: "",
    location: "",
    weather: "",
    temp: "",
    feelslike: "",
    icon: "",
    hour: "",
    hourtemp: "",
    hourcondition: "",
    hourwx: "",
    hourfeels: "",
    hour2: "",
    hourtemp2: "",
    hourcondition2: "",
    hourwx2: "",
    hourfeels2: "",
    hour3: "",
    hourtemp3: "",
    hourcondition3: "",
    hourwx3: "",
    hourfeels3: ""
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

  $scope.reloadWeatherPage = () => {
  $route.reload();
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
          $scope.weatherInfo.hour = data.hourly_forecast[0].FCTTIME.civil
          $scope.weatherInfo.hourtemp = data.hourly_forecast[0].temp.english
          $scope.weatherInfo.hourcondition = data.hourly_forecast[0].condition
          $scope.weatherInfo.hourwx = data.hourly_forecast[0].wx
          $scope.weatherInfo.hourfeels = data.hourly_forecast[0].feelslike.english
          $scope.weatherInfo.hour2 = data.hourly_forecast[1].FCTTIME.civil
          $scope.weatherInfo.hourtemp2 = data.hourly_forecast[1].temp.english
          $scope.weatherInfo.hourcondition2 = data.hourly_forecast[1].condition
          $scope.weatherInfo.hourwx2 = data.hourly_forecast[1].wx
          $scope.weatherInfo.hourfeels2 = data.hourly_forecast[1].feelslike.english
          $scope.weatherInfo.hour3 = data.hourly_forecast[2].FCTTIME.civil
          $scope.weatherInfo.hourtemp3 = data.hourly_forecast[2].temp.english
          $scope.weatherInfo.hourcondition3 = data.hourly_forecast[2].condition
          $scope.weatherInfo.hourwx3 = data.hourly_forecast[2].wx
          $scope.weatherInfo.hourfeels3 = data.hourly_forecast[2].feelslike.english

        })
        .then(function() {
          console.log('TESTING THINGS', $scope.weatherInfo);
          $scope.buttonClicked = true;

      })
    }
})