const arr1 = ["Arnab", "Kapti", "Ujjal", "Bablu"]
const arr2 = ["Ranbir","Saddam", "Buddho", "Sachin"]
const arr3 = ["Jack", "Ogy", "Viru", "Patlu"]
const arr4 = ["Lock", "Mug", "Sun", "Moon"]

arr1.push(arr2) //push the arr2 in arr1 as a array
console.log(arr1);
console.log(arr1[4][2]); // print the value of arr1 index 4 array's index 2 value

const newArr = arr2.concat(arr3) // marge arr2 & arr3 and make a new array, but don't change arr2 and arr3
console.log(newArr);
console.log(arr2);
console.log(arr3);

// Spread method
const array = [...arr2, ...arr3, ...arr4] //spread arr2,arr3 and arr4 values and make a new array together

console.log(array);

function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));
  // Expected output: 6
  console.log(sum.apply(null, numbers));
  //The apply() method of Function instances calls this function with a given this value, and arguments provided as an array (or an array-like object).
  // Expected output: 6

  const number1 = [5, 6, 2, 3, 7];

    const max = Math.max.apply(null, number1);

    console.log(max);
    // Expected output: 7

    const min = Math.min.apply(null, number1);

    console.log(min);
    // Expected output: 2

  const anotherArr = [1,2,3,[4,5,5],7,8,[5,6,[8,9]]]

  const singleArr = anotherArr.flat(Infinity) // The maximum recursion depth Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

  console.log(singleArr);
  console.log(anotherArr);
  
console.log(Array.isArray("Arnab")) // check if "Arnab" is array or not
console.log(Array.from("Arnab")) // convert any string,object etc. to an array
console.log(Array.from({name: "Arnab"})) 
// print an empty array
// it needs to know which part (keys,values or both (entries)) you want to convert in array 
Solution
console.log(Object.keys({name: "Arnab"}))
console.log(Object.values({name: "Arnab"}))
console.log(Object.entries({name: "Arnab"}))

let a = 100
let b = 200
let c = 300

console.log(Array.of(a,b,c));
//A set of elements to include in the new array object.
//Returns a new array from a set of elements.
