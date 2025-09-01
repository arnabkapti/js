// Dates

let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toJSON());
// console.log(myDate.getTimezoneOffset());

// console.log(typeof myDate);

//let myCreatedDate = new Date(2025, 1, 6)
// let myCreatedDate1 = new Date(2025, 1, 6, 2, 29, 0)
// let myCreatedDate2 = new Date("2025-09-01")
let myCreatedDate3 = new Date("09-01-2025")
// console.log(myCreatedDate.toString());
// console.log(myCreatedDate1.toLocaleString());
// console.log(myCreatedDate2.toLocaleString());
// console.log(myCreatedDate3.toLocaleString());


// let myTimeStamp = Date.now()

// console.log(myTimeStamp);

// console.log(myCreatedDate3.getTime());

// console.log(Math.floor(Date.now() / 1000))

let newDate = new Date()

// console.log(newDate.toLocaleTimeString());
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

// const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

// const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

// console.log(`Generated on: ${newDate.getFullYear()}, ${days[newDate.getDay()]}, ${newDate.getDate()} ${months[newDate.getMonth()]}; Time: ${newDate.toLocaleTimeString()}`);

let datetime = newDate.toLocaleString("default", {
    weekday: "long",
    month: "long",
    day: "2-digit"
})
console.log(datetime);



