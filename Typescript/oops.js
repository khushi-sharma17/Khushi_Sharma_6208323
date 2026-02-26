// // OOPs : 
// //? class : 
// // blueprint
// // structure of object
// // in ts and js only one constructor is allowed
// // class demo {
// //     // properties
// //     //? methods
// //     //? constructor --> special method
// //     constructor(){
// //     }
// // }
// var Car = /** @class */ (function () {
//     function Car(brand, color, display) {
//         this.color = "blue";
//         this.brand = brand;
//         this.color = color;
//         this.display();
//         this.display = function () {
//             console.log("new display");
//         };
//         this.display();
//     }
//     Car.prototype.display = function () {
//         console.log("display");
//     };
//     Car.prototype.start = function () {
//         console.log("This is my car");
//     };
//     return Car;
// }());
// // new : it will create an empty object
// var c = new Car("Toyota", "red");
// c.brand = "Maruti";
// console.log(c.display());
// console.log(c.brand);
// console.log(c);
