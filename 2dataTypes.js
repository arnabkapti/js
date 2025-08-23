"use strict" // treat all js codes as new version

//alert( 5+7 )  we are using node.js, not browser

let name = "Arnab"
let age = 25
let isLogedIn = true


// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => let cityName;
// symbol => unique

// object

console.log(typeof age);
console.log(typeof undefined); // undefined
console.log(typeof null); // object


/* There are two types of datatype
1. Primitive [call by value]
 7Types :- String, Number, Boolean, null, undefined, Symbol, BigInt */

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

/* 2.Non Primitive (Reference) [call by reference]
   Array, Functions, Objects */

   const array = ["Arnab", "56", "Sagar"];

   let object = {
    name: "Arnab",
    age: 25,
    city:"Kalna",
   }

   const myFunction = function(){
    console.log("Arnab");
   }

   