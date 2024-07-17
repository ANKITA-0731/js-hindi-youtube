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
     console.log(loginUserMessage("ankita")); 
     console.log(loginUserMessage("ankita")); 
 






