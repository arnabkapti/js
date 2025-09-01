const name = "Arnab Kapti"
 const number = 50

 console.log(name + number + " Number");

console.log(`Helow my name is ${name} and my number is ${number}`);

 
const gameName = new String("Clash Of Clans")
console.log(gameName);

console.log(gameName[3]);
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.indexOf("s"))
console.log(gameName.charAt(6))

const newString = gameName.substring(0,5) // substring consider any negative key value as zero
console.log(newString);

const anotherString = gameName.slice(-8,-5) // slice consider negative value to count from the end
console.log(anotherString);

const newStringOne = "   Arnab   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://arnab.com/kapti%20arnab"
console.log(url.replace("%20","_"));
console.log(url.includes("Rono"))

const bigString = "Arnab_Kapti_CSE_7th Sem"
console.log(bigString.split("_"));

