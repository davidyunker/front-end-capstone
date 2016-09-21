"use strict";

app.controller('TopCtrl', function($scope, $location, $window, AuthFactory, FirebaseFactory) {

   $scope.logout = function () {
        AuthFactory.logoutUser()
        .then(function (data) {
            console.log(data)
            console.log("User logged out")
            $location.url(`/login`);

        })
    }

    $(document).ready(function(){
    $(".button-collapse").sideNav();
  });


});



