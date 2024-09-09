// kahn.ts
import { Graph } from './types';

export function topologicalSortKahn(graph: Graph): string[] {
    const inDegree: { [key: string]: number } = {};
    const queue: string[] = [];
    const result: string[] = [];

    // Step 1: Compute in-degrees of all nodes
    for (const node in graph) {
        inDegree[node] = 0;
    }
    for (const node in graph) {
        for (const neighbor of graph[node]) {
            inDegree[neighbor] = (inDegree[neighbor] || 0) + 1;
        }
    }

    // Step 2: Enqueue nodes with in-degree 0
    for (const node in inDegree) {
        if (inDegree[node] === 0) {
            queue.push(node);
        }
    }

    // Step 3: Process the queue
    while (queue.length > 0) {
        const node = queue.shift()!;
        result.push(node);

        for (const neighbor of graph[node]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    // Step 4: Check if the topological sort was possible
    if (result.length === Object.keys(graph).length) {
        return result;
    } else {
        throw new Error("Graph has a cycle!");
    }
}
