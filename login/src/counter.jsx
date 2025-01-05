import React, { useState } from "react";

const Counter = () => {
  // Initialize the counter state with useState
  const [count, setCount] = useState(100);

  // Function to decrease the counter
  const decreaseCount = () => {
    setCount((prevCount) => prevCount - 1); // Decrement the count
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button 
        onClick={decreaseCount} 
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Decrease
      </button>
    </div>
  );
};

export default Counter;
