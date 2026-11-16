const myArr = [4, 7, 6, 8, 0, 8]
// const myAnimals=["Cat","Dog","Chicken"]

// const myArr2=new Array(7, 5, 3, 2)
// console.log(myArr[3])

// myArr.push(10)
// myArr.push(11)
// myArr.pop()
// console.log(myArr.includes(9))
// console.log(myArr.indexOf(8))

// const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);