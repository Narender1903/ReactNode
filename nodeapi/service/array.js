'use strict';

/**
 *
 * purpose array join
 **/
exports.arrJoin = function() {
  const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
  
}

/**
 *
 * purpose array merge
 **/
 exports.arrMerge = function() {
  var array1 = ["Vijendra", "Singh"];
var array2 = ["Singh", "Shakya"];

console.log(array1.concat(array2));
  
}


/**
 *
 * purpose array copy
 **/
 exports.arrCopy = function() {
  let oldArray = [1, 2, 3, 4, 5];

  let newArray = oldArray.slice();
  
  console.log({newArray});
  
}


/**
 *
 * purpose array intersect
 **/
 exports.arrIntersect = function() {
  arrA=[1,3,4,5] ;
   arrB=[1,2,5,6,7];
  let intersection = arrA.filter(x => arrB.includes(x));
  
}


function checkAge(age) {
  return age > 18;
}
/**
 *
 * purpose array search
 * The find() method returns the value of the first element that passes a test.

The find() method executes a function for each array element.

The find() method returns undefined if no elements are found.

The find() method does not execute the function for empty elements.

The find() method does not change the original array.
 **/
 exports.arrSearch = function() {
  const ages = [3, 10, 18, 20];


return ages.find(checkAge);
  
}



