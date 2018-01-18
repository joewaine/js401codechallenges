'use strict';

const engine = module.exports = {};

let car = 0;
let passengertotal = 0;


engine.passengerCount = function(obj){

if(typeof(obj) != 'object' || !obj) return null;

  car = obj;
  if(car.next === null) passengertotal = passengertotal + car.value;
  while(car.next){

   if(typeof(car.value) != 'number') return null;

     passengertotal = passengertotal + car.value;
     car = car.next;
     engine.passengerCount(car);
  }

if(car.next === null) return passengertotal;



}