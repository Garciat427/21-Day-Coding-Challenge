//Challenge #5 - Voting Station Calculation
const chooseStations = (stations) => {
  let goodLocations = [];
  function checkCapacity(capacity){
    if (capacity >= 20) {
      return true;
    } else {
      return false;
    }
  }
  
  function checkVenueType(type){
    if (type === "school" || type === "community centre") {
      return true;
    } else {
      return false;
    }
  }
  
  stations.forEach(function(element){
    if (checkCapacity(element[1]) && checkVenueType(element[2])){
      goodLocations.push(element[0]);
    }
  })
  return goodLocations;
}