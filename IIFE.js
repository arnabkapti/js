// Immediately Invoked Function Expressions (IIFE)

// Avoid polluting the global scope
// Variables inside IIFE live only in its own scope.
// Run code immediately (like initialization).
// Create private variables.

(function one(){        // named IIFE
    console.log("Hi, I am Arnab");
})();    

((year)=>{
    console.log(`I am a CSE student(${year})`);
})("2026");   // ; is mandatory for multiple IIFE