//Array

const myArray = [1, 2, 3, 4, 5]
const myNames = ["Arnab", "Rono", "Rajib"]

const arr = new Array("Akbar", 3, "Bablu")


//Array methods

myArray.push(99)
myArray.push(9)
myArray.pop()

myArray.unshift(4) // insert value in start
myArray.shift() // remove value from start

console.log(myArray.includes(99));
console.log(myArray.indexOf(99));

const newArr = myArray.join() // join all the array elements and create a new string


console.log(myArray);
console.log(newArr);
console.log(typeof newArr);

console.log("A ", myArray);

const a1 = myArray.slice(1, 3) // Don't change the original array
// make a new slice copy index 1 to index 2 (dont't take the max range)
console.log("New a1",a1)
console.log("A ", myArray);

console.log("B ", myArray);

const a2 = myArray.splice(1, 3)// Change the original array
// make a new array index 1 to index 3 (take the max range also)
console.log("new a2", a2)
console.log("New B ", myArray);
