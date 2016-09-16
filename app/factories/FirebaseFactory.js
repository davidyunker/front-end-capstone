"use strict";

// added to .gitIgnore until we get this to work.

app.factory("FirebaseFactory", ($q, $http, FirebaseURL, FBCreds, $location) => {

  let currentRouteID = "";


let getPokeRouteInfo = (myKey) => {
    return $q ((resolve, reject) => {
      $http.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${myKey.address1}&destinations=${myKey.address2}&mode=walking&key=${FBCreds.googleKey}`)
      .success((itemObject) => {
        resolve(itemObject);
      })
      .error((error) => {
        reject(error);
        console.log("error", error)
      });
    });
    };


// let getCurrentRouteID = () => {
//   return currentRouteID
// }

let postPokeRoute = (routeObj) => {
  console.log("postPokeRoute is running", routeObj)
    return $q((resolve, reject) => {
       $http.post(`${FirebaseURL}/pokeroutes.json`,
        JSON.stringify(routeObj))
        .success((ObjFromFirebase) => {
          console.log(ObjFromFirebase);
          currentRouteID = ObjFromFirebase.name;
          console.log("I'M THE FIREBASE ID I CAN HELP YOU", currentRouteID)
          resolve(ObjFromFirebase);
        })
        .error ((error) => {
          reject(error);
    })
    })


}



let patchPokeRoute = (routeObj, currentRouteID) => {
  console.log("patchPokeRoute is running", currentRouteID)
    return $q((resolve, reject) => {
       $http.put(`${FirebaseURL}/pokeroutes/${currentRouteID}.json`,
        JSON.stringify(routeObj))
        .success((ObjFromFirebase) => {
          console.log(ObjFromFirebase);
          // currentRouteID = ObjFromFirebase.name;
          console.log(currentRouteID)
          resolve(ObjFromFirebase);
        })
        .error ((error) => {
          reject(error);
    })
    })


}


let getPokeRouteFromFB = (currentRouteID) => {
  console.log("getPokeRouteFromFB is running", currentRouteID)
  return $q((resolve, reject) => {
       $http.get(`${FirebaseURL}/pokeroutes/${currentRouteID}.json`)
       .success((ObjFromFirebase) => {
        // console.log(ObjFromFirebase)
        resolve(ObjFromFirebase);
       })
       .error ((error) => {
        reject(error);
       })
     })
}
    return {getPokeRouteInfo, postPokeRoute, getPokeRouteFromFB, patchPokeRoute}
  });



