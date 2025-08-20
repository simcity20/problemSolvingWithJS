// bfs dfs dijkstra's algorithms and other graph traversal techniques
// Graph representation (Adjacency List) {BFS}
// const graph = {
//   A: ['B', 'C'],
//   B: ['D', 'F'],
//   C: ['F'],
//   D: [],
//   E: ['F'],
//   F: [],
// };
// function bfs(start) {
//   let visited = new Set();
//   let queue = [start];
//   while (queue.length > 0) {
//     let node = queue.shift();
//     if (!visited.has(node)) {
//       console.log(node);
//       visited.add(node);
//       queue.push(...graph[node]);
//     }
//   }
// }
// bfs('A');
// ======================================= {DFS}
// const graph2 = {
//   A: ['B', 'C'],
//   B: ['D', 'E'],
//   C: ['F'],
//   D: [],
//   E: ['F'],
//   F: [],
// };
// function dfs(node, visited = new Set()) {
//   if (visited.has(node)) return;
//   console.log(node); // node visit
//   visited.add(node);

//   for (let neighbor of graph2[node]) {
//     dfs(neighbor, visited);
//   }
// }
// dfs('A');
// ===================================={Dijkstra's algorithm}

// class PriorityQueue {
//   constructor() {
//     this.values = [];
//   }
//   enqueue(val, priority) {
//     this.values.push({ val, priority });
//     this.values.sort((a, b) => a.priority - b.priority);
//   }
//   dequeue() {
//     return this.values.shift();
//   }
// }
// function dijkstra(graph, start) {
//   const distances = {};
//   const pq = new PriorityQueue();
//   const previous = {};
//   let path = [];

//   // initial setup
//   for (let vertex in graph) {
//     if (vertex === start) {
//       distances[vertex] = 0;
//       pq.enqueue(vertex, 0);
//     } else {
//       distances[vertex] = infinity;
//       pq.enqueue(vertex, infinity);
//     }
//     previous[vertex] = null;
//   }
//   while (pq.values.length) {
//     let smallest = pq.dequeue().val;
//     for (let neighbor in graph[smallest]) {
//       let distances = distances[smallest] + graph[smallest][neighbor];
//       if (distances < distances[neighbor]) {
//         distances[neighbor] = distances;
//         previous[neighbor] = smallest;
//         pq.enqueue(neighbor, distance);
//       }
//     }
//   }
//   return { distances, previous };
// }
// // Weighted Graph
// const weightedGraph = {
//   A: { B: 4, C: 2 },
//   B: { E: 3 },
//   C: { D: 2, F: 4 },
//   D: { E: 3 },
//   E: { F: 1 },
//   F: {},
// };
// console.log(dijkstra(weightedGraph, 'A'));

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.values.sort((a, b) => a.priority - b.priority);
  }
  dequeue() {
    return this.values.shift();
  }
}

function dijkstra(graph, start) {
  const distances = {};
  const pq = new PriorityQueue();
  const previous = {};
  let path = [];

  // initial setup
  for (let vertex in graph) {
    if (vertex === start) {
      distances[vertex] = 0;
      pq.enqueue(vertex, 0);
    } else {
      distances[vertex] = Infinity;
      pq.enqueue(vertex, Infinity);
    }
    previous[vertex] = null;
  }

  while (pq.values.length) {
    let smallest = pq.dequeue().val;

    for (let neighbor in graph[smallest]) {
      let distance = distances[smallest] + graph[smallest][neighbor];
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        previous[neighbor] = smallest;
        pq.enqueue(neighbor, distance);
      }
    }
  }

  return { distances, previous };
}

// Weighted Graph
const weightedGraph = {
  A: { B: 4, C: 2 },
  B: { E: 3 },
  C: { D: 2, F: 4 },
  D: { E: 3 },
  E: { F: 1 },
  F: {},
};

