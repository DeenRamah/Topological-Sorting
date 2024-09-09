// dfs.ts
import { Graph } from './types';

function dfs(node: string, graph: Graph, visited: Set<string>, stack: string[]) {
    visited.add(node);

    for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
            dfs(neighbor, graph, visited, stack);
        }
    }

    stack.push(node);
}

export function topologicalSortDFS(graph: Graph): string[] {
    const visited = new Set<string>();
    const stack: string[] = [];

    for (const node in graph) {
        if (!visited.has(node)) {
            dfs(node, graph, visited, stack);
        }
    }

    return stack.reverse();
}
