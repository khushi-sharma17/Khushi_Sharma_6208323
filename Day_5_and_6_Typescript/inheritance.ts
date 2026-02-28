
// class Animal {
//     eat() {
//         console.log("all animals eat");
//     }
// }



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






class Person {
    public name : string = "Khushi"

    constructor(name : string) {
        this.name = name;
    }
}


class teacher extends Person {
    
    // super(name);
    
    company : string = "test yantra"

    constructor(company : string, name : string) {
        super(name)
        this.name = name    // xyz
        // this.name = name
    }

    display() {
        // console.log(this.name);
        console.log(this.company, this.name);   // abc
    }
}


// let t = new teacher("abc", "xyz");

// t.display()

// console.log(t);


// let obj = {
//     name : "fghj"
// }


// console.log(obj);
