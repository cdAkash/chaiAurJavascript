// Reduce
const myNum = [1,2,3]

const total = myNum.reduce(function (acc,currVal){
    console.log(`acc: ${acc} and currVal: ${currVal}`);
    return acc+currVal
},3)

const myToal = myNum.reduce((acc,curr)=>acc+curr,0)

console.log(myToal);