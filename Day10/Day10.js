//Challenge #10 - SmartParking


function checkCarSpot(spot, carType) {
  if (carType === "regular") {
    if (spot === "R") {
      return true
    }
  } else if (carType === "small") {
    if (spot === "S" || spot === "R") {
      return true
    }
  } else {
    if (spot === "S" || spot === "R" || spot === "M") {
      return true
    }
  }
  return false
}
const whereCanIPark = (spots, vehicle) => {
  let arr = false;
  spots.forEach((row, indexRow) => {
    row.forEach((spot, indexCol) => {
      const value = checkCarSpot(spot, vehicle)
      if (value === true) {
        arr = [indexCol, indexRow]
        return (arr)
      }
    })
    if (arr) {
      return (arr)
    }
  })
  return (arr)
}