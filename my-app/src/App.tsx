import React from "react";
import BinarySearchVisualizer from "./components/BinarySearchVisualizer";
import SearchList from "./components/SearchList";
import Linear from "./components/Linear";
import DijkstraAlgoVisualizer from "./components/DijkstraAlgo";

export default function App() {
  return (
    <div>
      <h1>React + TypeScript Binary Search Demo</h1>
      {/* <BinarySearchVisualizer />
      <SearchList />
      <Linear /> */}
      <DijkstraAlgoVisualizer />
    </div>
  );
}
