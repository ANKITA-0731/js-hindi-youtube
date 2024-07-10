// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);

// let mycreatedDate = new Date(2024,0, 10);
// console.log(mycreatedDate.toDateString());

// let myCreatedDate = new Date(2024,0, 10, 5,4);
// console.log(myCreatedDate.toLocaleString());

let mycreatedDate = new Date("2024-06-10");
// console.log(mycreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));
