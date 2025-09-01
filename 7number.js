const score = 200
console.log(score);

const balance = new Number(300)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 167.8778

console.log(otherNumber.toPrecision(4));

const hundreds = 10000000
console.log(hundreds.toLocaleString("en-IN"));
console.log(hundreds.toLocaleString());

//---------------------------- Math -------------------------

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(6.7));
console.log(Math.ceil(8.1));
console.log(Math.floor(8.7));
console.log(Math.min(6, 3, 9, 8, 1));
console.log(Math.max(6, 3, 9, 8, 1));


console.log(Math.random()); // value = 0 to <1 any random value
console.log(Math.random() * 10); // value = 0 to <10 any random value
console.log(Math.floor(Math.random() * 10) + 1 ); // value = 1 to <10 any random value

const min = 10
const max = 20

console.log(Math.floor(Math.random() *(max - min)) + min ); 

// OR

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const value = getRandomArbitrary(min,max);
console.log(value);



function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(10));