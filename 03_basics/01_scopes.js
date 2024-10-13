// {} -> scope

var c=300
// let c =300
if(true){
    let a =10
    const b =20
    var c=30
}
// console.log(a);
// console.log(b);
// console.log(c);

// Nested Scope

console.log(addOne(5)); // But here we can

function addOne(num){
    return num+1;
}

// console.log(addTwo(10)) -> Here we can't call this function before Initialization of function

// Function Expression

const addTwo = function(num){
    return num+2;
}

console.log(addTwo(10))