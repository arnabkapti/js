const user = {
    username: "Arnab",
    rollNo: 26,

    message: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
// console.log(user);
// console.log(user.rollNo);
user.message()
user.username = "Moupiya"
user.message()

console.log(this);


function one(){
    let username = "Arnab"
    console.log(this);  // this refers to the global object (window in browsers, global in Node.js).
    console.log(this.username); // undefined
}
one() // undefined
// this does't work in function
// this works in object

const two = function(){
    let username = "Arnab"
   // console.log(this);  // this refers to the global object (window in browsers, global in Node.js).
    console.log(this.username); // undefined
}
two()

const three = ()=> {
    let username = "Arnab"
    //console.log(this); // {}  (empty object in Node’s module scope)
    console.log(this.username); //undefined
}
three()

//Explicit Return
const addTow = (n1, n2) => {
    return n1 + n2   // must use return
}
console.log(addTow(5,9));


//Implicit Return
//const addThree = (n1, n2, n3) => n1 + n2 +n3
                //OR
const addThree = (n1, n2, n3) => (n1 + n2 +n3)
console.log(addThree(5,9,1));


// Wrong ❌ (JavaScript thinks {} is a block)
const getUser = () => { username: "Arnab" };

console.log(getUser());
// Output: undefined

// Correct ✅
const getUser1 = () => ({ username: "Arnab" });

console.log(getUser1()); // { username: "Arnab" }
