// iterators

// advanced for loops
 const arr = [1,2,3,4,5]
//  for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
//  }


 for (const num of arr) {
    console.log(num);
 }

const gree = "Ram Ram Ji"
for (const g of gree) {
    console.log(`Each char is ${g}`);
}


// Maps
const map = new Map()
map.set('IN',"India")
map.set('USA',"America")
map.set('UK',"British")
map.set('IN',"India") // This will not be considered , because map only stores unique value

for (const [key,value] of map) {
    console.log(key,':-',value);
}

// console.log(map);


const myObj ={
    'game1':'NFS',
    'game2':'PUBG'
}
for (const [key,value] of myObj) {
    console.log(key,':-',value)
} // Here myobj is not iteratable

