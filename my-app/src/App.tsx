import React from "react";
import BinarySearchVisualizer from "./components/BinarySearchVisualizer";
import SearchList from "./components/SearchList";

export default function App() {
  return (
    <div>
      <h1>React + TypeScript Binary Search Demo</h1>
      <BinarySearchVisualizer />
      <SearchList />
    </div>
  );
}
