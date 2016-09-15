"use strict";


app.factory("FirebaseFactory", ($q, $http, FirebaseURL, FBCreds) => {



let getRouteInfo = () => {
  console.log("getRouteInfo is running")
    return $q ((resolve, reject) => {
      $http.get("")
      .success((itemObject) => {
        resolve(itemObject);
        console.log("this is the Route Info  ", itemObject);
      })
      .error((error) => {
        reject(error);
        console.log("error", error)
      });
    });
    };





    return {getRouteInfo}
  });

