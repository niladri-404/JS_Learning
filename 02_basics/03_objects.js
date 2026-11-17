// singleton

const mysym = Symbol("key1")

const jsUser= {
    "Full name": "Niladri Sana",
    name: "Niladri",
    [mysym]: "mykey1",
    age: 18,
    location: "Kolkata",
    email: "Niladri@gmail.com",
    isLoggedIn: false,
    LastLoggedinDays: ["Monday", "saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["Full name"])

// console.log(typeof(mysym))
// console.log(jsUser[mysym])

jsUser.email = "NiladriSana12@gmail.com"
//Object.freeze(jsUser)
jsUser.email = "NiladriSana12@mircrosoft.com"
//console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello js User")
}
jsUser.greetingTwo = function(){
    console.log(`Hello js User, ${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())