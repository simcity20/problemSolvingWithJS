class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // Helper ফাংশন: parent, left, right index বের করা
  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  left(i) {
    return 2 * i + 1;
  }
  right(i) {
    return 2 * i + 2;
  }

  // উপরে তুলা (Heapify Up)
  heapifyUp(i) {
    while (i > 0 && this.heap[this.parent(i)] < this.heap[i]) {
      [this.heap[i], this.heap[this.parent(i)]] = [
        this.heap[this.parent(i)],
        this.heap[i],
      ];
      i = this.parent(i);
    }
  }

  // নিচে নামানো (Heapify Down)
  heapifyDown(i) {
    let largest = i;
    let left = this.left(i);
    let right = this.right(i);

    if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }
    if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }
    if (largest !== i) {
      [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
      this.heapifyDown(largest);
    }
  }

  // heap এ insert করা
  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  // সর্বোচ্চ element (root) remove করা
  extractMax() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    let root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);

    return root;
  }

  // heap দেখা
  print() {
    console.log(this.heap);
  }
}

// উদাহরণ:
const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(5);
maxHeap.insert(30);

maxHeap.print(); // [30, 20, 5, 10]
console.log(maxHeap.extractMax()); // 30
maxHeap.print(); // [20, 10, 5]
