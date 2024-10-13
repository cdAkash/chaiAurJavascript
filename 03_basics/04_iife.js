(function chai(){ // Named IIFE: Immediately Invoked Function Expression
    console.log(`DB connected`);
})(); // to end the current invoked function we have to put a semicolon at the end of the function


(()=>{
    console.log(`DB connecccted to SQl`);
})();

((name)=>{
    console.log(`DB connecccted to SQl ${name}`);
})("Akash")


let val1 =10
let val2 = 5
function addNum(num1, num2){
    let total = num1+num2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,2)