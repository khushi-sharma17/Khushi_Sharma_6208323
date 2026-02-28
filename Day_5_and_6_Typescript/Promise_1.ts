
// let promise_one = new Promise<number>((resolve) => {
//     let num = 10;

//     if (num == 10) {
//         resolve(num);  
//     }
// })

// promise_one.then((ele) => {
//     console.log(ele);
// }).then((res) => {
//     console.log(res);
// })




let promise1 = new Promise<number> ((abc) => {
    abc(10)
})


promise1.then(num => num * 2)
.then((res) => console.log(res * 2))