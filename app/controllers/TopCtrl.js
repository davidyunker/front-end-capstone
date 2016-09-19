"use strict";

app.controller('TopCtrl', function($scope, $location, $window, AuthFactory) {

   $scope.logout = function () {
        AuthFactory.logoutUser()
        .then(function (data) {
            console.log("User logged out")
            $location.url(`/login`);

        })
    }

});