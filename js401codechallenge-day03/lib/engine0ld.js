var train = {
  value: 1,
    next: {
      value: 2,
        next : {
        value: 2,
        next: null
        }
    }
};


let car = 0;
let passengertotal = 0;

let passengerCount = function(obj){
  car = obj

  if(car.next === null){
    console.log(car.value);
      passengertotal = passengertotal + car.value;
      console.log(passengertotal);
  }
  while(car.next){
     console.log(car.value);
     passengertotal = passengertotal + car.value;
     car = car.next;
     passengerCount(car);
  }

}

passengerCount(train);
