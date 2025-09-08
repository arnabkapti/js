let a = 300
if(true){
    let a = 10
    const b = 59
    // console.log("Inner a: ", a);
}
// console.log("Outer a: ",a);
// console.log(b);


function one(){
    const username = "kapti"

    function two(){
        const web = "TiKap"
        console.log(username);
    }
    // console.log(web);
    two()
}
// one()


if (true) {
    const username = "Arnab"
    if (username === "Arnab") {
        const web = " kaptiAI"
        console.log(username + web); 
    }
    // console.log(web);  
}
// console.log(username);


addOne(6)               // This is valid 
function addOne(num) {
    return num + 1
}


addTwo(8) // this is invalid(Cannot access 'addTwo' before initialization)
const addTwo = function(num) {
    return num + 2
}
