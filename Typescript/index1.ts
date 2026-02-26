




// interface


/**
 * syntax : 
 * interface Interface_name {
 *  property : type
 * }
 */


interface Person {
    readonly id:number,
    name:string,
    age:number,
    gender?:string
}


let obj:Person = {
    id : 9078,
    name : "Khushi",
    age : 21,
}


// example 2
interface Animal {
    name : string,
    age : number
}


interface Dog extends Animal {
    breed : String
}



let myDog:Dog = {
    name : "tommy",
    age : 2,
    breed : "bulldog"
}



// example 3
// interface Car {
//     brand : string,
//     color : string,
//     sunroof?() : string
// }



// let myCar : Car = {
//     brand : "toyota",
//     color : "black",
//     sunroof() {
//         return "sunroof"
//     }
// }



