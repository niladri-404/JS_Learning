// for

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]
for (const num of arr) {
    //console.log(num);
    
}

const name = "Niladri Sana"
for (const n of name) {
    //console.log(n);
    
}

// MAPs

const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"UNITED STATE OF AMARICA")
map.set('FR',"FANCE")
map.set('IN',"INDIA")// it will not be printed bcoz map should be unique

//console.log(map);

// for (const key of map) {
//     console.log(key);
// }
for (const [key,value] of map) {
     console.log(key,':-',value);
}

const myobject = {
    'game1': 'NFS',
    'game2': 'SpiderMan'
}
// for (const [key,value] of myobject) {
//     console.log(key,':-',value);
       
// }