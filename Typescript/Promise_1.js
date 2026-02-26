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
var promise1 = new Promise(function (abc) {
    abc(10);
});
promise1.then(function (num) { return num * 2; })
    .then(function (res) { return console.log(res * 2); });
