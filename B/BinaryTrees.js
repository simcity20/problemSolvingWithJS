// ## underStanding binary search trees, traversals, and balanced trees
// ঠিক আছে — আমি বাংলায় ধাপে ধাপে ব্যাখ্যা করব **Binary Tree**, **Binary Search Tree (BST)**, **Traversal methods**, এবং **Balanced Tree** — সবকিছু **JavaScript** উদাহরণসহ।

// ---

// ## **1. Binary Tree কী?**

// Binary Tree হলো এমন একটি ডেটা স্ট্রাকচার যেখানে **প্রতিটি নোডের সর্বোচ্চ দুইটি child থাকতে পারে**:

// * **Left Child**
// * **Right Child**

//  উদাহরণ:

```
      10
     /  \
    5    15
   / \     \
  2   7     20


// ## **2. Binary Search Tree (BST) কী?**

// BST হলো Binary Tree-এর একটি বিশেষ ধরন যেখানে:

// 1. **Left Subtree** এর সব ভ্যালু **root-এর চেয়ে ছোট**।
// 2. **Right Subtree** এর সব ভ্যালু **root-এর চেয়ে বড়**।
// 3. প্রতিটি subtree আবার নিজেও BST।

📌 উদাহরণ:


      8
     / \
    3   10
   / \     \
  1   6     14
     / \    /
    4   7  13
```;
// ## **3. JavaScript-এ BST তৈরি করা**

// javascript
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert Method
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
}

// উদাহরণ ব্যবহার
const bst = new BinarySearchTree();
bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);
bst.insert(4);
bst.insert(7);
bst.insert(13);

console.log(JSON.stringify(bst, null, 2));

// ## **4. Tree Traversals**

// Traversal মানে হলো গাছের (Tree) প্রতিটি নোড ভিজিট করা।

// ### **(A) Depth First Search (DFS)**

// **Types:**

// 1. **Pre-Order** → Root → Left → Right
// 2. **In-Order** → Left → Root → Right
// 3. **Post-Order** → Left → Right → Root

// javascript
// In-order Traversal
function inOrder(node) {
  if (node) {
    inOrder(node.left);
    console.log(node.value);
    inOrder(node.right);
  }
}

// Pre-order Traversal
function preOrder(node) {
  if (node) {
    console.log(node.value);
    preOrder(node.left);
    preOrder(node.right);
  }
}

// Post-order Traversal
function postOrder(node) {
  if (node) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.value);
  }
}

inOrder(bst.root); // 1 3 4 6 7 8 10 13 14
// ```

// ### **(B) Breadth First Search (BFS)**

// Level by level ট্রাভার্সাল (queue ব্যবহার করে):

// javascript
function bfs(root) {
  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let current = queue.shift();
    console.log(current.value);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
}

bfs(bst.root); // 8 3 10 1 6 14 4 7 13

// ## **5. Balanced Tree**

// Balanced Tree হলো এমন একটি tree যেখানে left এবং right subtree-এর height পার্থক্য **১-এর বেশি না**।

// 📌 Balanced Tree থাকার সুবিধা:

// * সার্চ, ইনসার্ট, ডিলিট **O(log n)** টাইমে করা যায়।
// * Unbalanced Tree হলে worst case এ **O(n)** হয়ে যেতে পারে (যেমন লিঙ্কড লিস্টের মতো)।

// 📌 উদাহরণ:

// **Balanced:**

// ```
//       8
//      / \
//     4   12
//    / \  / \
//   2  6 10 14
// ```

// **Unbalanced:**

// ```
// 1
//  \
//   2
//    \
//     3
//      \
//       4
// ```

// ---

// আমি চাইলে তোমার জন্য বাংলায় **Binary Search Tree-এর সম্পূর্ণ ভিজ্যুয়াল ডায়াগ্রাম ও অ্যানিমেশন** বানিয়ে দিতে পারি, যেখানে ইনসার্ট, সার্চ, ডিলিট এবং ট্রাভার্সাল ধাপে ধাপে দেখানো হবে।
// তুমি কি চাও আমি সেটা করে দিই?
