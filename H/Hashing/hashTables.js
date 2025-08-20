class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  //simple Hash Function
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size; // index ferot dibe
  }
  set(key, value) {
    let index = this.hash(key);
    this.table[index] = value;
  }
  get(key) {
    let index = this.hash(key);
    return this.table[index];
  }
  remove(key) {
    let index = this.hash(key);
    this.table[index] = undefined;
  }
  display() {
    console.log(this.table);
  }
}
//use
let ht = new HashTable(10);
ht.set('name', 'foysal');
ht.set('age', 25);
ht.set('country', 'bangladesh');
console.log(ht.get('name')); // Foysal
ht.display();
