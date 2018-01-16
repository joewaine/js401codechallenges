'use strict';

const gobig = module.exports = {};

gobig.analyze = function(array){
    if(array != null){
        if(!array.some(isNaN)){
            if(array.length < 3){
              return null;
            }else{
                function sort(a,b) {
                  return a - b;
                }
                let arr = array.sort(sort);
                return {highestInArray: arr[arr.length - 1], secondHighestInArray: arr[arr.length - 2]};
            }
        }else{
          return null;
        }
    }else{
        return null;
    }
}
