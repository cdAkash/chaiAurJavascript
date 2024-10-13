const marvel_heroes  = ['thor','ironman','spiderman']

const dc = ['superman','flash','batman']

// marvel_heroes.push(dc)
console.log(marvel_heroes)

const all =marvel_heroes.concat(dc) // these only supports two arrays
console.log(all)

const all_new = [...marvel_heroes,...dc] // it supports multiple

console.log(all_new)
console.log(marvel_heroes)


const new_array = [1,2,3,[4,5,6],7,8,[6,7,[4,5]]]
const realArray = new_array.flat(Infinity)

console.log(realArray)



console.log(Array.isArray("Akash"))
console.log(Array.from("Akash")) // it will convert each character as an char array element

console.log(Array.from({name:"akash"})) // 

let score1 =100
let score2 =200
let score3 =300
console.log(Array.of(score1,score2,score3))

// isArray, from, -> important methods
