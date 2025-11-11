import React, { useState } from "react";


export default function LinearSearchVisualizer() {
const [array,setArray]=useState<string>("1,3,5,7,9,11,13,15");
const [target,setTarget]=useState<string>("7");
const [result,setResult]=useState<string>("");


   const handleSearch=()=>{
    debugger;

    const nums = array
      .split(",")
      .map((x) => Number(x.trim()))
      .filter((x) => !isNaN(x))
      .sort((a, b) => a - b);
    const t = Number(target);
    // for loo itterate array if find target then return else resume
    for(let i=0;i<nums.length;i++){
    if(nums[i]===t){
        setResult(`Found at ${i}`);
        return ;
    }
    else{}
    }
   }

return(
    <div>
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
        <h1>{result}</h1>
      </div>
      </div>
);
}
