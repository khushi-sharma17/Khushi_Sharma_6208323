// class Animal {
//     eat() {
//         console.log("all animals eat");
//     }
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class Cat extends Animal {
//     sound() {
//         console.log("meow");
//     }
// }
// class Dog extends Animal {
// }
// let cat = new Cat()
// cat.eat()
// cat.sound()
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = "Khushi";
        this.name = name;
    }
    return Person;
}());
var teacher = /** @class */ (function (_super) {
    __extends(teacher, _super);
    function teacher(company, name) {
        var _this = _super.call(this, name) || this;
        // super(name);
        _this.company = "test yantra";
        _this.name = name; // xyz
        return _this;
        // this.name = name
    }
    teacher.prototype.display = function () {
        // console.log(this.name);
        console.log(this.company, this.name); // abc
    };
    return teacher;
}(Person));
// let t = new teacher("abc", "xyz");
// t.display()
// console.log(t);
// let obj = {
//     name : "fghj"
// }
// console.log(obj);
