import React, { useState } from "react";


// ---------- Graph Type ----------
type Graph = {
  [key: string]: Map<string, number>;
};

// ---------- Dijkstra Function ----------
function dijkstra(graph: Graph, start: string) {
  const distances: { [key: string]: number } = {};
  const visited = new Set<string>();

  // Initialize distances
  for (let node in graph) {
    distances[node] = Infinity;
  }
  distances[start] = 0;
  for (let l = 0; l < Object.keys(distances).length; l++) {
  //while (true) {
    // Find unvisited node with smallest distance
    let closest: string | null = null;
    let smallest = Infinity;

    for (let node in distances) {
      if (!visited.has(node) && distances[node] < smallest) {
        closest = node;
        smallest = distances[node];
      }
    }

    if (closest === null) break;

    visited.add(closest);

    const neighbors = graph[closest];
    for (const [neighbor, weight] of neighbors.entries()) {
      const newDist = distances[closest] + weight;
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
      }
    }
  }
// debugger;
// const a = [3, 2, 1, 2, 3];
// const elementsVisited: { [key: string]: number } = {}; // here i will save visited elements
// let minDistance = Infinity; // Setting it infinite guarantees that any minimum you find will be less
// for(let i = 0; i < a.length; i++){
//     if(elementsVisited[a[i]] !== undefined){ // if I find the element again its gonna be a pair of the element visited
//         minDistance = Math.min(minDistance, i - elementsVisited[a[i]]);
//     }else{
//         elementsVisited[a[i]] = i; // save an element visited
//     }
// }
// if(minDistance !== Infinity){
//     return minDistance;
// }else{
//     return -1
// }

  return distances;
}

// ---------- Default Graph ----------
const defaultGraph: Graph = {
  A: new Map([
    ["B", 1],
    ["C", 4],
  ]),
  B: new Map([
    ["A", 1],
    ["C", 2],
    ["D", 5],
  ]),
  C: new Map([
    ["A", 4],
    ["B", 2],
    ["D", 1],
  ]),
  D: new Map([
    ["B", 5],
    ["C", 1],
  ]),
};
const DijkstraAlgoVisualizer: React.FC = () => {
const [startNode, setStartNode] = useState("A");
  const [result, setResult] = useState<{ [key: string]: number } | null>(null);

  const runAlgorithm = () => {
    if (!defaultGraph[startNode]) {
      alert("Invalid start node! Use A, B, C, or D.");
      return;
    }
    const output = dijkstra(defaultGraph, startNode);
    setResult(output);
  };
return (
    <div style={{ padding: "20px" }}>
      <h2>Dijkstra Algorithm (React + TS)</h2>

      <input
        value={startNode}
        onChange={(e) => setStartNode(e.target.value.toUpperCase())}
        placeholder="Start Node (A/B/C/D)"
        style={{ marginRight: "10px", padding: "5px" }}
      />

      <button onClick={runAlgorithm} style={{ padding: "5px 12px" }}>
        Run
      </button>

      <pre style={{ background: "#eee", padding: "10px", marginTop: "20px" }}>
        {result ? JSON.stringify(result, null, 2) : "No result yet"}
      </pre>
    </div>
  );
};
export default DijkstraAlgoVisualizer;