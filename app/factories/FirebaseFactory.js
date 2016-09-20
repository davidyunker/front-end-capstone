"use strict";

// added to .gitIgnore until we get this to work.

app.factory("FirebaseFactory", ($q, $http, FirebaseURL, FBCreds, $location, $routeParams) => {

  let currentRouteID = "";


let getPokeRouteInfo = (myKey) => {
    return $q ((resolve, reject) => {
      $http.get(`https://maps.googleapis.com/maps/api/distancematrix/json?&origins=${myKey.address1}&destinations=${myKey.address2}&mode=walking&key=${FBCreds.googleKey}`)
      .success((itemObject) => {
        resolve(itemObject);
      })
      .error((error) => {
        reject(error);
        console.log("error", error)
      });
    });
    };


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



let patchPokeRoute = (routeObj, routeID) => {
  console.log("patchPokeRoute is running", routeID)
    return $q((resolve, reject) => {
       $http.put(`${FirebaseURL}/pokeroutes/${routeID}.json`,
        JSON.stringify(routeObj))
        .success((ObjFromFirebase) => {
          resolve(ObjFromFirebase);
        })
        .error ((error) => {
          reject(error);
    })
    })


}

let patchPokeRouteAgain = (routeObj, routeID) => {
  console.log("patchPokeRoute is running", routeID)
    return $q((resolve, reject) => {

       $http.put(`${FirebaseURL}/pokeroutes/${routeID.routeid}.json`,
        JSON.stringify(routeObj))
        .success((ObjFromFirebase) => {
          resolve(ObjFromFirebase);
        })
        .error ((error) => {
          reject(error);
    })
    })


}


let getPokeRouteFromFB = (currentRouteID) => {
  console.log("getPokeRouteFromFB is running", currentRouteID.routeid)
  return $q((resolve, reject) => {
       $http.get(`${FirebaseURL}/pokeroutes/${currentRouteID.routeid}.json`)
       .success((ObjFromFirebase) => {
        resolve(ObjFromFirebase);
       })
       .error ((error) => {
        reject(error);
       })
     })
}

let getYourPokeRoutes = (yourID) => {
  console.log("getYourPokeRoutes is running", yourID)
  return $q((resolve, reject) => {
  console.log("getYourPokeRoutes is running", yourID)
    $http.get(`${FirebaseURL}/pokeroutes.json?orderBy="uid"&equalTo="${yourID.yourid}"`)
    .success((ObjFromFirebase) => {
    resolve(ObjFromFirebase);
  })
  })

}

let getAllPokeRoutes = () => {
  return $q((resolve, reject) => {
    $http.get(`${FirebaseURL}/pokeroutes.json`)
    .success((ObjFromFirebase) => {
    resolve(ObjFromFirebase);
  })
  })

}


let deletePokeRoute = (routeID) => {
    console.log("deletePokeRoute is running", routeID)
    return $q((resolve, reject) => {
    $http.delete(`${FirebaseURL}/pokeroutes/${routeID}.json`)
    .success((ObjFromFirebase) => {
      console.log("this is the ObjFromFirebase", ObjFromFirebase)
    resolve(ObjFromFirebase);
  })
  })
}




let getWeatherInfo = (myKey) => {
    return $q ((resolve, reject) => {
      $http.get(`http://api.wunderground.com/api/${FBCreds.weatherKey}/conditions/q/${myKey.state}/${myKey.city}.json`)
      .success((itemObject) => {
        resolve(itemObject);
      })
      .error((error) => {
        reject(error);
        console.log("error", error)
      });
    });
    };


    return {getPokeRouteInfo, postPokeRoute, getPokeRouteFromFB, patchPokeRoute, patchPokeRouteAgain, getYourPokeRoutes, getAllPokeRoutes, deletePokeRoute, getWeatherInfo}
  });



