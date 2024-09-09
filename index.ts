// index.ts
import { topologicalSortKahn } from './kahn';
import { topologicalSortDFS } from './dfs';
import { Graph } from './types';

const graph: Graph = {
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
