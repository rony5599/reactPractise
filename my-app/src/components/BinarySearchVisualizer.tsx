import React, { useState } from "react";

interface Step {
  left: number;
  mid: number;
  right: number;
  midVal: number;
}

export default function BinarySearchVisualizer() {
  const [array, setArray] = useState<string>("1,3,5,7,9,11,13,15");
  const [target, setTarget] = useState<string>("7");
  const [result, setResult] = useState<string>("");
  const [steps, setSteps] = useState<Step[]>([]);

  const handleSearch = () => {
    debugger;
    const nums = array
      .split(",")
      .map((x) => Number(x.trim()))
      .filter((x) => !isNaN(x))
      .sort((a, b) => a - b);

    const t = Number(target);
    let left = 0;
    let right = nums.length - 1;
    const path: Step[] = [];

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      path.push({ left, mid, right, midVal: nums[mid] });

      if (nums[mid] === t) {
        setResult(`✅ Found ${t} at index ${mid}`);
        setSteps(path);
        return;
      } else if (nums[mid] < t) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    setResult(`❌ ${t} not found`);
    setSteps(path);
  };

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: 20,
        maxWidth: 600,
        margin: "auto",
      }}
    >
      <h2>Binary Search Visualizer</h2>

      <div style={{ marginBottom: 10 }}>
        <label>Array: </label>
        <input
          value={array}
          onChange={(e) => setArray(e.target.value)}
          style={{ width: "80%" }}
        />
      </div>

      <div style={{ marginBottom: 10 }}>
        <label>Target: </label>
        <input
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          style={{ width: "100px" }}
        />
        <button onClick={handleSearch} style={{ marginLeft: 10 }}>
          Search
        </button>
      </div>

      <p>
        <strong>Result:</strong> {result}
      </p>

      {steps.length > 0 && (
        <>
          <h4>Steps:</h4>
          <ol>
            {steps.map((s, i) => (
              <li key={i}>
                Left={s.left}, Mid={s.mid} (value={s.midVal}), Right={s.right}
              </li>
            ))}
          </ol>
        </>
      )}
    </div>
  );
}
