"use strict";

// added to .gitIgnore until we get this to work.

app.factory("FirebaseFactory", ($q, $http, FirebaseURL, FBCreds, $location) => {


let getPokeRouteInfo = (myKey) => {
  console.log("getPokeRouteInfo is running", myKey)
    return $q ((resolve, reject) => {
      $http.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${myKey.address1}&destinations=${myKey.address2}&mode=walking&key=${FBCreds.googleKey}`)
      .success((itemObject) => {
        resolve(itemObject);
        console.log("this is the Poke Route Info  ", itemObject.rows[0].elements[0].distance.text);
      })
      .error((error) => {
        reject(error);
        console.log("error", error)
      });
    });
    };
    return {getPokeRouteInfo}
  });
