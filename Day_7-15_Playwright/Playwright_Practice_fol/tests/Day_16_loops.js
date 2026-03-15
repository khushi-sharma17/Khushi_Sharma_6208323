
const Animal = {
    size : "large",
    species : "dog"
}


for (const index in Animal) {
    console.log(index);
}


// for (const values of Animal) {
//     console.log(Animal[values]);
// }



let arr = [10, 20, 30, 40]

let obj1 = {
    key1 : "value1",
    key2 : "value2"
}


// for in 
for (let i in arr) {
    console.log(i);
}


for (let i in obj1) {
    console.log(i);
}


for (let ch in obj1) {
    console.log(ch);
    console.log(obj1[ch]);
}



// object is not iterable in for of

// for (let i of obj1) {

// }



export {}