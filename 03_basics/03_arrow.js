const user = {
    userName: "Niladri",
    price: "999",
    welcomeMessage: function(){
        console.log(`${this.userName} Welcome to our course`)
    }
}
// user.welcomeMessage()
// user.userName = "Sam"
// user.welcomeMessage()

//console.log(this);

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}
//chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4))

//const addTwo = (num1,num2) => num1 + num2
        //or
const addTwo = (num1,num2) => (num1 + num2)
console.log(addTwo(3,4))