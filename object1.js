// Singleton
// Object.create
//A Singleton in JavaScript is just an object that is created only once and is shared everywhere in your program.
//You create it one time.
// If you try to create it again, you still get the same object.
//Useful when you need only one instance of something (like a database connection, settings, or a logger).

const newUser = new Object()

newUser.id = "9339"
newUser.name = "Kumkum"
newUser.isLoggedIn = true

// console.log(newUser);

const vipUser = {
  email: "vip@google.com",
  fullName: {
    firstName: "Arnab",
    middleName: "Chandra",
    lastName: "Kapti"
  }
}

console.log(vipUser.fullName.middleName);


const person = {
    isHuman: false,
    printIntroduction() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
  };
  
  const me = Object.create(person);
  
  me.name = "Arnab"; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // Inherited properties can be overwritten
  
  // me.printIntroduction();
  //Expected output: "My name is Matthew. Am I human? true"



  // Object literals
  const sym1 = Symbol();
  const sym2 = Symbol("foo");
  const sym3 = Symbol("foo");

  //Symbol("foo") === Symbol("foo"); // false because Each time you call Symbol("foo"), it creates a brand new unique symbol.


  const mySymbol = Symbol()

  const user = {
    name: "Arnab Kapti",
    "My Village": "Buranpara",
    [mySymbol]: "TiKap",
    age:20,
    email: "arnab@g.com",
    phone: 8910114490,
    isLoggedIn: true,
    lastLoginDays: ["Sunday","Wednesday"],
    edu:{
        btech:"2026",
        dip:"2022",
        hs:"2019",
        mp:"2017"
    }
  }


  // console.log(user.email);
  // console.log(user["email"]);
  // both are correct

  //console.log(user.My Village); // but this is incorrect
  // console.log(user["My Village"]); // this is correct

  // console.log(user[mySymbol]); // this is the process to print a symbol element

  //add any new element in the object
  user.message1 = "Congratulations!!"

  user.message2 = function(){
    console.log("Welcome!!");
  }

  user.message3 = function(){
    return `Thank you, ${this.name}.`
    
  }


  //change the value of any elements in the object
  user.email = "arnabkapti@gmail.com"

  Object.freeze(user)
  user.email = "sayan@gmail.com"
  user["My Village"] = "Bainchigram"
  user[mySymbol] = "GS Sayan"

  // console.log(user);
  // console.log(user.message2());//After finishing, the function has no return value, so it returns undefined also
  //soluion
  // user.message2()
  
  // console.log(user.message3());
  
  
  



  