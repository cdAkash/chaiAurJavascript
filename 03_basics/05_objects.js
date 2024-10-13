// Object De-Structure and JSON API

const course={
    courseIns:"Hitesh",
    courseName:"JS"
}

console.log(course.courseIns)
 // Another syntax to access object data

console.log(course["courseIns"])

const {courseIns,courseName} = course
console.log(courseIns)
console.log(courseName)
const {courseIns:con,courseName:cos} = course // Giving other name to the key

console.log(con)
console.log(cos)
                            
// {
//     "name":"Akash",
//     "age":20,
//     "course":"JS",
//     "language":["JS","Python"]
// }
