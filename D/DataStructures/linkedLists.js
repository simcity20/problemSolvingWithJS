// Make Linked List Node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// Make Linked List
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
// Linked List Traverse
let current = head;
while (current) {
  console.log(current.value);
  current = current.next;
}
