// Promise and async await

// A Promise is an object that represents the result of an asynchronous operation.


// fulfilled | resolved
// rejected
// pending


let p1 = new Promise<string>((resolve, reject) => {
    let success = true

    if (success != true) {
        resolve("login successful")
    } else {
        reject("login unsuccessfull")
    }
})

console.log(p1);




p1.then((ele) => {
    console.log(ele);
}).catch((res) => {
    console.log(res);
}).finally(() => {

})



// what is promise static methods


function getUser() : Promise<string> {
    return new Promise((resolve, reject) => {
        resolve("user is there.")
        reject("user not found")
    }) 
}


getUser().then((ele) => {
    console.log(ele);
})
getUser().catch((res) => {
    console.log(res);
})