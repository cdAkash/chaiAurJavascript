const tinderUser = new Object()  // -> This is a singleton object

const tinderUser2 = {} // -> This  is not singelton object

// Singleton object: We can only have one instance of it throughout the lifetime of an appplication

tinderUser.id = "123abc"
tinderUser.name = "Superman"
tinderUser.isLoggedIn = false

tinderUser2.id = "123abc"
tinderUser2.name = "Superman"

console.log(tinderUser)
console.log(tinderUser2)


const user = {
    fullName:{
        userFullName:{
            firstName:"Akash",
            LastName:"Yadav"
        }
    }
}

console.log(user.fullName.userFullName.firstName);
console.log(user.fullName.userFullName.LastName);


// Optional Chaining
const obj1 = {
    1:"a", 2:"b"
}
const obj2={3:"a",4:"b"}
const obj5={5:"a",6:"b"}
const obj3 = Object.assign({},obj1,obj2,obj5)  // Here {}-> target object  and all other arguments are source objects
console.log(obj3)

const obj4 = {...obj1,...obj2} // ...-> spread operator
console.log(obj4)

console.log(Object.keys(tinderUser)) // returns an array of keys
console.log(Object.values(tinderUser)) // returns an array of values
console.log(Object.entries(tinderUser)) // returns an array of key value pairs


