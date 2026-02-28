// OOPs : 

//? class : 
// blueprint
// structure of object

// in ts and js only one constructor is allowed

// class demo {
//     // properties
//     //? methods
//     //? constructor --> special method

//     constructor(){

//     }

// }



class Car {
    brand : string;
    private color : string = "blue";
    private display() : void {
        console.log("display");
    }


    constructor(brand:string, color:string, display:void) {
        this.brand = brand;
        this.color =  color;

        this.display()

        this.display = () =>{
            console.log("new display");
            
        }

        this.display()
    }

    start(): void {
        console.log("This is my car");
    } 
}

// new : it will create an empty object
let c = new Car("Toyota", "red")
c.brand = "Maruti"

// console.log(c.display());

console.log(c.brand);
console.log(c);





/**
 * Access Modifiers
 * 
 * public 
 * private
 * protected
 * 
 */

// by default it is public


