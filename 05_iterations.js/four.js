const myobject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'Swift by apple'
}

for (const key in myobject) {
    //console.log(`${key} shortcut for ${myobject[key]}`);
    
}

const programming = ['js','cpp','rb','swift']
for(const key in programming){
    console.log(programming[key]);
    
}