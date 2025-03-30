const car = {
    brand: "Toyota",
    model: "Camry",
    start() {
        //   console.log(`${this.brand} ${this.model} is starting.`);
        return `${this.brand} ${this.model} is starting.`
    }
};
// console.log(car.start());


class Car {
    constructor(name, brand) {

        this.name = name;
        this.brand = brand
    }
    start() {
        console.log(`Brand ${this.name} and model ${this.brand}`);

    }
}

const c1 = new Car("TOTOTO", "S1")
// c1.start()

class MyBike {

    constructor(brand, model) {
        this.brand = brand;
        this.model = model

    }
    findDetails(brand) {
        return `${brand} ${this.model}`
    }
}
const B1 = new MyBike("A", "B")
// console.log(B1.findDetails());


class BankAccount {
    #balance;
    constructor(accountHolder, balance) {
        this.#balance = balance;
        this.accountHolder = accountHolder;
    }
    getBalance() {
        return `Balance ${this.#balance}`
    }
    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited: ${this.#balance}`);
        // console.log(`Deposited: ${this.amount}`);


    }
}

// const amount = new BankAccount('ROHITH', 2000);
// console.log(amount.getBalance())
// amount.deposit(2000);
// console.log(amount.getBalance())
// console.log(amount.balance)
class CoffeeMachine {
    #waterLevel = 0;
    // constructor() {

    // }
    fillWater(amount) {
        this.#waterLevel += amount;
        console.log(`Water filled: ${amount}`);

    }
    #brewCoffe() {
        console.log("Brewing coffee...");
    }
    makeCoffee() {
        if (this.#waterLevel > 0) {
            this.#brewCoffe();
            this.#waterLevel--;
            console.log("Coffee is ready!");

        } else {
            console.log("Not enough water!");
        }
    }
}

const machine = new CoffeeMachine();
//machine.fillWater(2);
//machine.makeCoffee();

class Animal {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log("Animal makes a sound.");

    }
}

class Dog extends Animal {
    sounds() {
        console.log(`${this.name} barks!`);
    }
}

const dog = new Dog("Tommy")
// dog.sound();
// dog.sounds();


// class Shape {
//     area() {
//         console.log("Area calculation not defined.");
//     }
// }

// class Rectangle extends Shape {
//     constructor(width, height) {
//         super();
//         this.width = width;
//         this.height = height;
//     }
//     area() {
//         console.log(`Rectangle Area: ${this.width * this.height}`);
//     }
// }

// class Circle extends Shape {
//     constructor(radius) {
//         super();
//         this.radius = radius;
//     }
//     area() {
//         console.log(`Circle Area: ${Math.PI * this.radius * this.radius}`);
//     }
// }

// const shapes = [new Rectangle(10, 20), new Circle(7)];
// shapes.forEach(shape => shape.area());

class Shapes {
    area() {
        console.log("Area calculation not defined.");
    }
}
class Rectangles extends Shapes {
    constructor(width, height) {
        super()
        this.width = width;
        this.height = height;
    }
    area() {
        console.log(`Rectangle Area: ${this.width * this.height}`);
    }
}

class Circles extends Shapes {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        console.log(`Circle Area: ${Math.PI * this.radius * this.radius}`);
    }
}

// const myShapes = [new Rectangles(10, 20), new Circles(7)];
// myShapes.forEach(shape => shape.area());
// const dd=new Shapes()
// dd.area();

class PaymentProcessor {
    process(paymentMethod) {
        paymentMethod.processPayment()


    }

}
class CreditCardPayment {
    processPayment() {
        console.log('Processing Credit Card Payment');
    }
}
class PayPalPayment {
    processPayment() {
        console.log('Processing PayPal Payment');

    }
}
class UpiPayment {
    processPayment() {
        console.log("New UPI payment done!!!!");

    }
}

// const processor = new PaymentProcessor();
// processor.process(new CreditCardPayment());
// processor.process(new PayPalPayment());
// const process1 = new PaymentProcessor();
// process1.process(new UpiPayment())

class Bird {
    move() {
        console.log("Bird is moving");
    }
}
/*
class Sparrow extends Bird {
    move() {
        console.log("Sparrow is flying");
    }
}

class Penguin extends Bird {
    move() {
        console.log("Penguin is swimming");
    }
}

const birds = [new Sparrow(), new Penguin()];
birds.forEach(bird => bird.move());
*/

class Workable {
    work() {
        console.log("Working");
    }
}
class Eatable {
    eat() {
        console.log("Eating");
    }
}
class Human extends Workable {
    eat() {
        console.log("Humans eat and work");
    }
    work() {
        console.log("Human Working");
    }
}

class Robot extends Workable { }

const human = new Human()
human.eat()
human.work()