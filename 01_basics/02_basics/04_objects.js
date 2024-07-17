// singleton

// const tinderuser = new Object()

const tinderuser = {}

tinderuser.id ="123abc"
tinderuser.name = "sam"
tinderuser.IsLoggedIn = false

// console.log(tinderuser);


const regularuser = {
        email: "ankita@yshoo.com",
        fullname :{
            userfullname:{
                firstname : "Ankita",
                lastname :  "Singhrol",
            }
        }
    }


    // console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

   
// const obj3 = {obj1 ,obj2};

//  const obj3 = Object.assign({} ,obj1 , obj2,  obj4 );

const obj3 ={...obj1, ...obj2}


// console.log(obj3);

const users = [
   {
       id : "1",
       gamil : "yur@gmail.com",

   },
   { 
   id : "1",
   gamil : "yur@gmail.com",

   },

];



users[1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('IsLoggedIn'));
 
const course = {
       coursename : "js in hindi",
       price : "999",
       courseInstructor : "hitesh",
};

// course.courseInstructor

const {courseInstructor: Instructor} = course
// console.log(courseInstructor);

// console.log(Instructor);


// jSON

// {
//     "name" : "ankita",
//     "coursename" : "js in hindi",
//     "price": "free"
// }





















