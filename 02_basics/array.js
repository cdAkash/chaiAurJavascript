// Arrays 

const myArr = [0,1,2,3,4,5,"akash",true]
console.log(myArr)

console.log(typeof myArr);

const myArray = new Array();
console.log(typeof myArray);

console.log(myArr[1])

// Arrays Methods

myArr.push("pushed inside")
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift("Shifting from First")
console.log(myArr);
 myArr.shift() // removing the first element
 console.log(myArr);


 console.log(myArr.includes(33));
 console.log(myArr.indexOf(3));


 const newArr = myArr.join() // join arrays into strings
 console.log(typeof newArr);

// slice and splice

console.log("A",myArr)
const myn1 = myArr.slice(1,3)// Slice function will not modify the original Array
console.log(myn1);
console.log("B",myArr)
const myn2 = myArr.splice(1,3) // Meanwhile Splice Array will modify the original array, it will delete the elements from the array and return the deleted elements in a new array.
console.log("c",myArr)
console.log(myn2);
console.log(myArr);