console.log(dijkstra(weightedGraph, 'A'));
```
ঠিক আছে ✨ আমি বাংলায় **Graph Algorithms** (BFS, DFS, Dijkstra’s Algorithm এবং অন্যান্য traversal techniques) সহজভাবে বুঝিয়ে দেবো এবং সাথে **JavaScript কোড**ও দেখাবো।

---

# 🔹 Graph Algorithms (গ্রাফ অ্যালগরিদম)

গ্রাফ অ্যালগরিদম ব্যবহার করা হয় **nodes (vertices)** আর **edges (connections)** নিয়ে কাজ করার জন্য।
আমরা যেসব সমস্যায় ব্যবহার করি:

* পথ খোঁজা (Shortest Path)
* Network traversal
* Web crawler
* Social network suggestions

---

## 1. **BFS (Breadth First Search)**

👉 কাজ: লেভেল অনুযায়ী (Layer by Layer) traverse করে।
👉 কোথায় ব্যবহার হয়: Shortest path (unweighted graph), friend suggestion, web crawler।

### কোড (JavaScript)

```javascript
// Graph representation (Adjacency List)
const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: []
};

function bfs(start) {
  let visited = new Set();
  let queue = [start];

  while (queue.length > 0) {
    let node = queue.shift();
    if (!visited.has(node)) {
      console.log(node); // node visit
      visited.add(node);
      queue.push(...graph[node]);
    }
  }
}

bfs("A"); 
// Output: A B C D E F
```

---

## 2. **DFS (Depth First Search)**

👉 কাজ: গভীরভাবে traverse করে (গভীর branch শেষ না করা পর্যন্ত থামে না)।
👉 কোথায় ব্যবহার হয়: Maze solving, cycle detection, path finding।

### কোড (JavaScript)

```javascript
const graph2 = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: []
};

function dfs(node, visited = new Set()) {
  if (visited.has(node)) return;
  console.log(node); // node visit
  visited.add(node);

  for (let neighbor of graph2[node]) {
    dfs(neighbor, visited);
  }
}

dfs("A"); 
// Output: A B D E F C
```

---

## 3. **Dijkstra’s Algorithm**

👉 কাজ: Weighted graph এ **Shortest Path** বের করা।
👉 কোথায় ব্যবহার হয়: Google Maps, GPS navigation, Network routing।

### কোড (JavaScript)

```javascript
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.values.sort((a, b) => a.priority - b.priority);
  }
  dequeue() {
    return this.values.shift();
  }
}

function dijkstra(graph, start) {
  const distances = {};
  const pq = new PriorityQueue();
  const previous = {};
  let path = [];

  // initial setup
  for (let vertex in graph) {
    if (vertex === start) {
      distances[vertex] = 0;
      pq.enqueue(vertex, 0);
    } else {
      distances[vertex] = Infinity;
      pq.enqueue(vertex, Infinity);
    }
    previous[vertex] = null;
  }

  while (pq.values.length) {
    let smallest = pq.dequeue().val;

    for (let neighbor in graph[smallest]) {
      let distance = distances[smallest] + graph[smallest][neighbor];
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        previous[neighbor] = smallest;
        pq.enqueue(neighbor, distance);
      }
    }
  }

  return { distances, previous };
}

// Weighted Graph
const weightedGraph = {
  A: { B: 4, C: 2 },
  B: { E: 3 },
  C: { D: 2, F: 4 },
  D: { E: 3 },
  E: { F: 1 },
  F: {}
};

console.log(dijkstra(weightedGraph, "A"));
```

**Output (shortest distances from A):**

```json
{
  distances: { A: 0, B: 4, C: 2, D: 4, E: 7, F: 8 },
  previous: { A: null, B: "A", C: "A", D: "C", E: "B", F: "E" }
}
```

---

## 4. অন্যান্য Graph Algorithms

* **Bellman-Ford Algorithm** → negative weights এর জন্য shortest path বের করতে ব্যবহৃত হয়।
* **Floyd-Warshall Algorithm** → সব node থেকে সব node এর shortest path বের করে।
* **Topological Sort** → dependency/order বের করার জন্য ব্যবহৃত হয় (যেমন course scheduling)।
* **A* Search Algorithm*\* → Dijkstra এর উন্নত ভার্সন, যেখানে heuristic ব্যবহার হয় (Google Maps এ ব্যবহৃত হয়)।

---

👉 এখন বলুন, আপনি কি চান আমি এগুলো **Step-by-step Visualization (Diagram সহ বাংলায়)** দেখাই, নাকি শুধু **JavaScript কোড প্র্যাকটিস** করার জন্য বিস্তারিত example দেব?
```