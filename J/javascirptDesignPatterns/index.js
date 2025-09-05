class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
  }
  sayHello() {
    console.log('hello ami aktai instance');
  }
}
const obj1 = new Singleton();
const obj2 = new Singleton();
console.log(obj1 === obj2); //true
obj1.sayHello();
//thanks you Foysal Ahmed Sarker
