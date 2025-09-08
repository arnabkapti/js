function sum(n1, n2) {
    console.log(n1+n2);   
}

const result = sum(8, 6)
console.log(result); // output is undefined because the function don,t have return value


function sum1(n1, n2) {
    // let res = n1 + n2
    // return res 
       //OR
    return n1 + n2
}

const result1 = sum1(8, 2)
console.log(result1); // output is (8+2)=10 
// result1 = 10 because the function have a return value (8+2) 



function login(username){
    if(!username){
        return `Please enter a name!!`
    }
    return `${username} is logged in.`
}

const message = login("Arnab")
console.log(message);


function calculate(val1, val2, ...val3){
    return val3
}
console.log(calculate(100, 6, 233, 98)); // output = [233, 98]


const user = {
    username: "Arnab Kapti",
    rollNo: 26900122020
}

function handelObject(anyobject){
    console.log(`User name is ${anyobject.username} and Roll Number is ${anyobject.rollNo}`); 
}

// handelObject(user)
handelObject({
    username: "Moupiya Roy",
    rollNo: 28900122032
})


const array = [100, 599, 75, 90, 652]

function return2ndValue(anyArray){
    return anyArray[1]
}
// console.log("2nd value of the array is", return2ndValue(array));
console.log("2nd value of the array is", return2ndValue([788, 98, 876, 981, 90]));
