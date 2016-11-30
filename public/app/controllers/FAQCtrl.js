"use strict";

app.controller("FAQCtrl", function ($scope, $window, AuthFactory, FirebaseFactory, FBCreds, $http, $routeParams, $location) {



   $scope.goToAllRoutes = () => {
    $location.url(`/allroutes`);
  };
})