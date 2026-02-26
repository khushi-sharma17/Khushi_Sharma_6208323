// console.log("hiii");

// // type inference
// let a = 10

// a = 20


// // let b : string = "hello"


// // Type Annotations


// let b : string = "khushi"
// // b = 66
// let c : number = 19
// let d : boolean = true
// let e : null = null
// let f : undefined = undefined


// let g : any = 20

// g = "hii"
// g = true
// g = undefined

// // array and tuple


// // let arr = [10, 20, 20, 40]


// let arr = ["bcvhd", 678, true]


// let arr1 : [string, number, boolean] = ["bcvhsd", true, 553646, 34567]


// arr.push(50)


// arr1.push(676756)


// console.log(arr1);


// console.log();


// let newArr:[any] = ["bcvhsd", 34, true]

// newArr.push(null)

// console.log(newArr);


// let arr2 : [string, boolean, number, number] = ['cghvhb', true, 456, 4567]

// let stud : {
//     name:string,
//     age?:number,
//     rollno:number
// } = {
//     name : "rhutuja",
//     rollno : 543
// }



function greet(name?:string, age:number=24) {
    console.log(`${name} and ${age}`);
}


greet("rhutuja")


function add(a:number, b:number) : number {
    return a + b
}

add(10, 20)


console.log(add(10, 20));


// function greet(name?:string, age:number = 24) : void {
//     console.log(`${name} and ${age}`);
//     return 10   // not assignable
// }
