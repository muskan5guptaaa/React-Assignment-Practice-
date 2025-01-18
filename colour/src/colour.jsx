import React, { useState, useEffect } from "react";

function ColorChanger() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.body.style.backgroundColor = `rgb(${count * 20 % 255}, ${count * 50 % 255}, ${count * 80 % 255})`;

    return () => {
      console.log("Cleanup on count change");
    };
  }, [count]); // Effect runs every time `count` changes.

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default ColorChanger;
