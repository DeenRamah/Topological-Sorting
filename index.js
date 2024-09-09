// index.js
const topologicalSortKahn = require('./kahn');
const topologicalSortDFS = require('./dfs');

const graph = {
    'A': ['C'],
    'B': ['C', 'D'],
    'C': ['E'],
    'D': ['F'],
    'E': ['F'],
    'F': []
};

console.log('Topological Sort using Kahn\'s Algorithm:');
console.log(topologicalSortKahn(graph));

console.log('Topological Sort using DFS:');
console.log(topologicalSortDFS(graph));
