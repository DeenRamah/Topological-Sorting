// dfs.js
function dfs(node, graph, visited, stack) {
    visited.add(node);

    for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
            dfs(neighbor, graph, visited, stack);
        }
    }

    stack.push(node);
}

function topologicalSortDFS(graph) {
    const visited = new Set();
    const stack = [];

    for (const node in graph) {
        if (!visited.has(node)) {
            dfs(node, graph, visited, stack);
        }
    }

    return stack.reverse();
}

module.exports = topologicalSortDFS;
