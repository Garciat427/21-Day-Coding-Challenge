//Challenge #9 - Driving Mayor Daisy

const carPassing = (cars, speed) => {
  let car = {
    time : Date.now(),
    speed : speed
  }
   cars.push(car);
   return (cars);
}
