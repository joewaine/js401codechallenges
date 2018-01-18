let values = [2, 56, 3, 41, 0, 4, 100, 23];

let arrayFindings = function(arr){
let array = arr;
let sum = array.reduce((previous, current) => current += previous);
let avg = sum / array.length;

return { highestValue: Math.max(...array), lowestValue: Math.min(...array), averageValue: avg}

}



arrayFindings(values);