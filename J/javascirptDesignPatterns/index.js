// 1.---------- Singleton Pattern
//  উদ্দেশ্য: একটা ক্লাস/অবজেক্টের শুধু একটাই ইনস্ট্যান্স থাকবে পুরো প্রোগ্রামে।
// class Singleton {
//   constructor() {
//     if (Singleton.instance) {
//       return Singleton.instance;
//     }
//     Singleton.instance = this;
//   }
//   sayHello() {
//     console.log('hello ami aktai instance');
//   }
// }
// const obj1 = new Singleton();
// const obj2 = new Singleton();
// console.log(obj1 === obj2); //true
// obj1.sayHello();
//thanks you Foysal Ahmed Sarker
// 2. -----------------Factory Pattern
// উদ্দেশ্য: অনেক ধরনের অবজেক্ট বানাতে হলে, কন্সট্রাক্টরের পরিবর্তে একটা ফ্যাক্টরি ফাংশন ব্যবহার করা হয়।
// class Car {
//   constructor() {
//     this.type = 'Car';
//   }
// }
// class Bike {
//   constructor() {
//     this.type = 'Bike';
//   }
// }
// class VehicleFactory {
//   static createVehicle(vehicleType) {
//     if (vehicleType === 'car') return new Car();
//     if (vehicleType === 'bike') return new Bike();
//   }
// }
// const v1 = VehicleFactory.createVehicle('car');
// const v2 = VehicleFactory.createVehicle('bike');
// console.log(v1.type);
// console.log(v2.type);
// 3. -------------------Observer Pattern
// উদ্দেশ্য: একটা অবজেক্টে কিছু পরিবর্তন হলে, সাথে সাথে অন্য অবজেক্টগুলোকে নোটিফাই করা।
// class Subject {
//   constructor() {
//     this.observers = [];
//   }
//   subscribe(observer) {
//     this.observers.push(observer);
//   }
//   unsubscribe(observer) {
//     this.observers = this.observers.filter(obs => obs !== observer);
//   }
//   notify(data) {
//     this.observers.forEach(observer => observer.update(data));
//   }
// }
// class Observer {
//   constructor(name) {
//     this.name = name;
//   }
//   update(data) {
//     console.log(`${this.name} pelo data ${data}`);
//   }
// }
// const subject = new Subject();
// const obs1 = new Observer('Observer1');
// const obs2 = new Observer('Observer2');
// subject.subscribe(obs1);
// subject.subscribe(obs2);
// subject.unsubscribe(obs2);
// subject.notify('new data aseche');
// 4. Module Pattern

// 👉 উদ্দেশ্য: কোডকে আলাদা স্কোপে রাখা (ডেটা হাইড করা ও পাবলিক মেথড রাখা)।
// const CounterModule = (function () {
//   let count = 0;
//   function increment() {
//     count++;
//     console.log('Count: ', count);
//   }
//   function reset() {
//     count = 0;
//     console.log('count reset');
//   }
//   return {
//     increment,
//     reset,
//   };
// })();
// CounterModule.increment(); //Count: 1
// CounterModule.increment(); // Count: 2
// CounterModule.reset(); //Count reset
// 5. Revealing Module Pattern

// 👉 উদ্দেশ্য: মডিউলের ভিতরে প্রাইভেট মেথড রাখলেও বাইরে শুধু সিলেক্ট করা পাবলিক মেথড এক্সপোজ করা।
const UserModule = (function () {
  let users = [];
  function addUser(name) {
    users.push(name);
  }
  function getUsers() {
    return users;
  }
  return {
    addUser,
    getUsers,
  };
})();
UserModule.addUser('Foysal');
UserModule.addUser('Rahim');
console.log(UserModule.getUsers());
