//Destructuring for array

const arr = [10, 20, 30];

// Basic
const [a, b, c] = arr;        // a=10, b=20, c=30

// Skip items
const [first, , third] = arr; // first=10, third=30

// Rest (the “everything-else”)
const [head, ...tail] = arr;  // head=10, tail=[20, 30]

// Defaults (used only when the value is === undefined)
const [x=1, y=2, z=3] = [10]; // x=10, y=2, z=3

// Swap variables without a temp
let p = 5, q = 9;
[p, q] = [q, p];              // p=9, q=5


// Notes
// Order matters for arrays.
// The ...rest must be last and used once.


//Destructuring for Object

const user = {
    name: "Asha",
    age: 21,
    address: { city: "Kolkata", zip: "700001" }
  };
  
  // Basic (keys must match)
  const { name, age } = user;              // name="Asha", age=21
  
  // Rename variables
  const { name: fullName } = user;         // fullName="Asha"
  
  // Defaults (only if the property is undefined)
  const { role = "user" } = user;          // role="user"
  
  // Rest (collect remaining properties into an object)
  const { age: years, ...others } = user;
  // years=21, others={ name:"Asha", address:{...} }
  
  // Nested destructuring
  const { address: { city, zip } } = user; // city="Kolkata", zip="700001"
  
  // Nested with safe default (if address might be missing)
  const { address: { area } = {} } = user; // area=undefined (no crash)


//   Notes
//   Key names (not order) matter for objects.
//   role = "user" applies only if user.role === undefined (not when it’s null).


//Computed property names (dynamic keys)
const settings = { theme: "dark", lang: "en" };
const key = "theme";

const { [key]: currentTheme } = settings; // currentTheme="dark"


//*** Destructuring in function parameters
//*** Destructuring return values
//*** Destructuring in loops  ... Learn in detail later


//Destructuring for object practice

const course = {
    coursename: "Full JS",
    price: "499",
    creator:"Arnab"
}

//console.log(course.price);

const {price} = course
console.log(price);

const {creator:instractor} = course
console.log(instractor);


//JSON
    // {
    //     "name": "Arnab",
    //     "coursename": "Full JS",
    //     "price": "499"
    // }

    // [
    //     {},
    //     {},
    //     {},
    //     {}
    // ]

