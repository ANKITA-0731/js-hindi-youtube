// most important topic 

// ++++++++++++++++++ OBJECTS ++++++++++++++++++++ 

// SINGLETON
// OBJECT CREATE

// Object literals

const mySym = Symbol("key1");

const  Jsuser = {
     
      name : "Ankita",
      "full name ": "Ankita Singh singhorl",
      [mySym]: "mykey1",
      age : 20,
      location : "Satna" ,
      email: "ankita@gmail.com",
      isLoggedIn : false,
      lastLoginDays : ["monday","saturday"],
                                             };

//      console.log(Jsuser.email);
//      console.log(Jsuser.age);

//      console.log(Jsuser["email"]);
//      console.log(Jsuser["full name "]);
//      console.log(Jsuser[mySym]);

     Jsuser.email = "ankita@gmail.com";
//      Object.freeze(Jsuser);
     Jsuser.email = "ankita@chatgpt.com";
//      console.log(Jsuser);

     Jsuser.greeting = function(){
       console.log("Hello JS user");
              }

              

              Jsuser.greetingTwo = function(){
                  console.log('Hello JS user, ${this.name}');
           
                         // console.log(Jsuser.greeting());
                         // console.log(Jsuser.greetingTwo());

                


