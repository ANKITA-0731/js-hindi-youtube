// primitive

// 7 types : string,number,Boolean,null,undefined,symbol,BigInt


const score = 100
const scorevalue = 100.3
const isLoggedIn = false
const outsideTemp = null
let useremail;

const id = Symbol('123');
const anotherid = Symbol('123');
// console.log(id === anotherid);

const BigInt = 345672864519n


// reference type(non primitive)

// array,objects,functions

const heroes =  ["shaktimaan","salmaan","shahrukh"];

let myObj = {
    name: "ankita",
    age: 22, 
};

const myFunction = function(){
//    console.log("Hello world");
};


// console.log(typeof Bignumber);
// console.log(typeof outsideTemp);
// console.log(typeof scorevalue);
// console.log(typeof anotherid);
// console.log(typeof Myfunction);
// console.log(typeof array);
// console.log(typeof Object);
// console.log(typeof string);
// console.log(typeof undefined);
// console.log(typeof number);
// console.log(typeof Bignumber);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(primitive)-used,heap(non-primitive)-used

let myyoutube = "ankitasinghthakur"
let anothername = myyoutube
anothername = "chai aur code"
console.log(myyoutube);
console.log(anothername);


let userOne =  {
    email:  "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "ankita@google.com"

console.log(userOne.email);
console.log(userTwo.email);

