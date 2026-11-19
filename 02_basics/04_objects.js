// const instaUser = new Object()  singleton object

const instaUser = {}            // Non singleton object
instaUser.id = "7513"
instaUser.name = "Niladri"
instaUser.isLoggedIn = false

//console.log(instaUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Niladri",
            lastname: "Sana"
        }
    }
}
//console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1,obj2)
//console.log(obj3)
const obj3 = {...obj1, ...obj2}
//console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]


users[1].email
// console.log(instaUser);

// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));

// console.log(instaUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName: "JS in hindi",
    price: "999" ,
    courseInstaructor: "Niladri",
}
const {courseInstaructor: Instuctor} = course
console.log(Instuctor)

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]