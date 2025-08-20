// Hash Map with object
// let hashMap = {};
// hashMap['name'] = 'Foysal';
// hashMap['age'] = 25;
// hashMap['country'] = 'bangladesh';

// console.log(hashMap['name']);
// console.log(hashMap['country']);

// delete hashMap['age'];
// console.log(hashMap);
// ========================================
// Hash map with map()
let myMap = new Map();
myMap.set('name', 'foysal');
myMap.set('age', 25);
myMap.set('country', 'bangladesh');

console.log(myMap.get('name'));
console.log(myMap.get('country'));
console.log(myMap.has('age'));
myMap.delete('age');
console.log(myMap);
