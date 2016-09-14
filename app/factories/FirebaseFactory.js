"use strict";


app.factory("FirebaseFactory", ($q, $http, FirebaseURL, FBCreds) => {



let getBreweryByCity = () => {
  console.log("getBreweryByCity is running")
    return $q ((resolve, reject) => {
      $http.get("http://api.brewerydb.com/v2/locations?locality=Nashville&hasimages=y&openToPublic=y&key=16c599713a76e335fcade9b5d1151785")
      .success((itemObject) => {
        resolve(itemObject);
        console.log("this is the Brewery by City ", itemObject);
      })
      .error((error) => {
        reject(error);
        console.log("error", error)
      });
    });
    };



let getBreweryByState = () => {
    return $q ((resolve, reject) => {
      $http.get(`http://api.brewerydb.com/v2/locations?locality={stateName}&hasimages=y&openToPublic=y&key={MyKey}`)
      .success((itemObject) => {
        resolve(itemObject);
        console.log("this is the Brewery By State", itemObject);
      })
      .error((error) => {
        reject(error);
        console.log("error", error)
      });
    });
    };
let getBreweryByZip = () => {
    return $q ((resolve, reject) => {
      $http.get(`http://api.brewerydb.com/v2/locations?locality={zipName}&hasimages=y&openToPublic=y&key={MyKey}`)
      .success((itemObject) => {
        resolve(itemObject);
        console.log("this is the brewery by ZIP", itemObject);
      })
      .error((error) => {
        reject(error);
        console.log("error", error)
      });
    });
    };

    return {getBreweryByCity}
  });

