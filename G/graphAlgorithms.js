// bfs dfs dijkstra's algorithms and other graph traversal techniques
// Graph representation (Adjacency List)
const graph = {
  A: ['B', 'C'],
  B: ['D', 'F'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: [],
};
function bfs(start) {
  let visited = new Set();
  let queue = [start];
  while (queue.length > 0) {
    let node = queue.shift();
    if (!visited.has(node)) {
      console.log(node);
      visited.add(node);
      queue.push(...graph[node]);
    }
  }
}
bfs('A');
