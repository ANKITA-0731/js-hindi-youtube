// console.log("A");
// console.log("N");
// console.log("K");
// console.log("I");
// console.log("T");
// console.log("A");


function sayMyName (){
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("I");
    console.log("T");
    console.log("A");
    
}

// sayMyName();

// function addTwoNumbers (number1, number2){
    // console.log(number1 + number2);
                                        // {    

addTwoNumbers(10,2);
addTwoNumbers(10,"2");
addTwoNumbers(10,null);


function addTwoNumbers (number1, number2)  {

    // let result = number1 + number2
    //  return result
    return number1 + number2
};
    
const result = addTwoNumbers(10,2);
// console.log("result: ", result);

function loginUserMessage(username = "sam"){

    if(username === undefined){
        console.log("please enter a username");
        return
    };

    return '${username} just Logged in'
};
    //  console.log(loginUserMessage("ankita")); 
    //  console.log(loginUserMessage("ankita")); 
 

   function calculatecartprice ( val1,val2,...num1){
        return num1                                //...rest of array
    }

// console.log(calculatecartprice(100,200,300));

const user = {
          username : "ankita",
          price :"999"

                } 

function handleobject(anyobject) {
    //    console.log('username is ${anyobject.username} and price is ${anyobject.price}');

}

// handleobject(user);
handleobject({
    username : "sam",
    price : 199
});

const myNewArray = [200,300,400,500];
function returnSecondValue(getArray){
    return getArray[1]

}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,400,500]));


