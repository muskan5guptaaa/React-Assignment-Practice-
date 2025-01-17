import React, { useState, useEffect } from 'react'; 
import ReactDOM from 'react-dom'; 

function Timer() {
  const [count, setCount] = useState(0); 
  const [calculation, setCalculation] = useState(0);

  // Effect hook to update the calculation when count changes
  useEffect(() => {
    setCalculation(count * 2); 
  }, [count]); // Trigger effect when count changes

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p> 
    </>
  );
}

// Rendering the Counter component in the root div
ReactDOM.render(<Timer />, document.getElementById('root'));
