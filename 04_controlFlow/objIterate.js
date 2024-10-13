const myObj={
    js:"javascript",
    cpp:"C++",
    rb:'ruby'
}

for (const key in myObj) {
    // console.log(myObj[key]);
    // console.log(`${key} shorcut is for ${myObj[key]}`)
}

const arr = ["ak","an","sn","ne","ay","sa","su"]
// foreach looop

arr.forEach(function (l){
    // console.log(l);
}) // we can use arrow functions as well

arr.forEach((item)=>{
    // console.log(item);
})

function printMe(item){
    console.log(item);
}
// arr.forEach(printMe)

arr.forEach((item,index,arr)=>{
// console.log(item, index,arr);
})

const myCod =[
    {
        lang:"javascript",
        langExt:"js"
    },
    {
        lang:"ruby",
        langExt:"rb"
    },
    {
        lang:"python",
        langExt:"py"
    }
]
myCod.forEach((item)=>{
    console.log(item.lang);
    console.log(item.langExt);
})


