const obj1 = {1:"a", 2:"e"}
const obj2 = {3:"i", 4:"o"}
const obj3 = {5:"u", 6:"vowel"}

const obj4 = {obj1, obj2, obj3}
//console.log(obj4);

// const obj5 = Object.assign(obj1, obj2, obj3)
//Object.asign used to marge multiple source objects in the target object
//The 1st object is target object and others are source object
//In this case obj1 is the target object and others are source object 
// console.log(obj5);
// console.log(obj1);
//After .assign target object(obj1) === obj5 , means obj1 is changed


//If we wnat to keep obj1 same as it is
const obj6 = Object.assign({}, obj1, obj2, obj3)
//Now the target object is {} and source objects are obj1,... ,obj3
// console.log(obj6);
// console.log(obj1);
//After Object.assign obj1 != obj6 , means obj1 is not changed


// Spread method
const obj7 = {...obj1, ...obj2, ...obj3}
//console.log(obj7);


// Objects in an array
const users = [

    {
        id: 1,
        email: "ak@gmail.com"
    },
    {
        id: 2,
        email: "rg@gmail.com"
    },
    {
        id: 3,
        email: "am@gmail.com"
    }

]
// console.log(users[1].id);
// console.log(users[1].email);


const newUser = new Object()

newUser.id = "9339"
newUser.name = "Kumkum"
newUser.isLoggedIn = true

console.log(newUser);

console.log(Object.keys(newUser));// output is in an array 
console.log(Object.values(newUser));
console.log(Object.entries(newUser));// output is in an array and each element also in an array

console.log(newUser.hasOwnProperty("isLoggedIn")); // it check if the propery present or not in the object







