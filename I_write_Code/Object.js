// const Singleton = {
//     name: "Im Singleton",
//     getName() {
//         return this.name;
//     }


// }
// Object.freeze(Singleton);

// function Singleton() {
//     if (!Singleton.instance) {
//         Singleton.instance = this;
//         this.name = "Singleton Instance";

//     }
//     return Singleton.instance
// }


// const obj1 = new Singleton();
// const obj2 = new Singleton();
// const obj3 = new Singleton();
// const obj4 = new Singleton();

// console.log(obj1 === obj2);
// console.log(obj1 === obj4);


// const Singleton = (function () {
//     let instance;
//     function createInstance() {
//         return { name: "I am a singleton" };
//     }
//     return {
//         getInstance() {
//             if (!instance) {
//                 instance = createInstance()

//             }
//             return instance
//         }
//     }
// })()
// const obj11 = Singleton.getInstance();
// const obj22 = Singleton.getInstance();
// console.log(obj11 === obj22); // Output: true


// class Singleton {
//     constructor() {
//         this.name = "Singleton Instance";
//     }
//     static getInstace() {
//         if (!Singleton.instance) {
//             Singleton.instance = new Singleton();

//         }
//         return Singleton.instance
//     }
// }

// const obj1 = Singleton.getInstance();
// const obj2 = Singleton.getInstance();
// console.log(obj1 === obj2); 

class Singleton {
  constructor() {
    this.name = "Singleton Instance";
  }
  
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();
console.log(obj1 === obj2); // Output: true
