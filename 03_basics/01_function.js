// function sayMyName(){
//     console.log("N");
//     console.log("I");
//     console.log("L");
//     console.log("A");
//     console.log("D");
//     console.log("R");
//     console.log("I");
// }
// sayMyName()

function AddTwoNumbers(number1, number2){
    let result=number1+number2
    return result
    
}
const result = AddTwoNumbers(3,7)
//console.log(result);

function loginUserMessage(userName){
    return `${userName} just logged in`
}
//console.log(loginUserMessage("NILADRI"))

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Niladri"))

function calculateCartPrice(...num1){
    return num1
}
//console.log(calculateCartPrice(100,850,466,456,300));

const user = {
    userName: "Niladri",
    price: "899"
}
function handleObject(anyobject){
    console.log(`User name is ${anyobject.userName} and price is ${anyobject.price}`);
}
//handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
